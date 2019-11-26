import { JoiValidationPipe } from './validation.pipe';
import * as Joi from '@hapi/joi';

const schema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required()
})
describe('ValidationPipe', () => {
  it('should be defined', () => {
    expect(new JoiValidationPipe(schema)).toBeDefined();
  });
});
