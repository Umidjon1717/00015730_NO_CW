import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AttendanceRecord } from './attendance.entity';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(AttendanceRecord)
    private attendanceRepository: Repository<AttendanceRecord>,
  ) {}

  findAll(): Promise<AttendanceRecord[]> {
    return this.attendanceRepository.find();
  }

  create(createAttendanceDto: { name: string; date: string; status: string }): Promise<AttendanceRecord> {
    const attendanceRecord = this.attendanceRepository.create(createAttendanceDto);
    return this.attendanceRepository.save(attendanceRecord);
  }

  async remove(id: string): Promise<void> {
    await this.attendanceRepository.delete(id);
  }
}
