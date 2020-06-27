import { Schema, model, Document } from 'mongoose';

interface ICheckIn extends Document {}

const checkInSchema = new Schema({});

export default model<ICheckIn>('CheckIn', checkInSchema);
