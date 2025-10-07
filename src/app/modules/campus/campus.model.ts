import mongoose, { Schema, Document } from "mongoose";
import { TCampus } from "./campus.interface";

const CampusSchema = new Schema<TCampus & Document>(
  {
    campusName: { type: String},
    addressLine1: { type: String},
    addressLine2: { type: String },
    college: { type: String},
    country: { type: String},
    timezone: { type: String},
    currency: { type: String},
    notificationEmail: { type: String},
    contactPerson: { type: String},
    logo: { type: String }, // URL or path to the uploaded logo
  },
  { timestamps: true }
);

const Campus = mongoose.model<TCampus & Document>("Campus", CampusSchema);

export default Campus;
