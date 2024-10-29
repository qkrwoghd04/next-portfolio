"use server"

import mongoose, { Connection } from "mongoose";

let cachedConnection: Connection | null = null;

export async function connectToMongoDB() {
  if (cachedConnection) {
    console.log("캐시된 데이터베이스 연결 성공");
    return cachedConnection;
  }

  try {
    const database = await mongoose.connect(process.env.MONGODB_URI!);

    cachedConnection = database.connection;
    console.log("데이터베이스 연결 성공");

    return cachedConnection;
  } catch (error) {
    console.log("에러가 발생했습니다", error);
    throw error;
  }
}