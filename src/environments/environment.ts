// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

// Add here your keycloak configuration information
import {KeycloakConfig, KeycloakInitOptions, KeycloakOptions} from 'keycloak-angular';

// const keycloakConfig: KeycloakConfig = {
//   url: 'http://localhost:8080/auth',
//   realm: 'TheLibrary',
//   clientId: 'thelibrary-app'
// };
//
// const keycloakInitOptions: KeycloakInitOptions = {
//   // onLoad: 'login-required',
//   checkLoginIframe: false
// };
//
// const keycloakOptions: KeycloakOptions = {
//   config: keycloakConfig,
//   initOptions: keycloakInitOptions,
//   enableBearerInterceptor: true
// };

export const baseUrls = {
  catalog: 'http://localhost:8090/api'
};

export const environment = {
  production: false,
  keycloak: {
    url: 'http://localhost:8080/auth',
    realm: 'TheLibrary',
    clientId: 'thelibrary-app'
  },
  baseUrl: {
    catalog: {
      getBooks: baseUrls.catalog + '/books'
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
