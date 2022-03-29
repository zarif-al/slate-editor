import React from 'react';
import { IconProps } from '@/utils/interface';

export function IconCheckboxChecked({ color, size }: IconProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.333496" y="0.5" width="23" height="23" rx="4" ry="4" fill={color} />
      <path
        d="M6.12012 12.359L9.80076 16.0397L17.8803 7.96021"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
