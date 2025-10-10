import * as mongoose from 'mongoose';
import { WardBusinessType } from '../interfaces/meeting.interface';

export const MeetingSchema = new mongoose.Schema({
  date: Date,
  invocation: Number,
  speakers: [Number],
  benediction: Number,
  wardBusiness: [
    {
      type: {
        type: String,
        enum: Object.values(WardBusinessType),
      },
      text: String,
    },
  ],
  stakeBusiness: [String],
});
