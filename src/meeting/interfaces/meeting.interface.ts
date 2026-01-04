import { Document, Types } from 'mongoose';

export interface Meeting extends Document {
  readonly date: Date;
  readonly invocation: Types.ObjectId;
  readonly speakers: Types.ObjectId[];
  readonly benediction: Types.ObjectId;
  readonly wardBusiness: Array<{ type: WardBusinessType; text: String }>;
  readonly stakeBusiness: Array<String>;
}

export enum WardBusinessType {
  RELEASE = 'RELEASE',
  CALL = 'CALL',
  ANNOUNCE = 'ANNOUNCE',
  CUSTOM = 'CUSTOM',
}
