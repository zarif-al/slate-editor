import React from 'react';
import { IconProps } from '@/utils/interface';
export function IconSearch({ color, size }: IconProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.41666 0.166626C8.31616 0.166626 10.6667 2.51713 10.6667 5.41663C10.6667 6.65608 10.2372 7.79522 9.51884 8.69331L11.6625 10.8375C11.8903 11.0653 11.8903 11.4346 11.6625 11.6624C11.4522 11.8727 11.1213 11.8889 10.8925 11.711L10.8375 11.6624L8.69335 9.51881C7.79526 10.2371 6.65612 10.6666 5.41666 10.6666C2.51717 10.6666 0.166664 8.31612 0.166664 5.41663C0.166664 2.51713 2.51717 0.166626 5.41666 0.166626ZM5.41666 1.33329C3.1615 1.33329 1.33333 3.16146 1.33333 5.41663C1.33333 7.67179 3.1615 9.49996 5.41666 9.49996C7.67183 9.49996 9.5 7.67179 9.5 5.41663C9.5 3.16146 7.67183 1.33329 5.41666 1.33329Z"
        fill={color}
      />
    </svg>
  );
}
