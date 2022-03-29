import React from 'react';
import { IconProps } from '@/utils/interface';

export function IconBulletList({ size, color }: IconProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 14C19.5523 14 20 14.4477 20 15C20 15.5523 19.5523 16 19 16H5C4.44772 16 4 15.5523 4 15C4 14.4477 4.44772 14 5 14H19ZM19 7C19.5523 7 20 7.44772 20 8C20 8.55229 19.5523 9 19 9H5C4.44772 9 4 8.55229 4 8C4 7.44772 4.44772 7 5 7H19ZM19 0C19.5523 0 20 0.447715 20 1C20 1.55228 19.5523 2 19 2H5C4.44772 2 4 1.55228 4 1C4 0.447715 4.44772 0 5 0H19ZM0 0H2V2H0V0ZM0 7H2V9H0V7ZM0 14H2V16H0V14Z"
        fill={color}
      />
    </svg>
  );
}
