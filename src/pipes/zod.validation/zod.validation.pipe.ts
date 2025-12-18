// common/pipes/zod-validation.pipe.ts
import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ZodType } from 'zod';
import * as z from 'zod';

export class ZodValidationPipe<T> implements PipeTransform {
  constructor(private schema: ZodType<T>) {}

  transform(value: unknown): T {
    try {
      return this.schema.parse(value);
    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new BadRequestException({
          message: 'Validation failed',
          errors: error.issues.map((issue) => ({
            field: issue.path.join('.'),
            message: issue.message,
          })),
        });
      }
      throw error;
    }
  }
}
