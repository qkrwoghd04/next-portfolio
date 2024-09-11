import { Metadata } from 'next'
import Image from "next/image";
import SomeReusableLayout from "./components/SomeReusableLayout";
import Hero from "./components/home/hero"

export const metadata: Metadata = {
  title: '재홍의 포트폴리오',
  description: '오늘도 화이팅!',
}

export default function Home() {
  return (
    <SomeReusableLayout>
      <section className="flex min-h-screen flex-col items-center justify-center">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <Hero />
        </div>
      </section>
    </SomeReusableLayout>
  );
}
