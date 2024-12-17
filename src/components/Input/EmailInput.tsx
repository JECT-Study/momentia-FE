'use client';

import { Input } from '@nextui-org/react';

import Icon from '../Icon/Icon';

const EmailInput = () => {
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
