import React from 'react';
import { IconProps } from '@/utils/interface';

export function IconCheckboxUnchecked({ size, color, fill }: IconProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.333496" y="0.5" width="23" height="23" rx="4" ry="4" stroke={color} fill={fill} />
    </svg>
  );
}
