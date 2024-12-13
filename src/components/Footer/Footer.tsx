import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/images/momentiaLogoSymbol.png';

const Footer = () => {
  return (
    <footer className="bg-background-base text-sm text-white px-14 py-24">
      <Link href="/">
        <Image src={logo} alt="모멘티아 로고" width={45} priority />
      </Link>
      <div className="flex flex-wrap wrap-reverse items-center mt-12">
        <div className="w-full">
          <p className="mb-3">Exhibitions, for Artists' Moments</p>
          <div className="flex items-center justify-between">
            <p>예술가들을 위한 순간, 모멘티아</p>
            <div className="flex gap-16">
              <span>이용약관</span>
              <span>개인정보처리방침</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
