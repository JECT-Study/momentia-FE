import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';

import '../styles/globals.css';

import ReactQueryProvider from './ReactQueryProvider';

const PretendardRegular = localFont({
  src: './fonts/Pretendard-Regular.woff',
  variable: '--font-geist-sans',
  weight: '400',
  style: 'normal',
});

export const metadata: Metadata = {
  title: '',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${PretendardRegular.variable}`}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
