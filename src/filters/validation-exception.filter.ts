import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response, Request } from 'express';
import { ValidationException } from '../exceptions';

@Catch(ValidationException)
export class ValidationExceptionFilter implements ExceptionFilter {
  catch(exception: ValidationException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const message = exception.message;
    const errors = exception.getSimpleErrors();

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      message: message,
      errors: errors,
      path: request.url,
    });
  }
}
