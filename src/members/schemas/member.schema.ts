import * as mongoose from 'mongoose';

export const MemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    unit: { type: Number, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (_, ret: Record<string, unknown>) => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      },
    },
  },
);
