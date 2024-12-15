import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default AppShell;
