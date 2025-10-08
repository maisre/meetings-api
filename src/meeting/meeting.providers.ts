import { Mongoose } from 'mongoose';
import { MeetingSchema } from './schemas/meeting.schema';

export const meetingProviders = [
  {
    provide: 'MEETING_MODEL',
    useFactory: (mongoose: Mongoose) =>
      mongoose.model('meetings', MeetingSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
