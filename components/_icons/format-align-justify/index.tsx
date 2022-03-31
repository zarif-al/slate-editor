import React from 'react';
import { IconProps } from '@/utils/interface';

export function IconAlignJustify({ color, size }: IconProps): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      fill="#000000"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"
        fill={color}
      />
    </svg>
  );
}
