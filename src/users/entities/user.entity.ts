import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ type: 'text', default: 'One firstname' })
  firstname: string;

  @Column({ type: 'text', default: 'One lastname' })
  lastname: string;

  @Column({ type: 'text', default: 'One email' })
  email: string;

  @Column({ type: 'text', default: 'One phone' })
  phone: string;

  @Column({ type: 'date', default: new Date() })
  birthday: string;
}
