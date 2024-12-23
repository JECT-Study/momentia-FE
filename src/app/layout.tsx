import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

import '../styles/globals.css';

import MSWProvider from './providers/MSWProvider';
import ReactQueryProvider from './providers/ReactQueryProvider';

import AppShell from '../components/Layout/AppShell';

const Pretendard = localFont({
  src: [
    { path: './fonts/Pretendard-Regular.woff', weight: '400', style: 'normal' },
    { path: './fonts/Pretendard-Medium.woff', weight: '500', style: 'normal' },
    {
      path: './fonts/Pretendard-SemiBold.woff',
      weight: '600',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: '',
  description: '',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang='ko'>
      <body className={`${Pretendard}`}>
        <MSWProvider>
          <ReactQueryProvider>
            <AppShell>{children}</AppShell>
          </ReactQueryProvider>
        </MSWProvider>
      </body>
    </html>
  );
};

export default RootLayout;
