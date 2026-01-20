import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "하우투AI - 유용한 AI 팁과 활용법",
  description: "AI 활용 팁, ChatGPT 사용법, AI 도구 추천 등 실생활에 바로 적용할 수 있는 AI 정보를 제공합니다.",
  keywords: ["AI", "인공지능", "ChatGPT", "AI 팁", "AI 활용", "AI 도구", "하우투AI"],
  authors: [{ name: "하우투AI" }],
  openGraph: {
    title: "하우투AI - 유용한 AI 팁과 활용법",
    description: "AI 활용 팁, ChatGPT 사용법, AI 도구 추천 등 실생활에 바로 적용할 수 있는 AI 정보를 제공합니다.",
    type: "website",
    locale: "ko_KR",
    siteName: "하우투AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "하우투AI - 유용한 AI 팁과 활용법",
    description: "AI 활용 팁, ChatGPT 사용법, AI 도구 추천 등 실생활에 바로 적용할 수 있는 AI 정보를 제공합니다.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // 나중에 Google Search Console에서 받은 코드로 교체
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#6366f1" />
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
        />
        {/* Google Analytics (선택사항) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={`${notoSansKR.variable} font-sans antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
