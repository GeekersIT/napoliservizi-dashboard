import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { environment } from 'src/environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { AvatarModule } from 'ngx-avatar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  TranslateCompiler,
  TranslateLoader,
  TranslateModule,
  TranslateService,
} from '@ngx-translate/core';
import {
  MESSAGE_FORMAT_CONFIG,
  TranslateMessageFormatCompiler,
} from 'ngx-translate-messageformat-compiler';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { GraphQLModule } from './graphql.module';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginationIntlService } from './_core/_services/mat-pagination-intl.service';
import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { ConfirmDialogComponent } from './_core/_components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { FormlyModule, FORMLY_CONFIG } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { RequiredService } from './_core/_services/required.service';

registerLocaleData(localeIt);

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function initializeRequiredService(requiredService: RequiredService) {
  return (): Promise<any> => {
    return requiredService.Init();
  };
}

export function formlyValidationConfig(translate: TranslateService) {
  return {
    validationMessages: [
      {
        name: 'required',
        message() {
          return translate.stream('FORM.VALIDATION.REQUIRED');
        },
      },
      {
        name: 'forceSelection',
        message() {
          return translate.stream('FORM.VALIDATION.FORCESELECTION');
        },
      },
    ],
  };
}

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: environment.keycloak,
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
    });
}

export const APP_LOCALE_ID = 'it';

@NgModule({
  declarations: [AppComponent, ConfirmDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    HttpClientModule,
    AvatarModule,
    TranslateModule.forRoot({
      defaultLanguage: APP_LOCALE_ID,
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler,
      },
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    GraphQLModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormlyModule.forRoot({
      extras: { lazyRender: true },
      types: [
        {
          name: 'datepicker',
          defaultOptions: {
            templateOptions: {
              datepickerOptions: { datepickerTogglePosition: 'prefix' },
            },
          },
        },
        { name: 'textarea', defaultOptions: { templateOptions: { rows: 5 } } },
        { name: 'input', defaultOptions: { templateOptions: { step: 0.1 } } },
      ],
    }),
    FormlyMaterialModule,
    MatDialogModule,
    NgxUiLoaderModule,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
    { provide: LOCALE_ID, useValue: APP_LOCALE_ID },
    {
      provide: FORMLY_CONFIG,
      multi: true,
      useFactory: formlyValidationConfig,
      deps: [TranslateService],
    },
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginationIntlService,
    },
    { provide: MESSAGE_FORMAT_CONFIG, useValue: { locales: [APP_LOCALE_ID] } },
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    },
    RequiredService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeRequiredService,
      deps: [RequiredService],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
