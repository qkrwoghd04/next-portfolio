'use server';

import Feedback, { IFeedbackDocument } from "@/models/feedbackModel"; // IFeedbackDocument 가져오기
import { revalidatePath } from "next/cache";
import { connectToMongoDB } from "./db";

export const createFeedbacks = async (formData: FormData) => {
    try {
        await connectToMongoDB();
        
        const job = formData.get("job") as string;
        const content = formData.get("feedback") as string;

        // 입력 검증
        if (!job || !content) {
            return { success: false, error: 'Job과 피드백 내용은 필수입니다.' };
        }

        // 피드백 문서 생성
        const newFeedback: IFeedbackDocument = new Feedback({
            job,
            content,
        });

        // 피드백을 데이터베이스에 저장
        await newFeedback.save();

        // Mongoose 문서를 평범한 객체로 변환
        const feedbackData = newFeedback.toObject(); // toObject()로 변환

        // _id를 문자열로 변환
        feedbackData._id = feedbackData._id.toString(); // _id를 문자열로 변환

        // 재검증 후 경로 업데이트
        revalidatePath("/");

        return { success: true, data: feedbackData };
    } catch (error) {
        console.error('피드백 생성 오류:', error);
        return { success: false, error: '피드백 생성 실패' };
    }
};
