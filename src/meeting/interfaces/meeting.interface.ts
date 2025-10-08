import { Document } from 'mongoose';

export interface Meeting extends Document {
  readonly date: Date;
  readonly invocation: String;
  readonly speakers: Array<String>;
  readonly benediction: String;
  readonly wardBusiness: Array<{ type: WardBusinessType; text: String }>;
  readonly stakeBusiness: Array<String>;
}

export enum WardBusinessType {
  RELEASE = 'RELEASE',
  CALL = 'CALL',
  ANNOUNCE = 'ANNOUNCE',
  CUSTOM = 'CUSTOM',
}
