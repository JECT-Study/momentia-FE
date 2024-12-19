'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import React from 'react';

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NextUIProvider>
        <NextThemesProvider
          attribute='class'
          value={{
            dark: 'custom-dark',
          }}
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextThemesProvider>
      </NextUIProvider>
    </>
  );
};

export default AppShell;
