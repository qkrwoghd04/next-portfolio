import { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    // 화살표 회전 애니메이션
    animate(".arrow", { rotate: isOpen ? 180 : 0 }, { duration: 0.2 });

    // 드롭다운 메뉴 클립 패스 애니메이션
    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    // 버튼 아이템 애니메이션
    animate(
      "ul button",  // li 대신 ul 내부의 button을 선택
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen, animate]); // animate 의존성 추가

  return scope;
}

export default useMenuAnimation;