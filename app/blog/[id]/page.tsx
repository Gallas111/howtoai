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
  };

  return posts[id] || null;
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id);

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

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id);

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
