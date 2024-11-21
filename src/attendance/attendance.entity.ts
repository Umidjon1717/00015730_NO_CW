import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class AttendanceRecord {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  date: string;

  @Column()
  status: string;
}