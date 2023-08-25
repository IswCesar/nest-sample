import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @ApiProperty({
    description: 'Id as UUID',
    example: 'a94947fa-e8e9-4071-b302-7c0a325bdb5f',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    example: '2023-08-25T18:56:40.588Z',
    description: 'Date autocreated by system',
  })
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ApiProperty({
    example: '2023-08-25T18:56:40.588Z',
    description: 'Date autoupdated by system',
  })
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ApiProperty({
    description: 'User firstname',
    example: 'Joe',
  })
  @Column({ type: 'text', default: 'One firstname' })
  firstname: string;

  @ApiProperty({
    description: 'User lastname',
    example: 'Smith',
  })
  @Column({ type: 'text', default: 'One lastname' })
  lastname: string;

  @ApiProperty({
    description: 'User email',
    example: 'hola@example.com',
  })
  @Column({ type: 'text', default: 'One email' })
  email: string;

  @ApiProperty({
    description: 'User phone',
    example: '4152632530',
  })
  @Column({ type: 'text', default: 'One phone' })
  phone: string;

  @ApiProperty({
    description: 'User birthday',
    example: '2000-01-12',
  })
  @Column({ type: 'date', default: new Date() })
  birthday: string;
}
