import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Meeting } from './interfaces/meeting.interface';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';

@Injectable()
export class MeetingService {
  constructor(
    @Inject('MEETING_MODEL') private readonly meetingModel: Model<Meeting>,
  ) {}

  async create(createMeetingDto: CreateMeetingDto): Promise<Meeting> {
    const createdMeeting = new this.meetingModel(createMeetingDto);
    return createdMeeting.save();
  }

  async findAll(): Promise<Meeting[]> {
    return this.meetingModel.find({}).exec();
  }

  async findOne(id: string): Promise<Meeting> {
    const meeting = await this.meetingModel.findById(id).exec();
    if (!meeting) {
      throw new NotFoundException(`Meeting with ID ${id} not found`);
    }
    return meeting;
  }

  async update(
    id: string,
    updateMeetingDto: UpdateMeetingDto,
  ): Promise<Meeting> {
    const updatedMeeting = await this.meetingModel
      .findByIdAndUpdate(id, updateMeetingDto, { new: true })
      .exec();
    if (!updatedMeeting) {
      throw new NotFoundException(`Meeting with ID ${id} not found`);
    }
    return updatedMeeting;
  }

  async remove(id: string): Promise<void> {
    const result = await this.meetingModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Meeting with ID ${id} not found`);
    }
  }
}
