import { Document } from 'mongoose';

export interface Member extends Document {
  readonly name: string;
  readonly unit: string;
}
