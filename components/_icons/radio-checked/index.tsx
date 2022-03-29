import React from 'react';
import { IconProps } from '@/utils/interface';

export function IconRadioChecked({ size, color }: IconProps): JSX.Element {
  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2" y="2" width={size} height={size} rx={size / 2} stroke={color} strokeWidth="4" />
    </svg>
  );
}
