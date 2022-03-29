import React from 'react';
import { IconProps } from '@/utils/interface';

interface Props extends IconProps {
  pathColor?: string;
  onClick: () => void;
}

const IconList = ({ color, pathColor, size, onClick }: Props): JSX.Element => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <rect width="32" height="32" rx="8" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.5001 21C23.9603 21 24.3334 21.3731 24.3334 21.8334C24.3334 22.2936 23.9603 22.6667 23.5001 22.6667H11.8334C11.3732 22.6667 11.0001 22.2936 11.0001 21.8334C11.0001 21.3731 11.3732 21 11.8334 21H23.5001ZM23.5001 15.1667C23.9603 15.1667 24.3334 15.5398 24.3334 16C24.3334 16.4603 23.9603 16.8334 23.5001 16.8334H11.8334C11.3732 16.8334 11.0001 16.4603 11.0001 16C11.0001 15.5398 11.3732 15.1667 11.8334 15.1667H23.5001ZM23.5001 9.33337C23.9603 9.33337 24.3334 9.70647 24.3334 10.1667C24.3334 10.6269 23.9603 11 23.5001 11H11.8334C11.3732 11 11.0001 10.6269 11.0001 10.1667C11.0001 9.70647 11.3732 9.33337 11.8334 9.33337H23.5001ZM7.66675 9.33337H9.33341V11H7.66675V9.33337ZM7.66675 15.1667H9.33341V16.8334H7.66675V15.1667ZM7.66675 21H9.33341V22.6667H7.66675V21Z"
        fill={pathColor}
      />
    </svg>
  );
};

export default IconList;
