import React from "react";
import { Icon } from "@/components/_icons";

const InsertImage = ({ action, icon }) => {
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

export default InsertImage;
