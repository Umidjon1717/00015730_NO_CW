import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendanceModule } from './attendance/attendance.module';
import { AttendanceRecord } from './attendance/attendance.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'attendance.db',
      entities: [AttendanceRecord],
      synchronize: true,  
    }),
    AttendanceModule,
  ],
})
export class AppModule {}
