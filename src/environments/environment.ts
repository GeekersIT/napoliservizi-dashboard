// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const protocol = window.location.protocol.replace('http', 'ws');
const host = window.location.host;

export const realm = 'napoliservizi';

export const base = 'pms.comune.napoli.it';

export const environment = {
  production: false,
  keycloak: {
    url: 'https://' + base + '/auth',
    admin: 'https://' + base + '/auth/admin/realms/' + realm,
    realm: realm,
    clientId: 'dashboard-client',
  },
  api: {
    http: '/db/v1/graphql',
    ws: `${protocol}//${host}/db/v1/graphql`,
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
