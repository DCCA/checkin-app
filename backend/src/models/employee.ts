import { Schema } from 'mongoose';

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
  //   What is the check-in status for that employee
  checkInStatus: [
    {
      type: Schema.Types.ObjectId,
      ref: 'CheckIn',
    },
  ],
  //   Employee is allowed to work in-company?
  allowed: {
    type: Boolean,
    default: false,
  },
});
