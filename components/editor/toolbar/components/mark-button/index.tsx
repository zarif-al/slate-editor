import React from "react";
import Button from "@/components/editor/components/button";
const MarkButton = ({ icon, action, active }) => {
	return (
		<span
			style={{
				display: "flex",
				alignItems: "center",
				cursor: "pointer",
			}}
			onMouseDown={(e) => {
				e.preventDefault();
				action();
			}}
		>
			{icon}
		</span>
	);
};

export default MarkButton;
