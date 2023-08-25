import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    description: 'User firstname',
    example: 'Joe',
  })
  @IsString()
  @MinLength(2)
  firstname: string;

  @ApiProperty({
    description: 'User lastname',
    example: 'Smith',
  })
  @IsString()
  @MinLength(4)
  lastname: string;

  @ApiProperty({
    description: 'User email',
    example: 'hola@example.com',
  })
  @IsString()
  email: string;

  @ApiProperty({
    description: 'User phone',
    example: '4152632530',
  })
  @IsString()
  @MinLength(10)
  phone: string;

  @ApiProperty({
    description: 'User birthday',
    example: '2000-01-12',
  })
  @IsString()
  birthday: string;

  @ApiProperty({
    example: '2023-08-25T18:56:40.588Z',
    description: 'Date autocreated by system',
  })
  @IsDate()
  @IsOptional()
  createdAt: Date;

  @ApiProperty({
    example: '2023-08-25T18:56:40.588Z',
    description: 'Date autoupdated by system',
  })
  @ApiProperty({})
  @IsDate()
  @IsOptional()
  updatedAt: Date;
}
