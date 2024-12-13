import Image from 'next/image';
import Link from 'next/link';

import logo from '../../../public/images/momentiaLogoSymbol.png';

import Icon from '../Icon/Icon';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex items-center bg-background-base text-sm text-white px-14 py-5">
      <div className="absolute left-14">
        <Link href="/">
          <Image src={logo} alt="모멘티아 로고" width={45} priority />
        </Link>
      </div>

      <div className="flex justify-center w-full">
        <ul className="flex gap-20">
          <li className="hover:text-gray-300 cursor-pointer">작품</li>
          <li className="hover:text-gray-300 cursor-pointer">전시회</li>
          <li className="hover:text-gray-300 cursor-pointer">커뮤니티</li>
        </ul>
      </div>

      <div className="absolute right-14 flex items-center gap-7">
        <Icon name="Notification" size="m" className="white" />
        <div className="rounded-full bg-white w-8 h-8"></div>
        <button className="bg-main px-6 py-2 rounded-full text-white">
          작품 업로드
        </button>
        {/* <button>로그인/회원가입</button> */}
      </div>
    </nav>
  );
};

export default Navbar;
