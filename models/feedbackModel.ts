"use server"
import {Schema, Document, Model, Types, model, models } from "mongoose";

export interface IFeedback {
  job: string;
  content: string;
}

export interface IFeedbackDocument extends IFeedback, Document {
  createdAt: Date;
  updatedAt: Date;
}

const feedbackSchema = new Schema<IFeedbackDocument>(
  {
    job: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Feedback: Model<IFeedbackDocument> = 
  models?.Feedback || model("Feedback", feedbackSchema);

export default Feedback;
