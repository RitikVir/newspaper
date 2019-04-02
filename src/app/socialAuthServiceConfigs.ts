import { AuthServiceConfig, GoogleLoginProvider } from 'angular-6-social-login';
import { environment } from 'key';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(environment.clientId)
    }
  ]);
  return config;
}
