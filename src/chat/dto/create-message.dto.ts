import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsBoolean,
  IsInt,
  Min,
  Max,
} from 'class-validator';

export class CreateMessage {
  @IsNotEmpty()
  @IsString()
  readonly message: string;

  @IsBoolean()
  readonly status: boolean;

  @IsInt()
  @Min(0)
  @Max(10)
  readonly count: number;
}
