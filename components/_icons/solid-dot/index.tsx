import React from 'react';
import { IconProps } from '@/utils/interface';

export function IconSolidDot({ size, color }: IconProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 6 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="6" height="6" rx="3" fill={color} stroke="white" strokeWidth="0.4px" />
    </svg>
  );
}
