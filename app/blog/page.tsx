import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSense from '@/components/AdSense';

export const metadata = {
  title: '블로그 - 하우투AI',
  description: 'AI 활용 팁과 최신 정보를 제공하는 블로그입니다.',
};

const blogPosts = [
  {
    id: 1,
    title: 'ChatGPT를 활용한 업무 자동화 완벽 가이드',
    excerpt: 'ChatGPT를 업무에 효과적으로 활용하는 방법을 단계별로 알아봅니다. 이메일 작성부터 보고서 생성까지 모든 것을 자동화하세요.',
    date: '2024-01-15',
    category: 'ChatGPT',
    readTime: '5분',
  },
  {
    id: 2,
    title: '2024년 꼭 알아야 할 무료 AI 도구 TOP 10',
    excerpt: '무료로 사용할 수 있는 최고의 AI 도구들을 소개합니다. 이미지 생성, 텍스트 편집, 동영상 제작까지 다양한 도구를 활용해보세요.',
    date: '2024-01-14',
    category: 'AI 도구',
    readTime: '8분',
  },
  {
    id: 3,
    title: 'AI 프롬프트 엔지니어링 실전 가이드',
    excerpt: '효과적인 프롬프트 작성법을 배우고 AI로부터 원하는 결과를 얻는 방법을 알아봅니다. 실전 예제와 함께 설명합니다.',
    date: '2024-01-13',
    category: '프롬프트',
    readTime: '10분',
  },
  {
    id: 4,
    title: 'Midjourney로 전문가처럼 이미지 생성하기',
    excerpt: 'Midjourney를 활용하여 고퀄리티 이미지를 생성하는 방법을 배워봅니다. 프롬프트 작성 팁부터 스타일 적용까지.',
    date: '2024-01-12',
    category: 'AI 도구',
    readTime: '7분',
  },
  {
    id: 5,
    title: 'AI로 블로그 포스팅 10배 빠르게 작성하기',
    excerpt: 'AI를 활용하여 블로그 글쓰기 시간을 획기적으로 단축하는 방법을 소개합니다. SEO 최적화까지 자동으로!',
    date: '2024-01-11',
    category: '활용법',
    readTime: '6분',
  },
  {
    id: 6,
    title: 'ChatGPT 플러그인 활용 완벽 가이드',
    excerpt: 'ChatGPT 플러그인을 활용하여 더욱 강력한 기능을 사용하는 방법을 알아봅니다. 웹 검색, 데이터 분석 등 다양한 플러그인 소개.',
    date: '2024-01-10',
    category: 'ChatGPT',
    readTime: '9분',
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              블로그
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              AI 활용 팁과 최신 정보를 확인하세요
            </p>
          </div>

          {/* 카테고리 필터 */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button className="px-4 py-2 rounded-full bg-indigo-600 text-white font-medium">
              전체
            </button>
            {['ChatGPT', 'AI 도구', '프롬프트', '활용법'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700 font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* 광고 */}
          <AdSense adSlot="1111111111" />

          {/* 블로그 포스트 목록 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-slate-900 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                <Link href={`/blog/${post.id}`}>
                  <div className="aspect-video bg-gradient-to-br from-indigo-400 to-purple-500 group-hover:scale-105 transition-transform duration-300" />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span className="bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 px-3 py-1 rounded-full font-medium">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <time className="text-sm text-gray-500 dark:text-gray-500">
                      {post.date}
                    </time>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          {/* 광고 */}
          <AdSense adSlot="2222222222" />

          {/* 페이지네이션 */}
          <div className="flex justify-center gap-2 mt-12">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium">
              1
            </button>
            <button className="px-4 py-2 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 font-medium">
              2
            </button>
            <button className="px-4 py-2 bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 font-medium">
              3
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
