import React from "react";
import { Icon } from "@/components/_icons";

interface InsertImageTypes {
	action: () => void;
	icon: JSX.Element;
}

const InsertImageButton = ({ action, icon }: InsertImageTypes) => {
	return (
		<span
			style={{
				display: "flex",
				alignItems: "center",
				cursor: "pointer",
			}}
			onMouseDown={(event) => {
				event.preventDefault();
				action();
			}}
		>
			{icon}
		</span>
	);
};

export default InsertImageButton;
