import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('users')
class User {

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column('varchar')
  email: string;

  @Column('varchar')
  password: string;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;
}

export default User;