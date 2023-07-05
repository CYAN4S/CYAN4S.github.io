---
title: Bookstamp
period: 2022년 3월 - 2022년 12월
team: 3인 팀
stack: [Firebase, JS/TS, Next.js, React, TensorFlow]
description: 도서가 중심이 되는 커뮤니티 웹서비스로, 딥러닝 기반의 도서 추천 기능이 특징입니다.
repo: https://github.com/cyan4s/book-community
link: https://book-community.vercel.app
tag: [소셜, 웹]
platform: [웹]
heroImage: /portfolio/bookstamp/bslogo.png
---

🔖 **Next.js** 기반 **도서 커뮤니티** 웹서비스이며, **딥러닝 기반의 연관 도서 추천** 기능이 있습니다.

![앱 내 도서 검색 결과 화면](/portfolio/bookstamp/search.png)

앱 내 도서 검색 결과 화면

## 링크

- **앱 링크** — [https://book-community.vercel.app](https://book-community.vercel.app/)
- **GitHub 저장소** — [https://github.com/CYAN4S/book-community](https://github.com/CYAN4S/book-community)
- **관련 논문** — [https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11082600](https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11082600)
- **관련 회고록(블로그 게시글)** — [https://cyan4s.com/blog/eof-2022-2/](/blog/eof-2022-2/)

## 소개

책을 중심으로 하는 커뮤니티로, 독서 활동을 증진을 목표로 기획되었습니다.

저는 프로젝트 초반엔 팀원 모두와 함께 **프론트엔드 앱 개발**을, 후반에는 주로 **프로젝트 관리**와 **딥러닝 추천 시스템 개발**을 담당하였습니다.

해당 프로젝트는 **2022 kit Engineering Fair에서 동상을 수상하였습니다.**

## 주요 기능

- 회원 가입, 프로필 정보 수정, 회원 탈퇴가 가능합니다.
- 커뮤니티에서 글, 사진, 동영상 등을 업로드할 수 있습니다.
- 도서를 검색하고, 도서에 관한 정보를 볼 수 있습니다.
- 딥러닝 기반 인공지능으로, 특정 도서와 관련된 도서를 추천해줍니다.
- 특정 도서가 어느 도서관에 존재하는지 탐색할 수 있습니다.

## 디자인

![Figma를 통한 UI 프로토타입 설계 화면](/portfolio/bookstamp/concept.png)

Figma를 통한 UI 프로토타입 설계 화면

**Figma**

초기 UI 프로토타입을 설계하여, 개발 방향성을 맞추었습니다.

탐원과의 의사소통이 원활하지 이루어지지 않아 기획이 지연되고 있을 때, 의도한 UI를 빠르게 제작하여 팀원들을 효과적으로 설득하였습니다.

**Affinity Designer**

로고를 디자인하였습니다.

## 프로젝트 매니지먼트

![기술 스택 구조 다이어그램 (Flutter 앱 개발은 무산되었습니다.)](/portfolio/bookstamp/api.png)

기술 스택 구조 다이어그램 (Flutter 앱 개발은 무산되었습니다.)

**개발 스택 구성**

서비스의 기획 의도에 맞게 개발 스택을 선정하였습니다.

**협업 가이드 제작**

브랜치 네이밍과 작업 구성 환경 등을 정리한 가이드를 제작하여, 마찰을 최소화하였습니다.

**CI/CD 환경 구성**

팀원이 commit하면, 그에 맞게 자동적으로 빌드 및 배포가 수행되게 설정하였습니다.

## 웹 프론트엔드

**React, JavaScript**

프론트엔드 앱 개발 및 UI 구성에 사용되었습니다.

**Next.js**

앱 내에 필요한 라우팅, SSR(Server-side Rendering) 기능을 사용하였습니다.

**Recoil**

React 상태 관리 라이브러리인 Recoil을 도입하였습니다.

앱 내 Auth 처리에 문제가 생겼을 때, Recoil을 이용해 Auth 정보와 같은 전역 데이터를 관리하여 문제를 해결하였습니다.

## 웹 백엔드

**Firebase**

다음과 같은 백엔드 기능을 활용하였습니다.

- 사용자 인증
- 문서형 데이터베이스와의 CRUD를 통한 사용자의 게시글 및 정보 관리
- 파일 스토리지 기능을 사용한 사용자 업로드 파일 관리

**Next.js, Vercel**

개발한 Next.js 앱을 Vercel에 배포하였습니다.

도서와 관련된 외부 API로부터 받은 데이터를 표시할 때, 서버 측에서 렌더링을 수행하는 SSR을 도입하여 클라이언트(사용자) 측의 성능 부담을 줄였습니다.

## 딥러닝

특정 도서에 대한 연관 도서를 추천하는 인공지능을 제작하였습니다.

![ML 모델 구조 다이어그램](/portfolio/bookstamp/arc.png)

ML 모델 구조 다이어그램

**데이터 수집**

도서 관련 API 및 웹 크롤링을 통해 학습 데이터를 수집하였습니다.

**TensorFlow, Python**

추천자 모델을 설계하고, 학습 데이터를 통해 모델을 학습시켰습니다.

**Google Cloud**

학습된 모델을 클라우드에 배포하여, 서비스에서 호출하여 사용할 수 있게 제작하였습니다.
