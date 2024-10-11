'use server';
import Feedback from "@/models/feedbackModel";
import { revalidatePath } from "next/cache";
import { connectToMongoDB } from "./db";

export const createFeedbacks = async (formData: FormData) => {
  await connectToMongoDB();
  // Extracting todo content and time from formData
  const feedback = formData.get("feedback");
  const feedbackDeadline = formData.get("feedbackDeadline");
  try {
      // Creating a new todo using Todo model
      const newFeedback = await Feedback.create({
          feedback,
          feedbackDeadline,
      });
      // Saving the new todo
      newFeedback.save();
      // Triggering revalidation of the specified path ("/")
      revalidatePath("/");
      // Returning the string representation of the new todo
      return newFeedback.toString();
  } catch (error) {
      console.log(error);
      return {message: 'error creating feedback'};
  }
};