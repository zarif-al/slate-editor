import React from 'react';
import { IconProps } from '@/utils/interface';

export const IconIframe = ({ color, size }: IconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        d="M21 2H3a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M11 17.5L9.5 19L5 14.5L9.5 10l1.5 1.5l-3 3l3 3m3.5 1.5L13 17.5l3-3l-3-3l1.5-1.5l4.5 4.5l-4.5 4.5M21 7H3V4h18v3z"
        fill={color}
      />
    </svg>
  );
};
