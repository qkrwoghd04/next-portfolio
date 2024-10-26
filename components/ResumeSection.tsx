import { useRef, ReactNode } from "react"; // ReactNode 추가
import { useInView } from "framer-motion";

interface ResumeSectionProps { // prop의 타입 정의
  children: ReactNode;
}

function ResumeSection({ children}: ResumeSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50% 0px", });

  return (
    <section ref={ref} 
    className={`w-full h-[100vh] flex justify-start overflow-hidden`}
    >
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="w-full h-full translate-x-[-100px] opacity-0 text-3xl justify-center items-center"
      >
        {children}
      </span>
    </section>
  );
}

export default ResumeSection