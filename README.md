# 하우투AI - AI 활용 팁 블로그

실생활에 바로 적용할 수 있는 AI 팁과 활용법을 공유하는 블로그입니다.

## 주요 기능

- ✨ **SEO 최적화**: 구글 검색 엔진 최적화를 위한 메타태그, sitemap, robots.txt 구현
- 📱 **반응형 디자인**: 모바일, 태블릿, 데스크톱 모든 기기에서 완벽한 사용자 경험
- 💰 **Google AdSense 통합**: 광고 수익 창출을 위한 AdSense 컴포넌트 준비
- 🎨 **현대적인 디자인**: AI 컨셉에 어울리는 그라디언트 디자인 (인디고/보라/시안 계열)
- 🚀 **Next.js 14 App Router**: 최신 Next.js 기술 스택 활용
- 📝 **블로그 시스템**: 카테고리별 포스트 관리 및 검색 기능

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Noto Sans KR (한글 최적화)
- **Deployment**: Vercel (권장)

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run build
npm start
```

## 설정 가이드

### Google AdSense 설정

1. [Google AdSense](https://www.google.com/adsense/)에서 계정 생성
2. 퍼블리셔 ID 받기 (ca-pub-XXXXXXXXXX 형태)
3. `app/layout.tsx`에서 `ca-pub-XXXXXXXXXX`를 실제 ID로 교체
4. `components/AdSense.tsx`에서도 동일하게 교체
5. 각 페이지의 AdSlot ID를 실제 광고 단위 ID로 교체

### Google Analytics 설정 (선택사항)

1. [Google Analytics](https://analytics.google.com/)에서 계정 생성
2. 측정 ID 받기 (G-XXXXXXXXXX 형태)
3. `app/layout.tsx`에서 `G-XXXXXXXXXX`를 실제 ID로 교체

### Google Search Console 설정

1. [Google Search Console](https://search.google.com/search-console/)에서 사이트 등록
2. 소유권 확인 코드 받기
3. `app/layout.tsx`의 `metadata.verification.google`에 코드 입력
4. `app/sitemap.ts`와 `app/robots.ts`의 도메인 URL 수정

## 프로젝트 구조

```
howtoai/
├── app/
│   ├── blog/
│   │   ├── [id]/
│   │   │   └── page.tsx      # 개별 블로그 포스트
│   │   └── page.tsx           # 블로그 목록
│   ├── layout.tsx             # 전역 레이아웃 (SEO 메타데이터)
│   ├── page.tsx               # 메인 페이지
│   ├── globals.css            # 전역 스타일
│   ├── sitemap.ts             # 사이트맵 생성
│   └── robots.ts              # robots.txt 생성
├── components/
│   ├── Header.tsx             # 헤더 컴포넌트
│   ├── Footer.tsx             # 푸터 컴포넌트
│   └── AdSense.tsx            # AdSense 광고 컴포넌트
└── public/                    # 정적 파일 (이미지, 파비콘 등)
```

## SEO 최적화

- ✅ 구조화된 메타데이터 (Open Graph, Twitter Cards)
- ✅ 자동 생성 sitemap.xml
- ✅ robots.txt 설정
- ✅ 한국어 최적화 (lang="ko")
- ✅ 시맨틱 HTML 구조
- ✅ 이미지 최적화 (Next.js Image)
- ✅ 페이지 로딩 속도 최적화

## 배포

### Vercel (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

또는 [Vercel Dashboard](https://vercel.com/new)에서 GitHub 저장소 연결

### 환경 변수 설정

배포 시 다음 환경 변수를 설정하세요:

- `NEXT_PUBLIC_ADSENSE_ID`: Google AdSense 퍼블리셔 ID
- `NEXT_PUBLIC_GA_ID`: Google Analytics 측정 ID (선택사항)

## 컨텐츠 추가하기

블로그 포스트를 추가하려면 `app/blog/[id]/page.tsx`의 `getBlogPost` 함수에 새로운 포스트 데이터를 추가하세요.

추후 Headless CMS (예: Contentful, Sanity, Notion) 또는 Markdown 파일 시스템으로 확장할 수 있습니다.

## 라이선스

MIT

## 지원

문의사항이나 제안은 이슈를 통해 남겨주세요.
