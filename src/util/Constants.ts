export class ConstantsEnvNames {
  static readonly DB_HOST = 'DB_HOST';
  static readonly DB_USERNAME = 'DB_USERNAME';
  static readonly DB_PWD = 'DB_PWD';
  static readonly DB_NAME = 'DB_NAME';

  static readonly GOOGLE_CLIENT_ID = 'GOOGLE_CLIENT_ID';
  static readonly GOOGLE_CLIENT_SECRET = 'GOOGLE_CLIENT_SECRET';
  static readonly GOOGLE_SCOPES = 'GOOGLE_SCOPES';
  static readonly GOOGLE_REDIRECT_URI = 'GOOGLE_REDIRECT_URI';
  static readonly JWT_SECRET =
    '0a8f110acb2fa7717b6eef5e57e2ba36bfa2a4629fcdfee404830ffded621fb38fd17eee295c7ed0b2dbec77d98b1a36a9f83f4442ad0cb7c05e06f93094dda30cc3d04667bcffa670c22d1c492b7f84d522a5f7657c452922cb52d07d81c4699557c3a4449bc6c2c86a38d0271921798d778c925deca0fb76853db9481391f80da201b28806ab870af16c600a1ca76363b5906d11c88edf17904abb85ad9438ead40a55bde327759fa866062e5ba848463f87975fac6d25b9a546c484e3aa0e8b881dc4a55b2054e644ad9b3d44f69c2630593e80490e0bd61634a8d8fbbd79aa357026c52eb0052c13cbcc207e4369abfb8b7a81a50ea7f791d87c080531db';
  static readonly JWT_ALGO = 'HS256';
  static readonly JWT_EXPIRES_IN = "24h";

  // Private constructor to prevent instantiation
  private constructor() {}
}