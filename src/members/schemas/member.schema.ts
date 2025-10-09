import * as mongoose from 'mongoose';

export const MemberSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: false },
    phone: { type: String, required: false },
    unit: { type: String, required: true },
    calling: { type: String, required: false },
    isActive: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);
