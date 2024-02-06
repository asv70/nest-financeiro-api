
export class ApiServerConfig {
  
  public static readonly HOST: string = process.env.API_HOST || "localhost";
  
  public static readonly PORT: number = parseInt(process.env.API_PORT) || 3000;
  
  public static readonly ACCESS_TOKEN_SECRET: string = process.env.API_ACCESS_TOKEN_SECRET;
  
  public static readonly ACCESS_TOKEN_TTL_IN_MINUTES: number = parseInt(process.env.API_ACCESS_TOKEN_TTL_IN_MINUTES);
  
  public static readonly ACCESS_TOKEN_HEADER: string = process.env.API_ACCESS_TOKEN_HEADER;
  
  public static readonly LOGIN_USERNAME_FIELD: string = process.env.API_LOGIN_USERNAME_FIELD;
  
  public static readonly LOGIN_PASSWORD_FIELD: string = process.env.API_LOGIN_PASSWORD_FIELD;
  
  public static readonly LOG_ENABLE: boolean = process.env.API_LOG_ENABLE === 'true';

}