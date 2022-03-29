import React from "react";
import { IconProps } from "@/utils/interface";

export function IconDownload({ size, color }: IconProps): JSX.Element {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height={size}
			viewBox="0 0 24 24"
			width={size}
			fill={color}
		>
			<path d="M0 0h24v24H0z" fill="none" />
			<path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
		</svg>
	);
}
