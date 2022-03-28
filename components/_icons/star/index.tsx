import React from 'react';
import { IconProps } from '@/utils/interface';
export default function IconStar({ color, size }: IconProps): JSX.Element {
  // Need Container
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.66617 12.737L5.06929 14.1637C4.71851 14.3564 4.28466 14.2155 4.10024 13.8489C4.02681 13.703 4.00147 13.5358 4.02814 13.3732L4.5241 10.3514C4.56403 10.1082 4.48685 9.85996 4.31774 9.68769L2.21682 7.54762C1.93303 7.25855 1.92723 6.7838 2.20385 6.48725C2.314 6.36915 2.45833 6.2923 2.6145 6.26859L5.5179 5.82771C5.75161 5.79222 5.95365 5.63882 6.05817 5.41751L7.35661 2.66816C7.532 2.29679 7.96227 2.14432 8.31764 2.3276C8.45916 2.40058 8.5737 2.52028 8.64354 2.66816L9.94198 5.41751C10.0465 5.63882 10.2485 5.79222 10.4823 5.82771L13.3857 6.26859C13.7778 6.32814 14.0496 6.70865 13.9926 7.11848C13.9699 7.28168 13.8963 7.43251 13.7833 7.54762L11.6824 9.68769C11.5133 9.85996 11.4361 10.1082 11.476 10.3514L11.972 13.3732C12.039 13.7814 11.7767 14.169 11.3861 14.2391C11.2305 14.2669 11.0705 14.2405 10.9309 14.1637L8.33399 12.737C8.12494 12.6222 7.87521 12.6222 7.66617 12.737Z"
        fill={color}
      />
    </svg>
  );
}