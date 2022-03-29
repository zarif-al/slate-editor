import React from "react";
import { IconProps } from "@/utils/interface";

export function IconArrowUp({ color, size }: IconProps): JSX.Element {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
			fill={color}
		>
			<path d="M0 0h24v24H0V0z" fill="none" />
			<path d="M7 14l5-5 5 5H7z" />
		</svg>
	);
}
