"use client";

import Animation from "./animation"
import Link from 'next/link'

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-5xl text-4xl mb-6 font-bold">
          안녕하세요, 박재홍입니다!<br className="hidden lg:inline-block" />
          오늘도 화이팅
        </h1>
        <p className="mb-8 leading-relaxed text-lg">
          작품은 갓난쟁이 영화가 맡지 여러 되게 단단히 대하기 이야기는 만들다. 우리로 옷장은 아버지를 설계를 교수치고 경제로 만나며 혜택은 있다. 수 것 우리나라를 없다 포의는 것 않아 죄를 공격은 귀국은 강조하다. 수 없기에 가끔 안 들다. 없을 7시 준비한 싶은 내정자에서 있다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects" className="btn-project">
            프로젝트 보기
          </Link>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div></>
  );
}