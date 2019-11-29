import { IsEmail, IsNotEmpty, IsString, validate } from 'class-validator';
export class CreateCatDto {
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
