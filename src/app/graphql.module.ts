import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache, split } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';

interface Definintion {
  kind: string;
  operation?: string;
}

export function createApollo(
  httpLink: HttpLink,
  keycloakService: KeycloakService
): ApolloClientOptions<any> {
  const link = split(
    // split based on operation type
    ({ query }) => {
      const { kind, operation }: Definintion = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    new WebSocketLink(
      new SubscriptionClient(environment.api.ws, {
        reconnect: true,
        connectionParams: () => {
          const authorization = `Bearer ${
            keycloakService.getKeycloakInstance().token
          }`;

          return authorization
            ? { authorization, headers: { authorization } }
            : {};
        },
      })
    ),
    httpLink.create({ uri: environment.api.http })
  );

  return {
    link: link,
    cache: new InMemoryCache({
      addTypename: false,
    }),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, KeycloakService],
    },
  ],
})
export class GraphQLModule {}
