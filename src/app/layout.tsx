import type { Metadata } from 'next';
import React from 'react';

import '../styles/globals.css';

import MSWProvider from './providers/MSWProvider';
import ReactQueryProvider from './ReactQueryProvider';
import MSWProvider from './providers/MSWProvider';

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
    <html lang='ko'>
      <body>
        <MSWProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </MSWProvider>
      </body>
    </html>
  );
}
