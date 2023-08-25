import { IsDate, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  firstname: string;

  @IsString()
  @MinLength(4)
  lastname: string;

  @IsString()
  email: string;

  @IsString()
  @MinLength(10)
  phone: string;

  @IsString()
  birthday: string;

  @IsDate()
  @IsOptional()
  createdAt: Date;

  @IsDate()
  @IsOptional()
  updatedAt: Date;
}
