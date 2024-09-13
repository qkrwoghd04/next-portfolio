# Next.js와 Notion API를 활용한 동적 포트폴리오 웹사이트

## 프로젝트 개요
- **기간**: 2024-09-07 ~ 2024-09-12
- **기술 스택**: Next.js, Tailwind CSS, TypeScript, Vercel(Deployment), SPA, Notion API
- **목적**: React 기반의 Next.js 프레임워크를 사용하여 현대적이고 반응형인 개인 포트폴리오 웹사이트 구축 및 Vercel을 통한 배포 자동화

## 환경 구축

1. Notion에서 갤러리 형식으로 포트폴리오 데이터베이스 구축
2. VSCode에서 Next.js 프로젝트 생성:
   ```bash
   npx create-next-app@latest
   ```
3. [Notion API](https://developers.notion.com/) 개발자 페이지에서 새로운 통합 생성 및 Next.js와 연동

> **주요 특징**:
> - `app/` 라우터 사용으로 기능 확장성 확보
> - TypeScript 사용으로 유지보수성 및 확장성 강화

## 주요 기능

### 1. 다크 모드
사용자 경험 향상 및 배터리 절약을 위한 다크 모드 구현

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

### 2. 스티키 헤더
스크롤 시 헤더가 화면 상단에 고정되어 사용자 경험 향상

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
섹션 간 부드러운 전환으로 사용자 경험 개선

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

## 시작하기

프로젝트를 로컬에서 실행하려면:

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

`app/page.tsx`를 수정하여 페이지 편집을 시작할 수 있습니다. 파일을 수정하면 페이지가 자동으로 업데이트됩니다.

## 참고 자료
- [포트폴리오 예시](https://kim-ji-min.github.io/My-Portfolio/)
- [개발하는 정대리 YouTube 강의](https://www.youtube.com/watch?v=KvoFvmu5eRo&t=671s)
