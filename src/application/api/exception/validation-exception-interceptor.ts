import { Response, Request } from 'express';
import { QueryFailedError } from 'typeorm';
import { Catch, ExceptionFilter, ArgumentsHost, HttpStatus, Logger, HttpException, UnauthorizedException } from '@nestjs/common';
import { ValidationException } from '@core/common/util/class-validator/class-validator';
import { ApiServerConfig } from '@infrastructure/config/api-server-config';

@Catch()
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: Error, host: ArgumentsHost) {
    const request: Request = host.switchToHttp().getRequest();
    const response: Response = host.switchToHttp().getResponse();
    const status = HttpStatus.BAD_REQUEST;

    let statusResponse: ValidationException;

    // Nest
    // console.log('exception instanceof HttpException::: ',exception instanceof HttpException);
    // console.log('exception instanceof UnauthorizedException::: ',exception instanceof UnauthorizedException);
    // Core
    // console.log('exception instanceof Exception::: ',exception instanceof ValidationException);
    // TypeORM
    // console.log('exception instanceof QueryFailedError::: ',exception instanceof QueryFailedError);
    // console.log('Error:: ', exception.constructor.name)
    
    statusResponse = this.handleNestError(exception, statusResponse);
    statusResponse = this.handleCoreError(exception, statusResponse);
    statusResponse = this.handleTypeORMError(exception, statusResponse);

    if (ApiServerConfig.LOG_ENABLE) {
      const message: string =
        `
         Method: ${request.method}; 
         Path: ${request.path}; 
         Error: ${exception.message}
         
        `;
      
      Logger.error(message);
    }

    response.json(statusResponse);
  }

  private handleNestError(error: Error, exceptionResponse: ValidationException): ValidationException {    
    if (error instanceof HttpException) {
      exceptionResponse = {
        code: error.getStatus(),
        name: error.name,
        message: error.message,
        details: null,
      }
    }
    if (error instanceof UnauthorizedException) {
      exceptionResponse = {
        code: 401,
        name: error.name,
        message: 'Unauthorized error.',
        details: null,
      }
    }
    return exceptionResponse;
  }

  private handleCoreError(error: Error, exceptionResponse: ValidationException): ValidationException {
    if(error instanceof ValidationException) {
      exceptionResponse = {
        code: error.code,
        name: error.name,
        message: error.message,
        details: error.details
      }
    }
    return exceptionResponse;
  }

  private handleTypeORMError(error: Error, exceptionResponse: ValidationException): ValidationException {
    if(error instanceof QueryFailedError) {
      exceptionResponse = {
        code: error.driverError['code'],
        name: error.name,
        message: error.message,
        details: [
          {
            property: error.driverError['table'],
            message: error.driverError['detail']
          }
        ]
      }
    }
    return exceptionResponse;
  }

}
