import React from 'react';
import { IconProps } from '@/utils/interface';

export function IconStarBlock({ size, color }: IconProps): JSX.Element {
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
        d="M9.44341 17.4783L5.11528 19.8562C4.53065 20.1774 3.80756 19.9425 3.5002 19.3316C3.37781 19.0883 3.33558 18.8096 3.38004 18.5387L4.20664 13.5023C4.27317 13.0969 4.14455 12.6833 3.86269 12.3961L0.361159 8.82936C-0.111814 8.34758 -0.121491 7.55634 0.339542 7.06208C0.523129 6.86526 0.763681 6.73717 1.02396 6.69765L5.86296 5.96285C6.25249 5.9037 6.58922 5.64804 6.76342 5.27918L8.92749 0.69694C9.2198 0.0779898 9.93691 -0.176136 10.5292 0.129334C10.7651 0.250974 10.956 0.450471 11.0724 0.69694L13.2364 5.27918C13.4106 5.64804 13.7474 5.9037 14.1369 5.96285L18.9759 6.69765C19.6295 6.7969 20.0824 7.43109 19.9874 8.11414C19.9496 8.38613 19.827 8.63751 19.6387 8.82936L16.1372 12.3961C15.8553 12.6833 15.7267 13.0969 15.7932 13.5023L16.6198 18.5387C16.7315 19.219 16.2942 19.8651 15.6433 19.9818C15.384 20.0282 15.1174 19.9841 14.8846 19.8562L10.5564 17.4783C10.208 17.2869 9.79181 17.2869 9.44341 17.4783Z"
        fill={color}
      />
    </svg>
  );
}
