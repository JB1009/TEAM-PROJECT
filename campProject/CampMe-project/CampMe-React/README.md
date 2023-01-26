## CAMP ME 🚎

    캠핑장 커뮤니티 플랫폼

### 개발 환경

- npm ^8.19.3
- react ^18.2.0
- create-react-app ^18.2.0
- react-router-dom ^6.6.1
- react-hook-form ^7.41.5
- "react-toastify": "^9.1.1"
- "sweetalert": "^2.1.2"
- axios ^1.2.2

### 프로젝트 구조

```bash
┌── src
│   ├── common (공용 기능)
│   │   └── settings.js
│   ├── components
│   │    ├── Board (게시판 글목록 (후기, 지역별모임))
│   │    ├── BoardDetail (게시글 세부내용)
│   │    ├── BoardStyle (게시판 css)
│   │    ├── BoardWrite (게시글 작성)
│   │    ├── Find (비밀번호 찾기)
│   │    ├── Footer (페이지 하단 고정)
│   │    ├── Header (페이지 상단 고정)
│   │    ├── images (사진 폴더)
│   │    ├── Join (회원가입)
│   │    ├── Loading (API 연결 전 로딩화면)
│   │    ├── Login (로그인)
│   │    ├── Section (메인페이지 중앙)
│   │    └── SimpleSlide (메인페이지 슬라이드)
│   ├── libs
│   │    └── alert.js (toastify 안내창)
│   ├── App.js (프로젝트 중심페이지 (Router))
│   └── App.css (프로젝트 중심페이지 css)
│
└── public
    └── index.html
```

### Organizer

- 최윤도 (96CHOI)
- 장영주 (JJang young)

### 설치한 VSCode Extensions

- ES7 React/Redux/GraphQL/React-Native snippets
- Simple React Snippets
- React Native Snippet
- Prettier
- ESLint
- Material Icon Theme

### 시작 방법

1. cd ./CAMPME-REACT
2. npm install
3. npm start
