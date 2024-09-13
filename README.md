
# **프로젝트** : Next.js와 Notion API를 활용한 동적 포트폴리오 웹사이트
## **프로젝트 기간** : 2024-09-07 ~ 2024-09-12
### **기술 스택** : Next.js Tailwind CSS, Typescript, Vercel(Deployment), SPA, Notion API
### **프로젝트 목적** :
개인 포트폴리오 개설을 위한 React 기반의 Next.js 프레임워크를 사용하여 구축한 현대적이고 반응형인 포트폴리오 웹사이트 구축 및 Vercel을 통한 배포 자동화

<br>

---
<br>

# **환경 구축**

> ## 유튜브 포트폴리오 구축 강의 시청 Youtube [개발하는 정대리](https://www.youtube.com/watch?v=KvoFvmu5eRo&t=643s)
- Notion 에서 갤러리 형식으로 포트폴리오 데이터베이스를 빌드
- VScode 환경에서 새로운 next js 프로젝트 생성
  ```bash
  npx nreate-next-app@latest

  두가지 라우팅 기술이 있는데, SSR 과 CSR
  SSR은 클라이언트가 요청을 할때마다 페이지 전체를 새로 로딩하는 것
  CSR은 처음 페이지가 로딩될때 모든 정보를 가지고 다운로드 받고,
  페이지 이동시 다운로드 받은 정보를 가지고 화면을 전환하는 것
  ```
- [notion API](https://developers.notion.com/) 개발자 페이지에서 새로운 통합을 생성하고 notion 과 next.js 연동
- **Youtube 강의에서는 page/ 라우터를 사용했지만**, <br>본인이 만들고자 하는 포트폴리오 페이지는 취업을 위한 단기적인 목적보다는 장기적으로 **기능의 확장 가능성이 있어 app/ 라우터로 빌드했습니다**<br>
- **또한 Youtube 에서는 동적 js 스크립트를 통해 유연성을 가졌지만,** 본인은 언급했던 것처럼 장기적으로 **유지보수와 기능의 확장성을 생각해서 정적인 typescript**를 사용했습니다
<br><br>

---
<br>

# **프로젝트 기능**
> ## 다크 모드
### Header에 다크 모드 토글 생성을 통해서 Light 모드와 Dark를 구현
- **사용자 경험 향상** : 사용자가 자신의 주변 환경에 따라 인터페이스를 조정 가능하게 합니다
- **배터리 절약** : 화면에 어두운 색의 비중이 많아지면 OLED 환경에서는 배터리 소모를 절약 가능하게 합니다<br>
```bash
#header.tsx
import DarkModeToggleButton from "../ui/dark-mode-toggle-button";
...
return (
 <header>
  ...
  <div>
    ...
    <DarkModeToggleButton />
  </div>
 </header>
);
```
![image](https://github.com/user-attachments/assets/c682d89b-364b-43ce-b6c1-70f0d9aa2208)

<br>

> ## 스티키 헤더 (Sticky Header)
### 스크롤 시 헤더가 화면 상단에 고정되어 따라오도록 구현
- **사용자 경험 향상** : SPA 에서의 페이지가 세로로 길다는 단점을 보완하고, 사용자가 페이지 어느 위치에 존재하든 메뉴에 접근 가능하게 합니다
- **디자인 강화** : 동적인 요소를 통해 웹의 세련된 느낌을 줄 수 있습니다
```bash
#header.tsx
import { useState, useEffect } from "react";
...
export default function Header() {
 const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  ...
  return (
    <header className={`
      ${isSticky ? 'fixed top-0 left-0 right-0 shadow-md bg-white dark:bg-gray-800' : 'absolute top-0 left-0 right-0 bg-transparent'}
      transition-all duration-300 ease-in-out z-50
    `}>
    ...
    </header>
  );
}
```
![sticky-header](https://github.com/user-attachments/assets/baf51356-8bf0-43aa-a676-212c833a4b2c)

---

> ## 스무스 스크롤 내비게이션
### 헤더의 네비게이션 링크 클릭 시 해당 섹션으로 부드럽게 스크롤되도록 구현
- **시각적 강화** : 새로운 페이지를 호출 하는 것보다 부드러운 전환으로 시각적인 요소를 강화합니다
- **사용자 경험 향상** : 페이지의 부드러운 전환은 사용자에게 직관적인 탐색 경험을 제공 가능합니다<br>
```bash
#header.tsx
...
export default function Header() {
  ...
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header>
      ...
      <nav>
        <a href="#aboutMe" onClick={scrollToSection('aboutMe')} className="mr-5 text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">ABOUT ME</a>
        <a href="#techStack" onClick={scrollToSection('techStack')} className="mr-5 text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">TECH STACK</a>
        <a href="#projects" onClick={scrollToSection('projects')} className="mr-5 text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">MY PROJECTS</a>
        <a href="#contacts" onClick={scrollToSection('contacts')} className="mr-5 text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">CONTACTS</a>
      </nav>
      ...
    </header>
  
  )
}

```


https://github.com/user-attachments/assets/ad791abd-d34b-4248-bf1f-475570729501

---
## **참고 자료**
https://kim-ji-min.github.io/My-Portfolio/ <br>
https://www.youtube.com/watch?v=KvoFvmu5eRo&t=671s

---

## 시작하기

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
---
## License
This project is released by Apeche License version 2.0
