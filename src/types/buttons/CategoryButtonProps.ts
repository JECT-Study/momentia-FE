import { BaseButtonProps } from './BaseButtonProps';

export interface CategoryButtonProps
  extends Omit<
    BaseButtonProps,
    'disabled' | 'loading' | 'icon' | 'iconPosition' | 'type'
  > {}
