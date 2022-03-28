import React from 'react';
import { IconProps } from '@/utils/interface';

export function IconMenu({ size, color }: IconProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 12C19.5523 12 20 12.4477 20 13C20 13.5523 19.5523 14 19 14H1C0.447715 14 0 13.5523 0 13C0 12.4477 0.447715 12 1 12H19ZM19 6C19.5523 6 20 6.44772 20 7C20 7.55228 19.5523 8 19 8H1C0.447715 8 0 7.55228 0 7C0 6.44772 0.447715 6 1 6H19ZM19 0C19.5523 0 20 0.447715 20 1C20 1.55228 19.5523 2 19 2H1C0.447715 2 0 1.55228 0 1C0 0.447715 0.447715 0 1 0H19Z"
        fill={color}
      />
    </svg>
  );
}
