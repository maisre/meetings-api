import { Document } from 'mongoose';

export interface Member extends Document {
  readonly firstName: string;
  readonly lastName: string;
  readonly email?: string;
  readonly phone?: string;
  readonly unit: string;
  readonly calling?: string;
  readonly isActive: boolean;
}
