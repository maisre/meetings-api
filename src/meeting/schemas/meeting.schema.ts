import * as mongoose from 'mongoose';
import { WardBusinessType } from '../interfaces/meeting.interface';

export const MeetingSchema = new mongoose.Schema({
  date: Date,
  invocation: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
  speakers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
  benediction: { type: mongoose.Schema.Types.ObjectId, ref: 'Member' },
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
