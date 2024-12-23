import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

import '../styles/globals.css';

import KakaoProvider from './providers/KakaoProvider';
import MSWProvider from './providers/MSWProvider';
import ReactQueryProvider from './providers/ReactQueryProvider';

import AppShell from '../components/Layout/AppShell';

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
  children: ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${PretendardRegular.variable}`}>
        <MSWProvider>
          <ReactQueryProvider>
            <AppShell>{children}</AppShell>
          </ReactQueryProvider>
        </MSWProvider>
        <KakaoProvider />
      </body>
    </html>
  );
}
