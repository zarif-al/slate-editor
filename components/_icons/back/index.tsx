import React from 'react';
import { IconProps } from '@/utils/interface';

export function IconBack({ size, color }: IconProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      fillRule="evenodd"
      clipRule="evenodd"
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.00001 18C8.74401 18 8.48801 17.902 8.29301 17.707L0.293006 9.70701C-0.0979941 9.31601 -0.0979941 8.68401 0.293006 8.29301L8.29301 0.293006C8.68401 -0.0979941 9.31601 -0.0979941 9.70701 0.293006C10.098 0.684006 10.098 1.31601 9.70701 1.70701L2.41401 9.00001L9.70701 16.293C10.098 16.684 10.098 17.316 9.70701 17.707C9.51201 17.902 9.25601 18 9.00001 18"
        fill={color}
      />
    </svg>
  );
}
