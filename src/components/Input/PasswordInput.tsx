'use client';

import { Input } from '@nextui-org/react';

import React, { useEffect, useMemo, useState } from 'react';

import Icon from '../Icon/Icon';

const PasswordInput = () => {
  const [value, setValue] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');
  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const validatePassword = (password: string) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{9,}$/.test(
      password,
    );

  const isInvalid = useMemo(() => {
    if (value === '') return false;

    return !validatePassword(value);
  }, [value]);

  useEffect(() => {
    if (isInvalid) {
      setMessage('영문, 숫자, 특수문자를 포함해 9자 이상 입력해주세요.');
      setMessageColor('text-system-error');
    } else if (value) {
      setMessage('사용 가능한 비밀번호입니다.');
      setMessageColor('text-system-success');
    } else {
      setMessage('');
    }
  }, [value, isInvalid]);

  return (
    <>
      <Input
        type={isVisible ? 'text' : 'password'}
        label='비밀번호'
        labelPlacement='outside'
        placeholder='비밀번호를 입력해주세요.'
        value={value}
        onValueChange={(newValue) => setValue(newValue)}
        className='w-80'
        classNames={{
          label: 'custom-label',
          input: 'placeholder:text-gray-700',
          inputWrapper: ['bg-gray-900', 'rounded-md'],
        }}
        endContent={
          <button
            aria-label='toggle password visibility'
            className='focus:outline-none'
            type='button'
            onClick={toggleVisibility}
            disabled={value === ''}
          >
            {isVisible ? (
              <Icon
                name='Eye'
                size='m'
                className={`text-gray-200 ${value === '' ? 'opacity-50' : ''}`}
              />
            ) : (
              <Icon
                name='EyeOff'
                size='m'
                className={`text-gray-200 ${value === '' ? 'opacity-50' : ''}`}
              />
            )}
          </button>
        }
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

export default PasswordInput;
