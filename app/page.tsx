import { Button } from "@/components/ui/button"

// components
import Social from "@/components/Social.jsx"
import Photo from "@/components/Photo.jsx"
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-2xl">Cloud/DevOps LEARNER</span>
            <h1 className="h1 mb-6">
              JAEHONG PARK
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 text-xl">이곳은 저의 <b className="text-white">인생</b>을 쌓아가는 공간입니다. <br />저는 중국에서 영국계 대학을 졸업하고, <br />DevOps 엔지니어로서의 꿈을 키우고 있습니다<br /><br />현재 다양한 IT포럼 및 온라인/오프라인 강연에 참석하며 배움을 쌓고 있습니다. <b className="text-white">성실하고 뚝심 있는 인재를 찾으신다면,</b> 연락주시면 감사하겠습니다
            </p>
            {/*  btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2">
                <a href="https://d3c3zgrht7r4md.cloudfront.net/">View CV</a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-12 h-12 border border-accent
                rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};
export default Home