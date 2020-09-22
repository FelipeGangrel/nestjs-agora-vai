import { HttpException, HttpStatus } from '@nestjs/common';
import { ValidationError } from 'class-validator';

export class ValidationException extends HttpException {
  validationErrors: ValidationError[];
  constructor(errors: ValidationError[]) {
    super('Erro de validação', HttpStatus.BAD_REQUEST);
    this.validationErrors = errors;
  }

  public getSimpleErrors() {
    const simpleErrors = {};
    this.validationErrors.forEach(error => {
      const property = error.property;
      const message = Object.values(error.constraints)[0];
      simpleErrors[property] = message;
    });
    return simpleErrors;
  }
}
