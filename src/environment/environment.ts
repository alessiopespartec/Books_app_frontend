export const environment = {
  apiBaseUrl: 'http://localhost:8081/api/v1',
  auth: {
    username: 'admin@example.com',
    password: 'password123',
  },
};

export const keycloakEnv = {
  realm: 'myrealm',
  clientId: 'frontend',
  baseUrl: 'http://localhost:8080',
};
