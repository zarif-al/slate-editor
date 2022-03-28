import React from "react";

const Button = ({ children }) => {
	return (
		<span
			style={{
				display: "inline-block",
				cursor: "pointer",
			}}
		>
			{children}
		</span>
	);
};

export default Button;
