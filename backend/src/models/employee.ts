import { Schema, model, Document } from 'mongoose';

interface IEmployee extends Document {
  name: string;
  password: string;
  team: string;
  allowed: boolean;
  checkInList: string[];
}

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  //   Employee is allowed to work in-company?
  allowed: {
    type: Boolean,
    default: false,
  },
  //   What is the check-in status for that employee
  checkInList: [
    {
      type: Schema.Types.ObjectId,
      ref: 'CheckIn',
    },
  ],
});

export default model<IEmployee>('Employee', employeeSchema);
