
export class DatabaseConfig {
  
  public static readonly DB_HOST: string = process.env.DB_HOST;
  
  public static readonly DB_PORT: number = parseInt(process.env.DB_PORT);
  
  public static readonly DB_USERNAME: string = process.env.DB_USERNAME;
  
  public static readonly DB_PASSWORD: string = process.env.DB_PASSWORD;
  
  public static readonly DB_NAME: string = process.env.DB_NAME;
  
  public static readonly DB_LOG_ENABLE: boolean = process.env.DB_LOG_ENABLE === 'true';

}
