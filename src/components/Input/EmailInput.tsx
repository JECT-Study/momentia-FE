'use client';

import { Input } from '@nextui-org/react';

import { useEffect, useMemo, useState } from 'react';

import { EmailInputProps } from '@/types/EmailInputProps';

import Icon from '../Icon/Icon';

const EmailInput = ({ mode }: EmailInputProps) => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const validateEmail = (email: string) =>
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const checkEmailStatus = (email: string) => {
    // TODO: 여기에 이메일 상태를 확인하는 API 호출 로직 추가

    if (mode === 'sign-up') {
      if (email === 'used@example.com') {
        setMessage('이미 가입된 계정입니다.');
        setMessageColor('text-system-error');
      } else {
        setMessage('사용 가능한 이메일입니다.');
        setMessageColor('text-system-success');
      }
    } else if (mode === 'sign-in') {
      if (email === 'used@example.com') {
        setMessage('');
      } else {
        setMessage('가입되어 있지 않은 이메일입니다.');
        setMessageColor('text-system-error');
      }
    }
  };

  const isInvalid = useMemo(() => {
    if (value === '') return false;

    return !validateEmail(value);
  }, [value]);

  useEffect(() => {
    if (isInvalid) {
      setMessage('올바른 이메일 형식으로 입력해주세요.');
      setMessageColor('text-system-error');
    } else if (value) {
      checkEmailStatus(value);
    } else {
      setMessage('');
    }
  }, [value, isInvalid, mode]);

  const handleEmailFieldClear = () => {
    setValue('');
  };

  return (
    <>
      <Input
        type='email'
        label='이메일'
        labelPlacement='outside'
        placeholder='이메일을 입력해주세요.'
        value={value}
        onValueChange={(newValue) => setValue(newValue)}
        isInvalid={false}
        className='w-80'
        classNames={{
          label: 'custom-label',
          input: 'placeholder:text-gray-700',
          inputWrapper: ['bg-gray-900', 'rounded-md'],
        }}
        onClear={handleEmailFieldClear}
      />
      {message && (
        <div className='flex items-center mt-2'>
          {messageColor === 'text-system-success' ? (
            <Icon
              name='CheckCircleFilled'
              size='s'
              className='text-system-success mr-1'
            />
          ) : (
            <Icon
              name='AlertCircle'
              size='s'
              className='text-system-error mr-2'
            />
          )}
          <p className={`button-s ${messageColor}`}>{message}</p>
        </div>
      )}
    </>
  );
};

export default EmailInput;
