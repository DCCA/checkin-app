import { Schema, Document, model } from 'mongoose';

interface ICompany extends Document {
  companyName: string;
  adminEmail: string;
  adminPassword: string;
  listEmployees: string;
  config: {
    totalOccupancy: number;
    allowedOccupancy: number;
  };
}

const companySchema = new Schema(
  {
    companyName: {
      type: String,
      required: true,
    },
    adminEmail: {
      type: String,
      required: true,
    },
    adminPassword: {
      type: String,
      required: true,
    },
    listEmployees: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Employee',
      },
    ],
    config: {
      totalOccupancy: {
        type: Number,
        required: true,
      },
      allowedOccupancy: {
        type: Number,
        required: true,
      },
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
    },
  }
);

export default model<ICompany>('Company', companySchema);
