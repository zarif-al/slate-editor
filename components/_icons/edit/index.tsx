import React from 'react';
import { IconProps } from '@/utils/interface';

export function IconEdit({ size, color }: IconProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 18C19.5523 18 20 18.4477 20 19C20 19.5523 19.5523 20 19 20H1C0.447715 20 0 19.5523 0 19C0 18.4477 0.447715 18 1 18H19ZM4.29289 11.2929L15.2929 0.292893C15.6534 -0.0675907 16.2206 -0.0953203 16.6129 0.209705L16.7071 0.292893L19.7071 3.29289C20.0676 3.65338 20.0953 4.22061 19.7903 4.6129L19.7071 4.70711L8.70711 15.7071C8.55083 15.8634 8.34815 15.9626 8.13144 15.9913L8 16H5C4.48716 16 4.06449 15.614 4.00673 15.1166L4 15V12C4 11.779 4.07316 11.5655 4.20608 11.392L4.29289 11.2929L15.2929 0.292893L4.29289 11.2929ZM16 2.41421L6 12.4142V14H7.58579L17.5858 4L16 2.41421Z"
        fill={color}
      />
    </svg>
  );
}
