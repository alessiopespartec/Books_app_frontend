import { KeycloakService } from 'keycloak-angular';
import { keycloakEnv } from '../../environment/environment';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () => {
    console.log('Initializing Keycloak...');
    if (typeof window !== 'undefined') {
      console.log('Starting Keycloak...');
      return keycloak
        .init({
          config: {
            url: 'http://localhost:8080',
            realm: keycloakEnv.realm,
            clientId: keycloakEnv.clientId,
          },
          initOptions: {
            onLoad: 'login-required',
          },
        })
        .then((authenticated) => {
          if (authenticated) {
            console.log('Authenticated');
          } else {
            console.warn('Not authenticated');
          }
        })
        .catch(console.error);
    } else {
      return Promise.resolve(true);
    }
  };
}
