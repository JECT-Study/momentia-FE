'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import logo from '../../../public/images/momentiaLogoSymbol.png';
import Icon from '../Icon/Icon';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className='fixed top-0 w-full flex items-center bg-background-base text-sm text-white px-14 py-5 h-[60px]'>
        <div className='absolute left-14'>
          <Link href='/'>
            <Image src={logo} alt='모멘티아 로고' width={45} priority />
          </Link>
        </div>

        <div className='hidden lg:flex justify-center w-full'>
          <ul className='flex gap-20'>
            <li className='hover:text-gray-300 cursor-pointer'>작품</li>
            <li className='hover:text-gray-300 cursor-pointer'>전시회</li>
            <li className='hover:text-gray-300 cursor-pointer'>커뮤니티</li>
          </ul>
        </div>

        <div className='absolute right-14 flex items-center gap-7'>
          <div className='hidden lg:flex items-center gap-7'>
            <Icon name='Notification' size='m' className='white' />
            <div className='rounded-full bg-white w-8 h-8'></div>
            <button className='bg-main px-6 py-2 rounded-full text-white'>
              작품 업로드
            </button>
            {/* <button>로그인/회원가입</button> */}
          </div>

          <button
            className='lg:hidden text-white focus:outline-none'
            onClick={toggleMenu}
          >
            <Icon name='Menu' size='m' />
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-85 backdrop-blur-md z-40'
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className='absolute top-0 right-0 bg-background-base text-white w-3/4 h-full p-8 flex flex-col justify-between'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className='absolute top-6 left-6 text-white text-2xl'
              onClick={toggleMenu}
            >
              &times;
            </button>

            <div className='ml-10'>
              <div className='flex-col space-y-1'>
                {/* <button className="text-lg">로그인/회원가입</button> */}
                <p className='text-lg'>닉네임</p>
                <p className='text-sm text-gray-500'>momentia@gmail.com</p>
                <button className='text-main pt-3'>작품 업로드</button>
              </div>

              <div className='border-t border-gray-800 my-6'></div>

              <ul className='space-y-6 text-lg mt-6'>
                <li className='hover:text-gray-300 cursor-pointer'>작품</li>
                <li className='hover:text-gray-300 cursor-pointer'>전시회</li>
                <li className='hover:text-gray-300 cursor-pointer'>커뮤니티</li>
              </ul>
            </div>

            <div className='ml-10'>
              <button>로그아웃</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
