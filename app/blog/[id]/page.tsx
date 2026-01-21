import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSense from '@/components/AdSense';

// 실제로는 데이터베이스나 CMS에서 가져올 데이터
const getBlogPost = (id: string) => {
  const posts: { [key: string]: any } = {
    '1': {
      id: 1,
      title: 'ChatGPT를 활용한 업무 자동화 완벽 가이드',
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
    '7': {
      id: 7,
      title: 'ChatGPT로 그림 그리는 방법 - DALL-E 완벽 가이드',
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

  return {
    title: `${post.title} - 하우투AI`,
    description: post.content.substring(0, 160),
    openGraph: {
      title: post.title,
      description: post.content.substring(0, 160),
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
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
          <div className="aspect-video bg-gradient-to-br from-indigo-400 to-purple-500 rounded-lg mb-8" />

          {/* 광고 */}
          <AdSense adSlot="3333333333" />

          {/* 포스트 내용 */}
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm p-8 mb-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div
                className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
              />
            </div>
          </div>

          {/* 광고 */}
          <AdSense adSlot="4444444444" />

          {/* 공유 버튼 */}
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              이 글 공유하기
            </h3>
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Facebook
              </button>
              <button className="px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                Twitter
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                카카오톡
              </button>
              <button className="px-4 py-2 bg-gray-200 dark:bg-slate-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors">
                링크 복사
              </button>
            </div>
          </div>

          {/* 관련 포스트 */}
          <div className="bg-white dark:bg-slate-900 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              관련 포스트
            </h3>
            <div className="space-y-4">
              {[
                { id: 2, title: '2024년 꼭 알아야 할 무료 AI 도구 TOP 10' },
                { id: 3, title: 'AI 프롬프트 엔지니어링 실전 가이드' },
              ].map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="block p-4 bg-gray-50 dark:bg-slate-800 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <h4 className="font-medium text-gray-900 dark:text-white">
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
