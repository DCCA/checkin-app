import { Schema, model, Document } from 'mongoose';

interface ICheckIn extends Document {
  userId: string;
  entry: Date;
  exit: Date;
  timeSpent: Date;
}

const checkInSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    entry: {
      type: Date,
      required: true,
    },
    exit: {
      type: Date,
    },
    timeSpent: {
      type: Date,
      // TODO - Define a way to auto update this field with the input of the other fields
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
    },
  }
);

export default model<ICheckIn>('CheckIn', checkInSchema);
