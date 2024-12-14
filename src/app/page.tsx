'use client';

import Icon from '@/components/Icon/Icon';

export default function Home() {
  const iconNames = [
    'AlertCircle',
    'AlternateShare',
    'ArrowLeft',
    'ArrowRight',
    'Bookmark',
    'Check',
    'CheckCircle',
    'CheckCircleFilled',
    'ChevronDoubleLeft',
    'ChevronDoubleRight',
    'ChevronDown',
    'ChevronLeft',
    'ChevronRight',
    'ChevronUp',
    'Close',
    'CloseCircleFilled',
    'Controller',
    'DisabledBookmark',
    'EditNotePencil',
    'EditPencil',
    'ExternalLink',
    'Eye',
    'EyeOff',
    'Heart',
    'HeartFilled',
    'Image',
    'Menu',
    'Message',
    'MoreHorizontal',
    'Notification',
    'Pause',
    'Person',
    'Plus',
    'Search',
    'Star',
    'UploadShare',
  ];

  return (
    <div className='p-8 gap-4'>
      <div className='text-xl pb-4'>[홈페이지] 폰트/간격/색상 테스트</div>
      <h1 className=''>H1 모멘티아</h1>
      <h2 className=''>H2 모멘티아</h2>
      <h3 className=''>H3 모멘티아</h3>
      <h4 className='pb-8'>H4 모멘티아</h4>

      <div className='subtitle1'>subtitle1</div>
      <div className='subtitle2 pb-8'>subtitle2</div>

      <div className='body1'>body1</div>
      <div className='body2'>body2</div>
      <div className='placeholder'>placeholder</div>
      <div className='small-chip'>small-chip</div>
      <div className='button-m'>button-m</div>
      <div className='button-s pb-8'>button-s</div>

      <p>p 태그</p>

      <div className='bg-background-base text-background-title min-h-screen p-8'>
        <Icon name='ChevronLeft' size='xl' className='text-main' />
        {iconNames.map((name) => (
          <div key={name} className='flex flex-col items-center'>
            <Icon name={name} size='xl' className='text-main' />
            <span className='mt-2 text-sm'>{name}</span>
          </div>
        ))}

        <h1 className='text-gray-50 text-4xl'>타이틀 텍스트</h1>
        <h2 className='text-gray-100 text-3xl mt-4'>서브 타이틀 텍스트</h2>
        <p className='text-background-subtitle'>서브 타이포그래피 텍스트</p>
        <div className='bg-gray-900 text-gray-200 p-4 mt-4 rounded'>
          Gray 900 배경, Gray 200 텍스트로 스타일링된 박스
        </div>
        <div className='bg-main text-white p-4'>Main Color 적용된 박스</div>
        <div className='bg-system-error text-white p-4'>
          System Error Color 적용된 박스
        </div>
        <div className='bg-system-success text-white p-4'>
          System Success Color 적용된 박스
        </div>
      </div>
    </div>
  );
}
