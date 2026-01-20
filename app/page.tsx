import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdSense from '@/components/AdSense';

// 실제로는 데이터베이스나 CMS에서 가져올 데이터
const featuredPosts = [
  {
    id: 1,
    title: 'ChatGPT를 활용한 업무 자동화 완벽 가이드',
    excerpt: 'ChatGPT를 업무에 효과적으로 활용하는 방법을 단계별로 알아봅니다. 이메일 작성부터 보고서 생성까지 모든 것을 자동화하세요.',
    date: '2024-01-15',
    category: 'ChatGPT',
    readTime: '5분',
    image: '/placeholder-blog.jpg',
  },
  {
    id: 2,
    title: '2024년 꼭 알아야 할 무료 AI 도구 TOP 10',
    excerpt: '무료로 사용할 수 있는 최고의 AI 도구들을 소개합니다. 이미지 생성, 텍스트 편집, 동영상 제작까지 다양한 도구를 활용해보세요.',
    date: '2024-01-14',
    category: 'AI 도구',
    readTime: '8분',
    image: '/placeholder-blog.jpg',
  },
  {
    id: 3,
    title: 'AI 프롬프트 엔지니어링 실전 가이드',
    excerpt: '효과적인 프롬프트 작성법을 배우고 AI로부터 원하는 결과를 얻는 방법을 알아봅니다. 실전 예제와 함께 설명합니다.',
    date: '2024-01-13',
    category: '프롬프트',
    readTime: '10분',
    image: '/placeholder-blog.jpg',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        {/* 히어로 섹션 */}
        <section className="relative bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 text-white py-20 animate-gradient">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI를 더 쉽고 스마트하게
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-indigo-100">
                실생활에 바로 적용할 수 있는 AI 팁과 활용법을 공유합니다
              </p>
              <Link
                href="/blog"
                className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                블로그 둘러보기
              </Link>
            </div>
          </div>
        </section>

        {/* 광고 영역 1 */}
        <AdSense adSlot="1234567890" />

        {/* 주요 카테고리 */}
        <section className="py-12 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['ChatGPT', 'AI 도구', '프롬프트', '활용법'].map((category) => (
                <Link
                  key={category}
                  href={`/blog?category=${category}`}
                  className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-lg text-center hover:shadow-lg transition-shadow border border-indigo-100 dark:border-indigo-800"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white">{category}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 인기 포스트 */}
        <section className="py-16 bg-gray-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              인기 포스트
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
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
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {post.title}
                      </h3>
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

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                더 많은 포스트 보기
              </Link>
            </div>
          </div>
        </section>

        {/* 광고 영역 2 */}
        <AdSense adSlot="0987654321" />

        {/* CTA 섹션 */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              AI 활용 팁을 이메일로 받아보세요
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              매주 유용한 AI 정보와 팁을 선별해서 보내드립니다
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors">
                구독하기
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
