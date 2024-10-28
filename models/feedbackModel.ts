import mongoose, { Document, Model } from "mongoose";

export interface IFeedback {
  job: string;
  content: string;
}

export interface IFeedbackDocument extends IFeedback, Document {
  createdAt: Date;
  updatedAt: Date;
  _id: mongoose.Types.ObjectId; // _id의 타입을 명시적으로 설정
}

const feedbackSchema = new mongoose.Schema<IFeedbackDocument>(
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
  mongoose.models?.Feedback || mongoose.model("Feedback", feedbackSchema);

export default Feedback;
