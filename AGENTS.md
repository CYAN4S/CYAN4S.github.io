# AGENTS.md

CYAN4S의 개인 웹사이트(https://cyan4s.com). 블로그, 포트폴리오, 링크, 이력서 페이지로 구성된 정적 사이트.

## 개요

- **스택:** Astro 7, MDX, Tailwind CSS 4 (+ typography), GSAP, three.js
- **콘텐츠:** `src/content/blog`, `src/content/portfolio` (스키마는 `src/content.config.ts`)
- **스타일:** Tailwind 테마와 전역 스타일은 `src/styles/global.css`에 있다. 스타일은 Tailwind 클래스로 작성한다. SCSS는 2026-09에 모두 걷어냈다.
  - `global.css`는 `Default.astro` 레이아웃에서 불러온다. 이 레이아웃을 쓰지 않는 `resume-print.astro`에는 Tailwind와 전역 스타일이 적용되지 않는다.
  - 일부 컴포넌트와 페이지(`Meta`, `Demo`, `404`, `portfolio/[...id]`)에는 아직 일반 CSS `<style>` 블록이 남아 있다.
- **명령어:** `npm run dev`, `npm run build`, `npm run preview`
- **검증:** 테스트와 lint가 없다. 커밋 전에 `npm run build`가 통과하는지 반드시 확인한다.

## 배포

- **배포는 Cloudflare Pages의 Git 연동으로 이루어진다.** GitHub Actions를 쓰지 않는다. Cloudflare가 push를 감지해 직접 빌드한다.
  - `main`에 push하면 실제 사이트(`cyan4s.com`)에 배포된다.
  - 그 외 브랜치에 push하면 미리보기가 배포된다 (`<branch>.cyan4s.pages.dev`). 머지하기 전에 여기서 확인한다.
  - 빌드 상태와 미리보기 URL은 커밋의 check run(`Cloudflare Pages`)에서 확인할 수 있다: `gh api repos/CYAN4S/CYAN4S.github.io/commits/<sha>/check-runs`
- Cloudflare 빌드 설정: build system v3, 환경 변수 `NODE_VERSION=24`, build command `npm run build`, output `dist`, production branch `main`. 설정은 대시보드에만 있고 저장소에는 없다.
  - Astro를 올리면서 Node 요구 버전이 바뀌면 대시보드의 `NODE_VERSION`도 함께 확인해야 한다.
- 저장소 이름(`CYAN4S.github.io`)은 GitHub Pages 시절의 흔적이다. GitHub Pages는 지금 쓰지 않는다.
- `.github/workflows`는 비어 있는 것이 정상이다. 예전 GitHub Pages 배포 workflow와 Astro Studio workflow(서비스 종료)는 2026-09에 삭제했다.

## 브랜치와 커밋

- 브랜치 전략: `main`(배포) ← `develop`(계속 유지하는 통합 브랜치) ← 작업 브랜치.
  - 새 작업은 `develop`에서 브랜치를 만든다. `develop`은 지우지 않고 재사용한다.
  - `develop` → `main`은 PR로 머지하고, 머지 방식은 merge commit이다.
  - 머지 후에는 `develop`을 `main`에 맞춘다: `git merge --ff-only main` 후 push
- 커밋 메시지: 영어 한 줄로 간단히 쓴다 (예: `Upgrade Astro to v7`, `Fix RSS feed`).
- **커밋과 PR에 `Co-Authored-By` 같은 AI 에이전트 공동 기여자 표기를 넣지 않는다.**
- 커밋할 때는 파일을 지정해서 커밋한다. 이미 stage된 변경사항이 엉뚱한 커밋에 섞여 들어갈 수 있다.
- push, PR 생성, 머지는 외부에 반영되므로 사용자 확인을 받고 진행한다. `gh` CLI가 설치되어 있고 로그인되어 있다.

## 로컬 환경 (macOS)

- Node는 nvm으로 설치했다. **npm 명령에 `sudo`를 절대 붙이지 않는다.**
  - 예전에 `sudo npm install`을 실행해서 `node_modules`와 `~/.npm`의 소유자가 root로 바뀌는 바람에 권한 에러가 계속 난 적이 있다.
  - 권한 에러가 나면 sudo로 넘기지 말고 파일 소유자부터 확인한다: `find . ~/.npm -user root`
- `temp/`는 git에서 제외한 개인 메모와 초안 폴더다.

## 알려진 사항

- `package.json`에 `overrides`로 Vite 버전을 고정하지 않는다. Astro 6 시절에 넣은 `vite: ^7` override가 Astro 7(Vite 8 필요)의 빌드를 깨뜨린 적이 있다.
- 빌드할 때 나오는 "Some chunks are larger than 500 kB" 경고는 메인 페이지의 three.js 번들 때문이다. 빌드에는 문제가 없다.
- `src/components/Resume.astro`에는 "임시로 배포가 중단되었습니다." 문구만 들어 있어서 이력서 페이지가 사실상 비어 있다.
- `src/components/Footer.astro`와 `src/styles/social.css`는 현재 어디서도 쓰지 않는다. `Footer.astro`는 나중에 쓰려고 남겨 둔 것이라 지우지 않는다. 스타일은 없는 상태다.
