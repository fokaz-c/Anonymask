import * as simpleOAuth2 from 'simple-oauth2';
import { ConfigService } from '@nestjs/config';
import GoogleAuthService from '../api/service/AuthService';
import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';


@Injectable()
export default class GoogleAuthServiceImpl implements GoogleAuthService {
  private oauth2: simpleOAuth2.AuthorizationCode;

  constructor(private configService: ConfigService) {
    const oauth2Client = new simpleOAuth2.AuthorizationCode({
      client: {
        id: this.configService.get<string>('GOOGLE_CLIENT_ID'),
        secret: this.configService.get<string>('GOOGLE_CLIENT_SECRET'),
      },
      auth: {
        tokenHost: 'https://accounts.google.com',
        authorizePath: '/o/oauth2/auth',
        tokenPath: '/o/oauth2/token',
      },
    });

    this.oauth2 = oauth2Client;
  }

  // Generate the Google OAuth URL
  generateGoogleOAuthURL(): string {
    const scopes = this.configService.get<string>('GOOGLE_SCOPES').split(',');
    const state = uuidv4();
    const authorizationUri = this.oauth2.authorizeURL({
      redirect_uri: this.configService.get<string>('GOOGLE_REDIRECT_URI'),
      scope: scopes,
      state: state,
    });
    return authorizationUri;
  }

  // Retrieves user information from the OAuth token received after a successful Google OAuth login.
  async getUserInfoFromOAuthToken(code: string): Promise<any> {
    try {
      const tokenParams = {
        code,
        redirect_uri: this.configService.get<string>('GOOGLE_REDIRECT_URI'),
      };
  
      // Get the access token using the authorization code
      const accessToken = await this.oauth2.getToken(tokenParams);
  
      // Extract the access token from the response
      const accessTokenString: string = accessToken.token.access_token as string;
  
      const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: {
          Authorization: `Bearer ${accessTokenString}`,
        },
      });
  
      const userInfo = await response.json();
      return userInfo;
    } catch (error) {
      throw new Error(`Failed to get user info from Google: ${error.message}`);
    }
  }  
}