'use client';

import { Input } from '@nextui-org/react';

import { useEffect, useMemo, useState } from 'react';

import Icon from '../Icon/Icon';

const PasswordInput = () => {
  const [password, setPassword] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [validationMessageColor, setValidationMessageColor] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () =>
    setIsPasswordVisible(!isPasswordVisible);

  const isPasswordValid = (password: string) =>
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{9,}$/.test(
      password,
    );

  const isPasswordInvalid = useMemo(() => {
    if (password === '') return false;
    return !isPasswordValid(password);
  }, [password]);

  useEffect(() => {
    if (isPasswordInvalid) {
      setValidationMessage(
        '영문, 숫자, 특수문자를 포함해 9자 이상 입력해주세요.',
      );
      setValidationMessageColor('text-system-error');
    } else if (password) {
      setValidationMessage('사용 가능한 비밀번호입니다.');
      setValidationMessageColor('text-system-success');
    } else {
      setValidationMessage('');
    }
  }, [password, isPasswordInvalid]);

  return (
    <>
      <Input
        type={isPasswordVisible ? 'text' : 'password'}
        label='비밀번호'
        labelPlacement='outside'
        placeholder='비밀번호를 입력해주세요.'
        value={password}
        onValueChange={(newPassword) => setPassword(newPassword)}
        className='w-78.25'
        classNames={{
          label: 'custom-label',
          input: 'placeholder:text-gray-700',
          inputWrapper: ['bg-gray-900', 'rounded-md'],
        }}
        endContent={
          <button
            type='button'
            aria-label='toggle password visibility'
            onClick={togglePasswordVisibility}
            disabled={password === ''}
          >
            {isPasswordVisible ? (
              <Icon
                name='Eye'
                size='m'
                className={`text-gray-200 ${password === '' ? 'text-gray-800' : ''}`}
              />
            ) : (
              <Icon
                name='EyeOff'
                size='m'
                className={`text-gray-200 ${password === '' ? 'text-gray-800' : ''}`}
              />
            )}
          </button>
        }
      />

      {validationMessage && (
        <div className='flex items-center mt-2'>
          {validationMessageColor === 'text-system-success' ? (
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
          <p className={`button-s ${validationMessageColor}`}>
            {validationMessage}
          </p>
        </div>
      )}
    </>
  );
};

export default PasswordInput;
