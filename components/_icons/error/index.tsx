import React from 'react';
import { IconProps } from '@/utils/interface';
export function IconError({ color, size }: IconProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 0C7.2 0 0 7.2 0 16C0 24.8 7.2 32 16 32C24.8 32 32 24.8 32 16C32 7.2 24.8 0 16 0ZM14.7429 6.85714H17.2571V19.4286H14.7429V6.85714ZM16 26.2857C15.0857 26.2857 14.2857 25.4857 14.2857 24.5714C14.2857 23.6571 15.0857 22.8571 16 22.8571C16.9143 22.8571 17.7143 23.6571 17.7143 24.5714C17.7143 25.4857 16.9143 26.2857 16 26.2857Z"
        fill={color}
      />
    </svg>
  );
}
