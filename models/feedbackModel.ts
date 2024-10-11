import mongoose, { Document, Model } from "mongoose";

// Defining the structure of a todo item using TypeScript interfaces
export interface Feedback {
  sex: string;
  job: string;
  score: Number;
  description: string;
}

export interface FeedbackDocument extends Feedback, Document {
  createdAt: Date;
  updatedAt: Date;
}


const FeedbackSchema = new mongoose.Schema<FeedbackDocument>(
  {
    sex: {
      required: true,
      type: String,
    },
    job: {
      required: true,
      type: String,
    },
    score: {
      required: true,
      type: Number,
    },
    description: {
      required: false,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Creating a mongoose model for the todo document
const Feedback: Model<FeedbackDocument> =
  mongoose.models?.Feedback || mongoose.model("Feedback", FeedbackSchema);

export default Feedback;