import { NestFactory } from '@nestjs/core';
import { AppModule } from '@application/di/app.module';
import { ApiServerConfig } from '@infrastructure/config/api-server-config';
import { Logger, ValidationPipe } from '@nestjs/common';


export class ServerApplication {

  private readonly host: string = ApiServerConfig.HOST;
  private readonly port: number = ApiServerConfig.PORT;

  public async run(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('api/');
    
    this.log();
    await app.listen(this.port, this.host);
  }

  private log(): void {
    Logger.log(`
    
                              +-----------------------------------------------+
                              |              NEST FINANCEIRO API              |
                              +-----------------------------------------------+
                              |             The server is 🚀 launching on:    |
                              |          👉 host: ${this.host};                  |
                              |          👉 port: ${this.port};                       |
                              +-----------------------------------------------+
  
    `, ServerApplication.name);
  }

  public static new(): ServerApplication {
    return new ServerApplication();
  }

}
