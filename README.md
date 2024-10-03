# Next.js와 Notion API를 활용한 동적 포트폴리오 웹사이트

## 📅 프로젝트 기간
2024-09-07 ~ 2024-09-12

## 🛠 기술 스택
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)

## 🎯 프로젝트 목적
React 기반의 Next.js 프레임워크를 사용하여 현대적이고 반응형인 개인 포트폴리오 웹사이트를 구축하고, Vercel을 통해 배포 자동화를 실현합니다.

---

## 🚀 환경 구축
![portfolio](https://github.com/user-attachments/assets/ab4bb084-7adb-42d7-a902-4dd1a5b12703)


### 1. 유튜브 포트폴리오 구축 강의 참고
- [개발하는 정대리 YouTube 강의](https://www.youtube.com/watch?v=KvoFvmu5eRo&t=643s)

### 2. 프로젝트 설정
- Notion에서 갤러리 형식으로 포트폴리오 데이터베이스 구축
- VSCode에서 새로운 Next.js 프로젝트 생성:
  ```bash
  npx create-next-app@latest
  ```
- [Notion API](https://developers.notion.com/) 개발자 페이지에서 새로운 통합 생성 및 Next.js와 연동

### 3. 주요 설정 변경사항
- **라우터**: `page/` 대신 `app/` 라우터 사용 (기능 확장성 고려)
- **언어**: JavaScript 대신 TypeScript 사용 (유지보수 및 확장성 강화)

---

## 💡 프로젝트 기능

### 1. 다크 모드
- 사용자 경험 향상 및 배터리 절약을 위한 다크 모드 구현
- Header에 다크 모드 토글 버튼 추가

```typescript
// header.tsx
import DarkModeToggleButton from "../ui/dark-mode-toggle-button";

export default function Header() {
  return (
    <header>
      {/* ... */}
      <div>
        <DarkModeToggleButton />
      </div>
    </header>
  );
}
```

![다크 모드 토글](https://github.com/user-attachments/assets/c682d89b-364b-43ce-b6c1-70f0d9aa2208)

### 2. 스티키 헤더 (Sticky Header)
- 스크롤 시 헤더가 화면 상단에 고정되어 따라오도록 구현
- 사용자 경험 향상 및 디자인 강화

```typescript
// header.tsx
import { useState, useEffect } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`
      ${isSticky ? 'fixed top-0 left-0 right-0 shadow-md bg-white dark:bg-gray-800' : 'absolute top-0 left-0 right-0 bg-transparent'}
      transition-all duration-300 ease-in-out z-50
    `}>
      {/* ... */}
    </header>
  );
}
```

![스티키 헤더](https://github.com/user-attachments/assets/baf51356-8bf0-43aa-a676-212c833a4b2c)

### 3. 스무스 스크롤 내비게이션
- 헤더의 네비게이션 링크 클릭 시 해당 섹션으로 부드럽게 스크롤
- 시각적 강화 및 직관적인 탐색 경험 제공

```typescript
// header.tsx
export default function Header() {
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header>
      <nav>
        <a href="#aboutMe" onClick={scrollToSection('aboutMe')}>ABOUT ME</a>
        <a href="#techStack" onClick={scrollToSection('techStack')}>TECH STACK</a>
        <a href="#projects" onClick={scrollToSection('projects')}>MY PROJECTS</a>
        <a href="#contacts" onClick={scrollToSection('contacts')}>CONTACTS</a>
      </nav>
    </header>
  );
}
```

[스무스 스크롤 데모 영상](https://github.com/user-attachments/assets/ad791abd-d34b-4248-bf1f-475570729501)

---

## 📚 참고 자료
- [포트폴리오 예시](https://kim-ji-min.github.io/My-Portfolio/)
- [개발하는 정대리 YouTube 강의](https://www.youtube.com/watch?v=KvoFvmu5eRo&t=671s)

---

## 🏁 시작하기

개발 서버 실행:

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

`app/page.tsx` 파일을 수정하여 페이지 편집을 시작할 수 있습니다. 파일을 수정하면 페이지가 자동으로 업데이트됩니다.

