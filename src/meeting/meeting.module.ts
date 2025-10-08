import { Module } from '@nestjs/common';
import { MeetingController } from './meeting.controller';
import { MeetingService } from './meeting.service';
import { meetingProviders } from './meeting.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [MeetingController],
  providers: [MeetingService, ...meetingProviders],
  exports: [MeetingService],
  imports: [DatabaseModule],
})
export class MeetingModule {}
