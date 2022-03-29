import React from 'react';
import { IconProps } from '@/utils/interface';

export function IconPlus({ size, color }: IconProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width={size} height={size} rx={size / 2} fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0001 4.16666C10.4028 4.16666 10.7292 4.49312 10.7292 4.89582V9.27082H15.1042C15.507 9.27082 15.8334 9.59728 15.8334 9.99999C15.8334 10.4027 15.507 10.7292 15.1042 10.7292H10.7292V15.1042C10.7292 15.5069 10.4028 15.8333 10.0001 15.8333C9.59737 15.8333 9.27092 15.5069 9.27092 15.1042V10.7292H4.89591C4.49321 10.7292 4.16675 10.4027 4.16675 9.99999C4.16675 9.59728 4.49321 9.27082 4.89591 9.27082H9.27092V4.89582C9.27092 4.49312 9.59737 4.16666 10.0001 4.16666Z"
        fill="white"
      />
    </svg>
  );
}
