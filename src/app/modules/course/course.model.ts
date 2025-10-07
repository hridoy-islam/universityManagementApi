import mongoose, { Schema, Document, CallbackError, Types } from "mongoose";
import { TCourse} from "./course.interface";

const courseSchema = new Schema(
  {
    university: { type: String, required: true },
    campus: { type: String, required: true },
    courseName: { type: String, required: true },
    coverPdf: { type: String,},
    status: {
      type: String,
      enum: ['active', 'block'], 
      default: 'active',      
    },
  },
  { timestamps: true } 
);


const Course = mongoose.model<TCourse & Document>(
  "Course",
  courseSchema
);
export default Course;
