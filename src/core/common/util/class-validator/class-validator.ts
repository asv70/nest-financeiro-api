import { validate, ValidationError } from "class-validator";

export class ValidationException extends Error {

  public readonly code: number;
  public readonly details: ExceptionErrorDetails[];

  constructor(errors: ExceptionError) {
    super('Validation failed');
    this.name = errors.name;
    this.code = errors.description.code;
    this.message = errors.description.message;
    this.details = errors.details;
  }

}

type ExceptionErrorDetails = {
  property: string,
  message: string
}

type ExceptionError = {
  name: string,
  description: { code: number, message: string },
  details: ExceptionErrorDetails[]
}

export class ClassValidator {
  // eslint-disable-next-line @typescript-eslint/ban-types
  public static async validate<T extends object>(target: T, payload: {code: number, message: string}): Promise<void> {
    const errors: ValidationError[] = await validate(target);

    const exceptionErrors: ExceptionError = {
      name: target.constructor.name,
      description: { 
        code: payload.code,
        message: payload.message
      },
      details: errors.map(error => ({
        property: error.property,
        message: error.constraints ? JSON.stringify(error.constraints) : ''
      }))
    }

    if (errors.length > 0) {
      throw new ValidationException(exceptionErrors);
    }
  }
}
