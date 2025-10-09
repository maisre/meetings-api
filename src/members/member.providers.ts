import { Mongoose } from 'mongoose';
import { MemberSchema } from './schemas/member.schema';

export const memberProviders = [
  {
    provide: 'MEMBER_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('members', MemberSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
