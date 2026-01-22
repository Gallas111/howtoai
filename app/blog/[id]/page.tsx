import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSense from '@/components/AdSense';

// 실제로는 데이터베이스나 CMS에서 가져올 데이터
const getBlogPost = (id: string) => {
  const posts: { [key: string]: any } = {
    '1': {
      id: 1,
      title: 'ChatGPT를 활용한 업무 자동화 완벽 가이드',
      thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop',
      content: `
# ChatGPT를 활용한 업무 자동화 완벽 가이드

ChatGPT는 단순한 챗봇이 아닙니다. 올바르게 활용하면 업무 생산성을 획기적으로 높일 수 있는 강력한 도구입니다.

## 1. 이메일 자동 작성

ChatGPT를 활용하면 이메일 작성 시간을 크게 줄일 수 있습니다. 다음과 같이 프롬프트를 작성해보세요:

**프롬프트 예시:**
"고객에게 제품 배송 지연을 알리는 정중한 이메일을 작성해줘. 사과와 함께 예상 배송일을 알려주고, 보상으로 10% 할인 쿠폰을 제공한다는 내용을 포함해."

## 2. 보고서 초안 작성

정기 보고서나 회의록 작성도 ChatGPT와 함께라면 훨씬 빠릅니다.

**활용 방법:**
- 핵심 데이터와 요점만 ChatGPT에 입력
- 구조화된 보고서 형식 요청
- 생성된 초안을 검토하고 수정

## 3. 데이터 분석 및 요약

대량의 텍스트 데이터를 빠르게 분석하고 요약할 수 있습니다.

**사용 예시:**
"다음 고객 피드백들을 분석해서 주요 불만사항 TOP 5를 뽑아줘."

## 4. 창의적인 아이디어 브레인스토밍

새로운 프로젝트나 캠페인 아이디어가 필요할 때 ChatGPT를 활용하세요.

## 5. 코드 작성 및 디버깅

프로그래밍 작업도 ChatGPT가 도와줄 수 있습니다. 간단한 스크립트 작성부터 버그 수정까지!

## 결론

ChatGPT를 효과적으로 활용하면 반복적인 업무에서 벗어나 더 중요한 일에 집중할 수 있습니다. 오늘 소개한 방법들을 실무에 적용해보세요!
      `,
      date: '2024-01-15',
      category: 'ChatGPT',
      readTime: '5분',
      author: '하우투AI',
    },
    '2': {
      id: 2,
      title: '2024년 꼭 알아야 할 무료 AI 도구 TOP 10',
      thumbnail: 'https://images.unsplash.com/photo-1676277791608-ac54525aa94f?w=1200&h=600&fit=crop',
      content: `
# 2024년 꼭 알아야 할 무료 AI 도구 TOP 10

인공지능(AI) 기술이 급속도로 발전하면서, 이제는 누구나 무료로 강력한 AI 도구를 활용할 수 있는 시대가 되었습니다. 전문가가 아니어도 괜찮습니다. 이 글에서 소개하는 10가지 무료 AI 도구만 알아도 업무 생산성을 2배 이상 높일 수 있습니다.

2024년 현재, AI는 이미지 생성부터 텍스트 작성, 동영상 편집, 음성 합성까지 거의 모든 분야에서 활용되고 있습니다. 이 가이드에서는 실제로 사용해보고 검증된 최고의 무료 AI 도구들을 카테고리별로 정리했습니다.

![AI 도구 활용 이미지](https://images.unsplash.com/photo-1676277791608-ac54525aa94f?w=800&h=400&fit=crop)

## 왜 지금 AI 도구를 배워야 할까요?

AI 도구를 활용하면 다음과 같은 이점을 얻을 수 있습니다:

- **시간 절약**: 반복적인 작업을 자동화하여 업무 시간 50% 이상 단축
- **비용 절감**: 유료 디자이너나 작가를 고용하지 않아도 고품질 콘텐츠 제작 가능
- **창의성 향상**: AI의 도움으로 더 창의적인 아이디어 발견
- **경쟁력 강화**: AI 활용 능력은 이제 필수 역량

그럼 지금부터 카테고리별로 최고의 무료 AI 도구들을 살펴보겠습니다.

---

## 1. ChatGPT - 최강의 AI 챗봇

![ChatGPT 인터페이스](https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop)

### 핵심 기능

ChatGPT는 OpenAI가 개발한 대화형 AI로, 2024년 기준 가장 강력하고 활용도가 높은 AI 도구입니다. 무료 버전만으로도 다음과 같은 작업이 가능합니다:

- **글쓰기 지원**: 이메일, 보고서, 블로그 글 작성
- **코딩 도움**: 프로그래밍 코드 작성 및 디버깅
- **번역**: 100개 이상 언어 실시간 번역
- **학습 지원**: 복잡한 개념을 쉽게 설명
- **아이디어 브레인스토밍**: 창의적인 아이디어 생성

### 무료 vs 유료 비교

| 기능 | 무료 버전 | Plus 버전 ($20/월) |
|------|----------|-------------------|
| 모델 | GPT-3.5 | GPT-4 + GPT-4o |
| 응답 속도 | 보통 | 빠름 |
| 이미지 생성 | ❌ | ✅ (DALL-E 3) |
| 인터넷 검색 | ❌ | ✅ |
| 플러그인 | ❌ | ✅ |

### 실전 활용 팁

1. **구체적으로 질문하기**: "마케팅 이메일 써줘"보다 "신제품 출시를 알리는 1000자 분량의 전문적인 마케팅 이메일을 작성해줘. 타겟은 30-40대 직장인이고, 할인 혜택을 강조해야 해"가 훨씬 좋은 결과를 만듭니다.

2. **역할 부여**: "당신은 10년 경력의 마케팅 전문가입니다"와 같이 역할을 지정하면 더 전문적인 답변을 받을 수 있습니다.

3. **단계별 요청**: 복잡한 작업은 한 번에 요청하지 말고 단계별로 나누어 진행하세요.

**웹사이트**: [chat.openai.com](https://chat.openai.com)

---

## 2. Google Gemini - 구글의 차세대 AI

### 핵심 기능

구글이 자랑하는 Gemini는 ChatGPT의 강력한 경쟁자입니다. 특히 구글 생태계와의 연동이 뛰어납니다:

- **Gmail 연동**: 이메일 자동 작성 및 정리
- **Google Docs 통합**: 문서 작업 지원
- **실시간 웹 검색**: 최신 정보 제공
- **다국어 지원**: 40개 이상 언어 지원
- **긴 컨텍스트**: 최대 100만 토큰 처리 (매우 긴 문서 분석 가능)

### 장점

- 무료 버전도 강력한 성능
- 구글 서비스와 완벽한 연동
- 최신 정보 검색 가능 (무료 버전에서도!)
- 한국어 성능 우수

### 추천 사용 사례

- **학술 연구**: 논문 요약 및 분석
- **시장 조사**: 최신 트렌드 파악
- **여행 계획**: 실시간 정보 기반 여행 일정 작성

**웹사이트**: [gemini.google.com](https://gemini.google.com)

---

## 3. Midjourney - AI 이미지 생성의 정점

![AI 생성 이미지 예시](https://images.unsplash.com/photo-1686191128657-a7c14b0e1f05?w=800&h=400&fit=crop)

### 핵심 기능

Midjourney는 텍스트 설명만으로 놀라운 품질의 이미지를 생성하는 AI 도구입니다. 예술적이고 창의적인 이미지 제작에 최적화되어 있습니다.

### 무료 사용 방법

Midjourney는 완전 무료는 아니지만, Discord 서버에 가입하면 제한적으로 무료 체험이 가능합니다 (약 25장).

### 사용 방법

1. Discord 계정 생성
2. Midjourney 공식 서버 참여
3. `/imagine` 커맨드 입력 후 원하는 이미지 설명
4. 약 60초 후 4개의 이미지 생성

### 프롬프트 작성 팁

**기본 구조**: [주제] + [스타일] + [분위기] + [기술적 요소]

**예시**:
\`\`\`
a peaceful mountain landscape at sunset,
watercolor painting style,
warm and serene atmosphere,
8K, highly detailed
\`\`\`

### 활용 분야

- 블로그 썸네일 제작
- 소셜미디어 콘텐츠
- 프레젠테이션 자료
- 책 표지 디자인
- NFT 아트워크

**웹사이트**: [midjourney.com](https://midjourney.com)

---

## 4. Canva AI - 디자인을 쉽게

### 핵심 기능

Canva는 원래 온라인 디자인 플랫폼이었지만, 이제 강력한 AI 기능을 탑재했습니다:

- **Magic Write**: AI 텍스트 생성
- **Magic Edit**: 이미지 일부만 AI로 수정
- **Background Remover**: 배경 자동 제거
- **Text to Image**: 텍스트로 이미지 생성
- **Magic Design**: 자동 레이아웃 생성

### 무료 버전의 제한

무료 버전에서도 대부분의 AI 기능을 제한적으로 사용할 수 있습니다 (월 50회 제한).

### 추천 활용법

1. **소셜미디어 포스트**: 인스타그램, 페이스북용 디자인
2. **프레젠테이션**: 전문적인 PPT 제작
3. **포스터**: 이벤트 홍보물 제작
4. **인포그래픽**: 데이터 시각화

### 초보자를 위한 팁

- 템플릿부터 시작: Canva의 수천 개 템플릿 활용
- AI 추천 수용: "Magic Recommendations" 기능 활용
- 브랜드 키트: 회사나 개인 브랜드 색상/폰트 저장

**웹사이트**: [canva.com](https://canva.com)

---

## 5. Runway ML - AI 동영상 편집

![비디오 편집](https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=400&fit=crop)

### 핵심 기능

Runway는 동영상 제작과 편집을 혁신적으로 바꾼 AI 도구입니다:

- **Text to Video**: 텍스트 설명으로 동영상 생성
- **Remove Background**: 동영상 배경 제거
- **Slow Motion**: AI로 부드러운 슬로우모션 생성
- **Inpainting**: 동영상에서 원치 않는 객체 제거
- **Color Correction**: 자동 색보정

### 무료 크레딧

가입 시 125 크레딧 제공 (약 5분 분량의 AI 처리)

### 활용 사례

- **유튜브 크리에이터**: 영상 편집 시간 단축
- **마케터**: 제품 홍보 영상 제작
- **소셜미디어**: 짧은 비디오 콘텐츠 제작
- **교육자**: 강의 영상 제작

### 학습 곡선

Runway는 다소 복잡할 수 있지만, 공식 튜토리얼을 따라하면 1-2시간이면 기본 사용법을 익힐 수 있습니다.

**웹사이트**: [runwayml.com](https://runwayml.com)

---

## 6. ElevenLabs - 초실감 AI 음성 합성

### 핵심 기능

ElevenLabs는 사람과 구별이 거의 불가능한 자연스러운 AI 음성을 생성합니다:

- **Text to Speech**: 텍스트를 음성으로 변환
- **Voice Cloning**: 자신의 목소리 복제 (Pro 버전)
- **다국어 지원**: 30개 이상 언어
- **감정 조절**: 목소리의 톤과 감정 조절
- **고품질 오디오**: 팟캐스트 수준의 음질

### 무료 버전 제공

- 월 10,000자 무료 (약 7-10분 분량 오디오)
- 29개의 사전 제작된 목소리 사용 가능
- 상업적 이용 가능

### 실제 활용 분야

1. **유튜브 보이스오버**: 내레이션 제작
2. **팟캐스트**: 인트로/아웃트로 음성
3. **오디오북**: 책 낭독
4. **e-러닝**: 온라인 강의 음성
5. **게임**: 캐릭터 음성

### 한국어 지원

2024년 기준, 한국어 음성도 자연스럽게 지원됩니다. 다만 영어만큼 다양한 목소리 옵션은 없습니다.

**웹사이트**: [elevenlabs.io](https://elevenlabs.io)

---

## 7. Notion AI - 스마트 노트 필기

![노트 정리](https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop)

### 핵심 기능

Notion은 이미 강력한 생산성 도구였지만, AI 기능이 추가되면서 더욱 막강해졌습니다:

- **AI 글쓰기 지원**: 문서 작성 도움
- **자동 요약**: 긴 문서를 짧게 요약
- **번역**: 실시간 다국어 번역
- **아이디어 확장**: 브레인스토밍 지원
- **문법 검사**: 자동 교정

### 무료 체험

Notion AI는 가입 후 20회 무료 사용 가능합니다. 이후 월 $10.

### Notion AI 활용 시나리오

**회의록 작성**:
1. 회의 내용을 대략적으로 입력
2. "요약해줘" 명령
3. "액션 아이템 추출" 명령
4. "이메일 형식으로 변환" 명령

**블로그 글 작성**:
1. 주제만 입력
2. "아웃라인 생성"
3. 각 섹션 확장
4. 최종 검토 및 수정

### 추천 대상

- 프로젝트 매니저
- 콘텐츠 크리에이터
- 학생
- 프리랜서

**웹사이트**: [notion.so](https://notion.so)

---

## 8. Perplexity AI - AI 검색 엔진

### 핵심 기능

Perplexity는 구글과 ChatGPT를 결합한 것 같은 AI 검색 엔진입니다:

- **출처 제공**: 모든 답변에 출처 링크 포함
- **실시간 검색**: 최신 정보 제공
- **대화형 검색**: 후속 질문 가능
- **요약 기능**: 여러 웹사이트 내용을 하나로 요약
- **무료 무제한**: 기본 기능 완전 무료

### 구글 검색과의 차이점

| 특징 | 구글 | Perplexity |
|------|------|------------|
| 결과 형식 | 링크 목록 | AI 요약 답변 |
| 출처 | 순위 기반 | 관련성 기반 |
| 후속 질문 | 새로 검색 | 대화 이어감 |
| 광고 | 있음 | 없음 (무료) |

### 최적 사용 사례

- **학술 연구**: 논문 찾기 및 요약
- **뉴스 파악**: 최신 사건 정보 수집
- **비교 분석**: 여러 제품/서비스 비교
- **팩트 체크**: 정보의 정확성 확인

### Pro 팁

질문할 때 다음과 같이 구체적으로 하면 더 좋은 답변을 얻습니다:

**일반적**: "파이썬 배우는 방법"
**구체적**: "프로그래밍 경험이 전혀 없는 초보자가 파이썬을 배우기 위한 단계별 학습 로드맵과 추천 자료를 알려줘"

**웹사이트**: [perplexity.ai](https://perplexity.ai)

---

## 9. Gamma App - AI 프레젠테이션 제작

![프레젠테이션](https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=400&fit=crop)

### 핵심 기능

Gamma는 AI로 프레젠테이션, 문서, 웹페이지를 자동으로 만들어주는 도구입니다:

- **자동 슬라이드 생성**: 텍스트만 입력하면 완성된 프레젠테이션
- **스마트 레이아웃**: AI가 최적의 디자인 제안
- **반응형 디자인**: 모든 기기에서 완벽하게 표시
- **협업 기능**: 팀원과 실시간 공동 작업
- **애니메이션**: 부드러운 전환 효과

### 무료 크레딧

가입 시 400 AI 크레딧 제공 (약 40개 슬라이드 생성 가능)

### 사용 방법

1. **주제 입력**: "AI 마케팅 전략"
2. **아웃라인 생성**: AI가 자동으로 목차 제안
3. **콘텐츠 확장**: 각 섹션의 내용 자동 생성
4. **디자인 선택**: 여러 테마 중 선택
5. **최종 수정**: 세부 내용 조정

### PowerPoint와 비교

| 특징 | PowerPoint | Gamma |
|------|------------|-------|
| 제작 시간 | 2-3시간 | 10-15분 |
| 디자인 | 수동 | AI 자동 |
| 웹 공유 | 어려움 | 링크 하나로 |
| 협업 | 제한적 | 실시간 |
| 가격 | 유료 | 무료 시작 |

### 활용 사례

- 비즈니스 피칭
- 학교 과제 발표
- 제품 소개서
- 연간 보고서
- 온라인 포트폴리오

**웹사이트**: [gamma.app](https://gamma.app)

---

## 10. Otter.ai - AI 회의록 작성

### 핵심 기능

Otter.ai는 회의나 강의를 자동으로 녹음하고 텍스트로 변환해주는 AI 도구입니다:

- **실시간 전사**: 말하는 동시에 텍스트 변환
- **화자 인식**: 누가 말했는지 자동 구분
- **요약 생성**: 회의 핵심 내용 요약
- **키워드 추출**: 중요 단어 하이라이트
- **Zoom/Teams 연동**: 온라인 회의 자동 녹음

### 무료 버전 제공

- 월 300분 무료 (하루 약 10분)
- 3개의 음성 파일 가져오기
- 기본 전사 및 요약 기능

### 정확도

영어: 95% 이상
한국어: 80-85% (계속 개선 중)

### 실전 활용

**온라인 회의 시**:
1. Zoom에 Otter.ai 봇 추가
2. 회의 진행 (자동 녹음)
3. 회의 후 요약본 확인
4. 액션 아이템 추출
5. 팀원에게 공유

**인터뷰 시**:
- 인터뷰 내용 자동 기록
- 주요 발언 즉시 검색
- 인용구 쉽게 찾기

### 경쟁 도구 비교

- **장점**: 무료 제공량이 많음, UI가 직관적
- **단점**: 한국어 정확도는 아직 개선 필요

**웹사이트**: [otter.ai](https://otter.ai)

---

## AI 도구 선택 가이드

### 초보자라면?

1. **ChatGPT** (글쓰기, 학습)
2. **Canva AI** (디자인)
3. **Gamma** (프레젠테이션)

이 3가지만으로도 대부분의 업무를 커버할 수 있습니다.

### 콘텐츠 크리에이터라면?

1. **Midjourney** (이미지)
2. **Runway** (동영상)
3. **ElevenLabs** (음성)
4. **ChatGPT** (스크립트)

### 비즈니스 전문가라면?

1. **ChatGPT** (문서 작성)
2. **Notion AI** (프로젝트 관리)
3. **Otter.ai** (회의록)
4. **Gamma** (프레젠테이션)

### 학생이라면?

1. **ChatGPT** (학습 지원)
2. **Perplexity** (연구)
3. **Notion AI** (노트 정리)
4. **Gamma** (발표 자료)

---

## AI 도구 활용 시 주의사항

### 1. 과의존 금지

AI는 도구일 뿐입니다. 최종 검토와 판단은 반드시 사람이 해야 합니다.

### 2. 저작권 확인

AI가 생성한 콘텐츠의 상업적 이용 가능 여부를 반드시 확인하세요.

### 3. 개인정보 보호

민감한 정보는 AI 도구에 입력하지 마세요. 특히 회사 기밀이나 개인정보는 주의가 필요합니다.

### 4. 팩트 체크

AI가 제공하는 정보는 항상 검증하세요. 때로 잘못된 정보("환각")를 제공할 수 있습니다.

### 5. 윤리적 사용

AI를 사기, 허위 정보 유포, 악의적인 목적으로 사용하지 마세요.

---

## 자주 묻는 질문 (FAQ)

### Q1. 정말 완전 무료인가요?

대부분의 도구는 기본 기능을 무료로 제공하지만, 제한이 있습니다 (예: 사용 횟수, 기능 제한). 더 많은 기능이 필요하다면 유료 구독을 고려해야 합니다.

### Q2. AI 도구를 배우는 데 얼마나 걸리나요?

도구마다 다르지만, ChatGPT나 Canva 같은 직관적인 도구는 1시간이면 기본 사용법을 익힐 수 있습니다. 복잡한 도구(Runway, Midjourney)는 1-2주 정도의 학습 시간이 필요합니다.

### Q3. 한국어도 잘 지원되나요?

ChatGPT, Google Gemini, Notion AI는 한국어를 매우 잘 지원합니다. 이미지/영상 도구는 언어와 무관합니다. 다만 Otter.ai 같은 음성 인식 도구는 한국어 정확도가 아직 완벽하지 않습니다.

### Q4. 어떤 도구부터 시작해야 하나요?

**ChatGPT부터 시작하세요.** 가장 범용적이고 활용도가 높습니다. ChatGPT에 익숙해지면 다른 도구들도 쉽게 배울 수 있습니다.

### Q5. AI가 제 일자리를 빼앗지 않을까요?

AI는 반복적인 작업을 자동화하지만, 창의성, 판단력, 인간적 감성이 필요한 일은 대체할 수 없습니다. 오히려 AI를 잘 활용하는 사람이 경쟁력을 갖게 됩니다.

### Q6. 회사에서 사용해도 되나요?

무료 버전은 대부분 상업적 이용이 가능하지만, 회사 기밀 정보를 입력하는 것은 위험할 수 있습니다. 회사 정책을 확인하고, 가능하면 Enterprise 버전을 사용하세요.

### Q7. 모바일에서도 사용할 수 있나요?

ChatGPT, Canva, Notion은 모바일 앱을 제공합니다. 다른 대부분의 도구도 모바일 브라우저에서 접근 가능합니다.

### Q8. 여러 도구를 동시에 사용할 수 있나요?

네! 오히려 권장합니다. 예를 들어:
1. ChatGPT로 블로그 글 작성
2. Midjourney로 썸네일 이미지 생성
3. Canva에서 최종 디자인 편집

### Q9. AI 도구 사용법을 어디서 배울 수 있나요?

- YouTube 튜토리얼 (한국어 콘텐츠 많음)
- 각 도구의 공식 문서
- [하우투AI 블로그](/blog) (더 많은 가이드 제공)
- 온라인 커뮤니티 (Reddit, 디스코드)

### Q10. 업데이트는 얼마나 자주 되나요?

AI 도구는 매우 빠르게 발전합니다. 평균적으로 1-3개월마다 새로운 기능이 추가됩니다. 관심 있는 도구의 공식 블로그나 SNS를 팔로우하는 것을 추천합니다.

---

## 마무리: 지금 바로 시작하세요

2024년은 AI의 해라고 해도 과언이 아닙니다. 지금 소개한 10가지 무료 AI 도구만 제대로 활용해도 업무 생산성을 2배 이상 높일 수 있습니다.

### 오늘 바로 할 수 있는 3가지

1. **ChatGPT 가입하기** (5분): [chat.openai.com](https://chat.openai.com)에서 무료 계정 생성
2. **첫 프롬프트 시도하기** (10분): "내일 회의에서 사용할 프레젠테이션 개요를 작성해줘" 같은 실제 업무 요청
3. **결과 확인 및 수정** (15분): AI가 생성한 내용을 검토하고 필요한 부분 수정

### 학습 로드맵

**1주차**: ChatGPT 집중 학습
- 매일 30분씩 다양한 프롬프트 시도
- 업무에 실제로 적용해보기

**2주차**: 시각 도구 추가 (Canva 또는 Midjourney)
- 간단한 디자인 작업 시도
- 소셜미디어 포스트 제작

**3주차**: 전문 도구 탐색
- 본인의 분야에 맞는 도구 선택
- 심화 기능 학습

**4주차**: 통합 활용
- 여러 도구를 조합하여 프로젝트 완성
- 워크플로우 최적화

### 더 배우고 싶다면?

[하우투AI 블로그](/blog)에서 더 많은 AI 활용 가이드를 확인하세요:

- [ChatGPT를 활용한 업무 자동화 완벽 가이드](/blog/1)
- [AI 프롬프트 엔지니어링 실전 가이드](/blog/3)
- [Midjourney로 전문가처럼 이미지 생성하기](/blog/4)

---

**AI 혁명에 뒤처지지 마세요.** 오늘 소개한 도구 중 하나만 선택해서 지금 바로 시작해보세요.

여러분의 생산성과 창의성이 새로운 차원으로 도약할 것입니다!

*이 글이 도움이 되셨나요? 실제로 사용해보시고 경험을 댓글로 공유해주세요.*
      `,
      date: '2024-01-14',
      category: 'AI 도구',
      readTime: '8분',
      author: '하우투AI',
    },
    '7': {
      id: 7,
      title: 'ChatGPT로 그림 그리는 방법 - DALL-E 완벽 가이드',
      thumbnail: 'https://images.unsplash.com/photo-1686191128892-c0708c22d444?w=1200&h=600&fit=crop',
      content: `
# ChatGPT로 그림 그리는 방법: DALL-E 3 완벽 가이드 (2026년 최신)

2026년 현재, ChatGPT Plus 사용자라면 누구나 강력한 AI 이미지 생성 도구인 DALL-E 3를 무료로 사용할 수 있습니다. 디자인 경험이 전혀 없어도 괜찮습니다. 이 가이드 하나면 오늘부터 바로 전문가 수준의 이미지를 생성할 수 있습니다.

![ChatGPT DALL-E 인터페이스](https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop)

## ChatGPT DALL-E란? 초보자도 이해하는 기본 개념

DALL-E 3는 OpenAI가 개발한 최첨단 AI 이미지 생성 모델입니다. 2023년 10월 ChatGPT에 통합되면서, 누구나 텍스트 설명만으로 고품질 이미지를 만들 수 있게 되었습니다.

### DALL-E 3의 주요 특징

- **높은 이해도**: 복잡한 문장도 정확하게 이해하고 시각화
- **품질 향상**: 이전 버전 대비 2배 이상 높은 해상도
- **안전성**: 유해 콘텐츠 생성 방지 기능 내장
- **무료 사용**: ChatGPT Plus 구독자는 추가 비용 없이 이용

![AI가 생성한 다양한 이미지 예시](https://images.unsplash.com/photo-1686191128892-c0708c22d444?w=800&h=400&fit=crop)

## ChatGPT에서 DALL-E 사용하는 방법 (단계별 가이드)

### 1단계: ChatGPT Plus 구독 확인

DALL-E를 사용하려면 ChatGPT Plus 구독이 필요합니다. 월 $20으로 무제한 이미지 생성이 가능합니다.

**확인 방법:**
1. ChatGPT (chat.openai.com) 접속
2. 좌측 하단에 "GPT-4" 모델 선택 옵션 확인
3. Plus 구독자라면 자동으로 DALL-E 사용 가능

### 2단계: 첫 이미지 생성하기

ChatGPT 채팅창에 다음과 같이 입력해보세요:

**예시 프롬프트:**
> "노을이 지는 바닷가에서 책을 읽고 있는 사람의 뒷모습을 그려줘. 따뜻하고 평화로운 분위기로, 사진처럼 사실적으로 표현해줘."

약 10-30초 후, ChatGPT가 이미지를 생성하여 보여줍니다. 정말 간단하죠?

### 3단계: 이미지 다운로드 및 활용

생성된 이미지는:
- 클릭하면 확대 가능
- 우클릭으로 저장 가능
- 1024x1024 또는 1792x1024 픽셀 해상도

![DALL-E로 생성된 풍경 이미지](https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&h=400&fit=crop)

## 프로처럼 프롬프트 작성하는 7가지 비법

좋은 이미지를 얻는 핵심은 **프롬프트 작성 기술**입니다. 다음 요소들을 조합하면 원하는 이미지를 정확하게 만들 수 있습니다.

### 1. 주제와 피사체를 명확히 하기

**나쁜 예:** "고양이"
**좋은 예:** "카페 창가에 앉아 밖을 바라보는 흰색 페르시안 고양이"

### 2. 예술 스타일 지정하기

다양한 스타일을 시도해보세요:

- **사실적 표현**: "사진처럼 사실적으로", "4K 고해상도 사진"
- **그림 스타일**: "수채화 스타일", "유화 느낌", "파스텔 드로잉"
- **디지털 아트**: "3D 렌더링", "벡터 일러스트", "픽셀 아트"
- **특정 화풍**: "빈센트 반 고흐 스타일", "일본 우키요에 판화 느낌"

### 3. 조명과 분위기 설정

빛의 방향과 강도는 이미지의 느낌을 크게 좌우합니다:

- "부드러운 아침 햇살이 비치는"
- "드라마틱한 석양 역광"
- "네온 불빛이 반사되는"
- "촛불의 따뜻한 조명"

### 4. 색상 팔레트 명시

원하는 색감을 구체적으로 표현하세요:

- "파스텔 핑크와 민트색 조합"
- "비비드한 원색"
- "모노톤 흑백"
- "세피아 톤의 빈티지 느낌"

### 5. 구도와 시점 지정

카메라 앵글을 설명하면 더욱 전문적인 결과를 얻을 수 있습니다:

- "정면에서 바라본 모습"
- "위에서 내려다본 조감도"
- "낮은 앵글에서 올려다본 시점"
- "측면 프로필 샷"

### 6. 세부 요소 추가

디테일이 풍부할수록 좋은 결과가 나옵니다:

- "배경에 흐릿한 보케 효과"
- "눈 내리는 겨울 풍경"
- "테이블 위에 커피잔과 노트북"
- "복고풍 인테리어 소품들"

### 7. 감정과 무드 표현

이미지에서 느껴지길 원하는 감정을 적어보세요:

- "평화롭고 고요한 분위기"
- "역동적이고 에너제틱한 느낌"
- "신비롭고 몽환적인 무드"
- "따뜻하고 아늑한 느낌"

![다양한 스타일의 AI 아트](https://images.unsplash.com/photo-1686191128657-a7c14b0e1f05?w=800&h=400&fit=crop)

## 실전 프롬프트 예시 10가지 (복사해서 바로 사용 가능)

### 예시 1: 블로그 썸네일 이미지
\`\`\`
노트북 앞에 앉아 작업하는 사람의 뒷모습, 창밖으로 보이는 도시 야경, 따뜻한 실내 조명, 책상 위에 커피잔과 노트, 미니멀한 홈오피스 인테리어, 아늑하고 집중된 분위기, 사진처럼 사실적으로
\`\`\`

### 예시 2: 소셜미디어 포스트
\`\`\`
밝고 경쾌한 분위기의 카페 인테리어, 햇살이 가득 들어오는 큰 창문, 화분과 식물들로 가득한 공간, 나무 테이블과 빈티지 의자, 따뜻한 자연광, 인스타그램 감성, 파스텔 톤의 색감
\`\`\`

### 예시 3: 로고 디자인
\`\`\`
미니멀한 스타일의 AI 기술 회사 로고, 추상적인 뇌 형태와 회로 패턴의 결합, 파란색에서 보라색으로 이어지는 그라디언트, 현대적이고 미래지향적인 느낌, 깔끔한 벡터 스타일, 흰 배경
\`\`\`

### 예시 4: 책 표지 일러스트
\`\`\`
환상적인 숲속 풍경, 거대한 고목나무들 사이로 빛나는 신비로운 포탈, 반짝이는 마법의 입자들, 안개 낀 몽환적인 분위기, 보라색과 청록색의 환상적인 색감, 판타지 소설 표지 스타일
\`\`\`

### 예시 5: 제품 목업
\`\`\`
깔끔한 흰색 배경 위의 스마트폰 목업, 화면에 모던한 앱 인터페이스 표시, 부드러운 그림자, 미니멀한 스튜디오 조명, 제품 사진 스타일, 고급스러운 느낌
\`\`\`

### 예시 6: 유튜브 썸네일
\`\`\`
놀란 표정으로 카메라를 보는 사람, 역동적인 구도, 밝고 대비 강한 색감, 배경에 추상적인 기하학 패턴, 에너지 넘치는 분위기, 유튜브 썸네일 스타일, 시선을 끄는 비주얼
\`\`\`

### 예시 7: 일러스트레이션
\`\`\`
숲속 오두막에서 책을 읽는 여우, 동화책 일러스트 스타일, 따뜻한 벽난로 불빛, 창밖의 눈 내리는 겨울 풍경, 아늑하고 포근한 분위기, 부드러운 색감, 어린이 그림책 느낌
\`\`\`

### 예시 8: 추상 아트
\`\`\`
유동적인 형태의 추상적 구성, 홀로그램 같은 무지개빛 색감, 액체가 흐르는 듯한 질감, 메탈릭 광택, 현대 미술관 전시 작품 스타일, 미래적이고 세련된 느낌
\`\`\`

### 예시 9: 인포그래픽 요소
\`\`\`
데이터 시각화를 위한 아이콘 세트, 간결한 라인 스타일, 파란색 계열의 모던한 색상, 비즈니스 프레젠테이션용, 미니멀하고 전문적인 디자인, 벡터 그래픽 스타일
\`\`\`

### 예시 10: 배경 이미지
\`\`\`
광활한 우주 공간, 반짝이는 수많은 별들, 화려한 성운, 은하수가 흐르는 밤하늘, 보라색과 파란색의 우주 색감, 4K 고해상도 천체 사진 스타일, 경이롭고 장엄한 느낌
\`\`\`

![우주 배경 이미지](https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=400&fit=crop)

## 자주하는 실수와 해결 방법

### 실수 1: 너무 짧고 애매한 프롬프트

**❌ 나쁜 예:** "개"

이렇게 짧은 프롬프트는 AI가 해석할 여지가 너무 많아서 예측 불가능한 결과가 나옵니다.

**✅ 개선된 예:** "잔디밭에서 뛰어노는 골든 리트리버 강아지, 화창한 봄날, 뒤에 흐릿한 나무들, 행복한 표정, 사진처럼 사실적으로"

### 실수 2: 한 번에 너무 많은 요소 요구

**❌ 나쁜 예:** "고양이와 개와 새와 물고기가 함께 파티하는 모습, 배경은 우주이고 케이크도 있고 풍선도 많고..."

너무 복잡하면 AI가 모든 요소를 조화롭게 표현하기 어렵습니다.

**✅ 개선:** 핵심 요소 3-4가지에 집중하거나, 여러 이미지로 나누어 생성

### 실수 3: 저작권 있는 캐릭터나 인물 요청

**❌ 피해야 할 것:**
- 실존 인물 이름 (유명인, 정치인 등)
- 저작권 있는 캐릭터 (디즈니, 마블 등)
- 특정 브랜드 로고나 상표

**✅ 대안:** "슈퍼히어로 풍의 캐릭터", "애니메이션 스타일의 모험가" 등 일반적인 설명 사용

### 실수 4: 부정적인 표현 사용

**❌ 비효율적:** "배경에 건물이 없는"

DALL-E는 부정문을 잘 이해하지 못합니다.

**✅ 개선:** "자연 풍경 배경", "숲속 환경" 등 긍정적 표현 사용

## 이미지 수정 및 반복 생성 전략

생성된 이미지가 마음에 들지 않나요? 다음 전략을 사용해보세요.

### 점진적 수정 방법

1. **첫 생성**: 기본 프롬프트로 시작
2. **피드백**: "조금 더 밝게 만들어줘"
3. **세부 조정**: "배경을 산으로 바꿔줘"
4. **미세 튜닝**: "하늘을 더 푸르게 해줘"

ChatGPT는 대화 컨텍스트를 기억하므로, 기존 이미지를 참조하며 수정할 수 있습니다.

### 버전 비교 전략

같은 주제로 여러 스타일을 시도해보세요:

1. "사실적인 사진 스타일로"
2. "수채화 느낌으로 다시"
3. "미니멀 벡터 스타일로 재생성"

각 버전을 비교하여 가장 마음에 드는 것을 선택하세요.

![이미지 수정 과정](https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop)

## 저작권 및 상업적 이용 가이드

### DALL-E 이미지 사용 권한

OpenAI 정책에 따르면:

✅ **허용되는 사용:**
- 개인 블로그, 웹사이트 게시
- 소셜미디어 콘텐츠
- 프레젠테이션 자료
- 상업적 목적의 마케팅 자료
- 책, 잡지 등 출판물
- 제품 디자인 및 패키징

❌ **제한 사항:**
- 폭력적이거나 성적인 콘텐츠
- 허위 정보 유포 목적
- 실존 인물의 딥페이크
- 타인의 명예를 훼손하는 용도

### 크레딧 표기

법적으로 필수는 아니지만, "AI(DALL-E)로 생성" 표기를 권장합니다.

### 수정 및 편집

생성된 이미지는 자유롭게 편집, 가공, 상업적 활용이 가능합니다.

## 실전 활용 사례 15가지

### 콘텐츠 크리에이터용

1. **유튜브 썸네일**: 시선을 끄는 비주얼 제작
2. **블로그 헤더 이미지**: 글의 주제를 표현하는 이미지
3. **팟캐스트 커버**: 브랜드 아이덴티티 표현
4. **SNS 포스트**: 인스타그램, 페이스북 게시물

### 비즈니스용

5. **프레젠테이션 자료**: PPT 배경 및 일러스트
6. **마케팅 콘텐츠**: 광고 배너, 전단지 디자인
7. **제품 목업**: 앱, 웹사이트 비주얼
8. **브랜드 로고**: 초안 및 아이디어 스케치

### 개인 프로젝트용

9. **초대장 디자인**: 결혼식, 파티 초대장
10. **명함 일러스트**: 개성있는 명함 제작
11. **벽지/배경화면**: 데스크탑, 모바일 배경
12. **티셔츠 디자인**: 프린트용 그래픽

### 교육 및 학습용

13. **교재 삽화**: 교육 자료 시각화
14. **인포그래픽**: 정보 전달용 이미지
15. **학습 카드**: 플래시카드 제작

![비즈니스 활용 예시](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop)

## 고급 팁: 전문가처럼 사용하기

### 1. 특정 화가 스타일 모방

"빈센트 반 고흐 스타일의", "피카소 입체파 느낌의" 등 유명 화풍을 언급하면 독특한 결과를 얻을 수 있습니다.

**예시:**
> "클로드 모네의 인상주의 스타일로 그린 현대 도시 풍경, 부드러운 붓터치, 밝은 색감"

### 2. 사진 기법 용어 활용

전문 사진 용어를 사용하면 더 정교한 결과를 얻습니다:

- "얕은 심도(shallow depth of field)"
- "장노출(long exposure)"
- "골든 아워(golden hour) 조명"
- "50mm f/1.8 렌즈로 촬영한 것처럼"

### 3. 감정과 스토리텔링

단순한 시각적 묘사를 넘어 감정과 이야기를 담으세요:

**예시:**
> "오랜만에 고향에 돌아온 사람의 향수 어린 시선으로 바라본 어린 시절의 놀이터, 석양빛에 물든 그네, 쓸쓸하지만 따뜻한 감정"

### 4. 시리즈로 일관성 유지

여러 이미지를 같은 스타일로 만들고 싶다면:

1. 첫 이미지 생성 시 스타일을 상세히 정의
2. 후속 이미지에서 "앞서 생성한 이미지와 같은 스타일로" 추가
3. 색감, 조명, 분위기 등 공통 요소 명시

## 자주 묻는 질문 (FAQ)

### Q1. DALL-E 3는 무료인가요?

ChatGPT Plus 구독($20/월) 시 무제한 사용 가능합니다. 별도의 추가 비용은 없습니다.

### Q2. 생성된 이미지의 해상도는?

기본적으로 1024x1024 정방형 또는 1792x1024 와이드 형식으로 생성됩니다. 고해상도 업스케일이 필요하다면 별도 도구를 사용해야 합니다.

### Q3. 한글 프롬프트도 가능한가요?

네, ChatGPT가 한글을 영어로 번역하여 DALL-E에 전달하므로 한글로도 완벽하게 작동합니다.

### Q4. 하루에 몇 개까지 만들 수 있나요?

공식적인 제한은 없지만, 과도한 사용 시 일시적으로 속도 제한이 걸릴 수 있습니다. 일반적인 사용에는 문제없습니다.

### Q5. 실제 사진처럼 사실적인 이미지도 가능한가요?

네, "photorealistic", "4K photography", "사진처럼 사실적으로" 등의 키워드를 사용하면 매우 사실적인 이미지를 생성할 수 있습니다.

### Q6. 생성된 이미지를 편집할 수 있나요?

DALL-E 3는 현재 인페인팅(부분 수정) 기능을 직접 지원하지 않습니다. 전체 이미지를 다시 생성하거나, 외부 편집 도구를 사용해야 합니다.

### Q7. 같은 이미지를 다시 만들 수 있나요?

정확히 같은 이미지는 재생성할 수 없습니다. AI는 매번 새로운 이미지를 생성하므로, 마음에 드는 이미지는 반드시 저장하세요.

### Q8. 애니메이션이나 비디오도 만들 수 있나요?

DALL-E 3는 정적 이미지만 생성합니다. 애니메이션이나 비디오는 다른 도구(Runway, Pika 등)를 사용해야 합니다.

## 마무리: 오늘부터 AI 아티스트 되기

ChatGPT의 DALL-E 3는 누구나 쉽게 전문가 수준의 이미지를 만들 수 있게 해주는 혁명적인 도구입니다. 디자인 경험이나 미술 실력이 없어도 괜찮습니다.

### 성공적인 이미지 생성을 위한 3가지 핵심

1. **구체적인 프롬프트**: 주제, 스타일, 색감, 분위기를 명확히
2. **반복과 실험**: 여러 버전을 만들어보며 최적의 결과 찾기
3. **컨텍스트 활용**: ChatGPT와 대화하며 점진적으로 개선

### 다음 단계

이제 ChatGPT를 열고 첫 이미지를 만들어보세요. 이 글의 프롬프트 예시들을 복사해서 사용해도 좋습니다.

처음에는 만족스럽지 않은 결과가 나올 수 있지만, 몇 번만 시도하면 금방 요령을 터득하게 될 것입니다.

**여러분의 창의력과 AI 기술이 만나는 순간, 무한한 가능성이 펼쳐집니다.** 오늘부터 ChatGPT로 멋진 이미지를 만들어보세요!

---

*이 글이 도움이 되셨나요? 다른 AI 도구 활용법도 궁금하시다면 [하우투AI 블로그](/blog)를 방문해보세요.*

**관련 글:**
- [ChatGPT 활용한 업무 자동화 완벽 가이드](/blog/1)
- [AI 프롬프트 엔지니어링 실전 가이드](/blog/3)
- [2024년 꼭 알아야 할 무료 AI 도구 TOP 10](/blog/2)
      `,
      date: '2026-01-20',
      category: 'ChatGPT',
      readTime: '7분',
      author: '하우투AI',
    },
  };

  return posts[id] || null;
};

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getBlogPost(id);

  if (!post) {
    return {
      title: '포스트를 찾을 수 없습니다 - 하우투AI',
    };
  }

  // 마크다운에서 첫 문단 추출 (SEO 최적화)
  const descriptionMatch = post.content.match(/^#[^\n]+\n\n([^\n]+)/);
  const description = descriptionMatch
    ? descriptionMatch[1].substring(0, 160)
    : post.content.substring(0, 160).replace(/#/g, '');

  return {
    title: `${post.title} - 하우투AI`,
    description: description,
    keywords: ['AI', 'AI 도구', '인공지능', 'ChatGPT', '무료 AI', 'AI 활용법', post.category],
    openGraph: {
      title: post.title,
      description: description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.thumbnail,
          width: 1200,
          height: 600,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: description,
      images: [post.thumbnail],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getBlogPost(id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              포스트를 찾을 수 없습니다
            </h1>
            <Link
              href="/blog"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              블로그로 돌아가기
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-50 dark:bg-slate-800">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* 포스트 헤더 */}
          <div className="mb-8">
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
              <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full font-medium">
                {post.category}
              </span>
              <span>{post.readTime}</span>
              <time>{post.date}</time>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full" />
              <div>
                <p className="font-medium text-gray-900 dark:text-white">
                  {post.author}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  AI 전문가
                </p>
              </div>
            </div>
          </div>

          {/* 썸네일 이미지 */}
          {post.thumbnail && (
            <div className="relative aspect-video rounded-xl overflow-hidden mb-8 shadow-xl">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
                priority
              />
            </div>
          )}

          {/* 광고 */}
          <AdSense adSlot="3333333333" />

          {/* 포스트 내용 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-8 md:p-12 mb-8">
            <article className="markdown-content">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  img: ({ node, ...props }) => {
                    const src = typeof props.src === 'string' ? props.src : '';
                    const alt = typeof props.alt === 'string' ? props.alt : '';
                    return (
                      <div className="relative w-full my-8 rounded-lg overflow-hidden">
                        <img
                          src={src}
                          alt={alt}
                          className="w-full h-auto rounded-lg"
                          loading="lazy"
                        />
                      </div>
                    );
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </article>
          </div>

          {/* 광고 */}
          <AdSense adSlot="4444444444" />

          {/* 공유 버튼 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 mb-8">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              이 글 공유하기
            </h3>
            <div className="flex flex-wrap gap-3">
              <button className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 font-medium">
                Facebook
              </button>
              <button className="px-5 py-2.5 bg-sky-500 text-white rounded-lg hover:bg-sky-600 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 font-medium">
                Twitter
              </button>
              <button className="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 font-medium">
                카카오톡
              </button>
              <button className="px-5 py-2.5 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 hover:shadow-md transform hover:-translate-y-0.5 transition-all duration-200 font-medium">
                링크 복사
              </button>
            </div>
          </div>

          {/* 관련 포스트 */}
          <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              관련 포스트
            </h3>
            <div className="space-y-3">
              {[
                { id: 2, title: '2024년 꼭 알아야 할 무료 AI 도구 TOP 10' },
                { id: 3, title: 'AI 프롬프트 엔지니어링 실전 가이드' },
              ].map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="block p-5 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 rounded-lg hover:from-indigo-50 hover:to-purple-50 dark:hover:from-slate-700 dark:hover:to-slate-600 hover:shadow-md transform hover:-translate-x-1 transition-all duration-200 border border-transparent hover:border-indigo-200 dark:hover:border-indigo-800"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600">
                    {relatedPost.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}
