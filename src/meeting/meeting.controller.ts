import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { Meeting } from './interfaces/meeting.interface';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { ParseObjectIdPipe } from './pipes/parse-object-id.pipe';

@Controller('meetings')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createMeetingDto: CreateMeetingDto): Promise<Meeting> {
    return this.meetingService.create(createMeetingDto);
  }

  @Get()
  async findAll(): Promise<Meeting[]> {
    return this.meetingService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseObjectIdPipe) id: string): Promise<Meeting> {
    return this.meetingService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id', ParseObjectIdPipe) id: string,
    @Body() updateMeetingDto: UpdateMeetingDto,
  ): Promise<Meeting> {
    return this.meetingService.update(id, updateMeetingDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id', ParseObjectIdPipe) id: string): Promise<void> {
    return this.meetingService.remove(id);
  }
}
