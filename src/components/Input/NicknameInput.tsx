'use client';

import { Input } from '@nextui-org/react';

import { useEffect, useMemo, useState } from 'react';

import Icon from '../Icon/Icon';

const NicknameInput = () => {
  const [nickname, setNickname] = useState('');
  const [validationMessage, setValidationMessage] = useState('');
  const [validationMessageColor, setValidationMessageColor] = useState('');

  const MAX_NICKNAME_LENGTH = 10;

  const isNicknameValid = (nickname: string) =>
    /^[\u3131-\u318E가-힣A-Za-z0-9]+$/.test(nickname);

  const isNicknameInvalid = useMemo(() => {
    if (nickname === '') return false;
    return !isNicknameValid(nickname) || nickname.length > MAX_NICKNAME_LENGTH;
  }, [nickname]);

  useEffect(() => {
    if (nickname === '모멘티아') {
      // TODO: 닉네임 상태 확인 (API 호출 로직 추가)
      setValidationMessage('중복된 닉네임이 존재합니다.');
      setValidationMessageColor('text-system-error');
    } else if (isNicknameInvalid) {
      setValidationMessage('사용할 수 없는 문자 또는 길이를 초과했습니다.');
      setValidationMessageColor('text-system-error');
    } else if (nickname) {
      setValidationMessage('사용 가능한 닉네임입니다.');
      setValidationMessageColor('text-system-success');
    } else {
      setValidationMessage('');
    }
  }, [nickname, isNicknameInvalid]);

  const currentNicknameLength = nickname.length;
  const nicknameLengthColor =
    nickname.length === 0
      ? 'text-gray-700'
      : currentNicknameLength > MAX_NICKNAME_LENGTH
        ? 'text-system-error'
        : 'text-white';

  return (
    <>
      <Input
        type='text'
        label='닉네임'
        labelPlacement='outside'
        placeholder='닉네임을 입력해주세요.'
        maxLength={MAX_NICKNAME_LENGTH}
        value={nickname}
        onValueChange={(newNickname) => setNickname(newNickname)}
        className='w-78.25'
        classNames={{
          label: 'custom-label',
          input: 'placeholder:text-gray-700',
          inputWrapper: ['bg-gray-900', 'rounded-md'],
        }}
        endContent={
          <div className='flex items-center'>
            <span className={`placeholder ${nicknameLengthColor}`}>
              {currentNicknameLength}
            </span>
            <span className='placeholder text-gray-700'>
              /{MAX_NICKNAME_LENGTH}
            </span>
          </div>
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

export default NicknameInput;
