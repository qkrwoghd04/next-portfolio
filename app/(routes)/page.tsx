import { Metadata } from "next"
import SomeReusableLayout from "../components/layout/SomeReusableLayout"
import Hero from "../components/home/hero"
import AboutMe from "../components/home/about-me"
import TechStack from "../components/home/techStack"
import Project from "../components/home/project"
import Contact from '../components/home/contact';

export const metadata: Metadata = {
  title: "재홍의 포트폴리오",
  description: "오늘도 화이팅!"
}

export default function Home() {
  const backgroundImage = '/images/background.jpg'
  return (
    <SomeReusableLayout>
      <section 
        className="flex min-h-screen flex-col items-start justify-center bg-cover bg-center bg-no-repeat relative" 
        style={{ backgroundImage: `url(${backgroundImage})`}}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container max-w-4xl px-4 sm:px-6 md:px-8 lg:px-10 ml-4 sm:ml-6 md:ml-8 lg:ml-10 w-full sm:w-5/6 md:w-3/4 lg:w-2/3 flex flex-col items-start py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
          <Hero />
        </div>
      </section>
      <AboutMe />
      <TechStack />
      <Project />
      <Contact />
    </SomeReusableLayout>
  );
}