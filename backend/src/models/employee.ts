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
  checkInStatus: {},
  //   Employee is allowed to work in-company?
  allowed: {},
});
