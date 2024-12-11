import React from 'react';

import { IconProps } from '@/types/IconProps';

import iconSizes from './iconSizes';
import { iconsNames } from './iconsNames';

const Icon: React.FC<IconProps> = ({
  name,
  size = 'm',
  className = '',
}: IconProps) => {
  const Component = iconsNames[name];
  const iconSize = iconSizes[size];

  if (!Component) {
    return null;
  }

  return <Component className={`${iconSize} ${className}`} />;
};

export default Icon;
