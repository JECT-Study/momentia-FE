import React from 'react';

export interface BaseButtonProps {
  backgroundColor: string;
  textColor: string;
  textSize: string;
  children: React.ReactNode;

  onClick?: () => void;
  ariaLabel?: string;
  disabled?: boolean;
  loading?: boolean;

  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';

  type?: 'button' | 'submit' | 'reset';
}
