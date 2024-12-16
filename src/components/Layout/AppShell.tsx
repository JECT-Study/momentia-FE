'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

import { NextUIProvider } from '@nextui-org/react';

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NextUIProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </NextUIProvider>
    </>
  );
};

export default AppShell;
