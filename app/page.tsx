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
            <span className="text-xl">Cloud/DevOps LEARNER</span>
            <h1 className="h1 mb-6">WHO IS<br /> <span className="text-accent">JAEHONG PARK</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-whit/80">지속적인 새로운 기술과 다양한 분야의 대한 배움을 빠르게 습득하며, 하나의 프로젝트에서 다양한 기술/프레임워크와 CICD 파이프라인 구축을 통해 최적의 방법을 모색합니다. <br /><br />다양한 IT포럼 및 온라인/오프라인 강연에 참석하며 배움을 쌓고 있습니다. 성실하고 뚝심 있는 인재를 찾으신다면, 연락주시면 감사하겠습니다
            </p>
            {/*  btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2">
                <a href="https://d3c3zgrht7r4md.cloudfront.net/">Download CV</a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent
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