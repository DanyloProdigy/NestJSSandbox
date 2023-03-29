import { JoiSchema } from 'nestjs-joi';
import * as Joi from 'joi';

export class addToInventoryDto {
  @JoiSchema(Joi.string().required())
  userId!: string;
  assets: unknown;
}
