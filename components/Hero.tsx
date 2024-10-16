import React, { useEffect , useState} from 'react'
import Image from 'next/image'
import Typed from 'typed.js';
import BackgroundImg from '../public/assets/images/background.jpg' 


const type_string = [
  '안녕하세요 주니어 개발자 박재홍입니다',
  '저에게 잠깐만 시간을 내어주실 수 있나요?',
  '1분동안 저의 이야기를 들려드리겠습니다'
]
const Hero = () => {
  const el = React.useRef(null);
  const [showArrow, setShowArrow] = useState(false); 

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: type_string,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 50,
      onComplete: () => {
        setShowArrow(true);
      }
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <section className='relative top-0 w-full h-[100vh] flex flex-col justify-center items-center text-xl xl:text-3xl'>
        <div className="w-max">
          <h1 className="mb-6 typing text-2xl text-white font-bold 2xl:text-3xl">
            <span ref={el} />
          </h1>
          <Image
          src={BackgroundImg}
          placeholder="blur"
          quality={100}
          fill
          sizes='100vw'
          style={{
            objectFit: 'cover',
            opacity: 0.2,
          }}
          alt="Picture of the author"
        />
        </div>
        {showArrow && (
        <div className="flex items-center justify-center absolute bottom-[10%] left-1/2 transform -translate-x-1/2 text-white/5 animate-blink">
          <p className="uppercase">Scroll down</p>
        </div>)}
      </section>
  )
}

export default Hero