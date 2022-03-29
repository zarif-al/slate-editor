import React from "react";

interface MarkDownButtonTypes {
	active: boolean;
	action: () => void;
	icon: JSX.Element;
}

const MarkButton = ({ icon, action, active }: MarkDownButtonTypes) => {
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
