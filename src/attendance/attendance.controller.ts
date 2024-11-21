import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { AttendanceRecord } from './attendance.entity';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get()
  findAll(): Promise<AttendanceRecord[]> {
    return this.attendanceService.findAll();
  }

  @Post()
  create(@Body() createAttendanceDto: { name: string; date: string; status: string }): Promise<AttendanceRecord> {
    return this.attendanceService.create(createAttendanceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.attendanceService.remove(id);
  }
}
