import React from "react";
import { RenderProps } from "utils/types";
import { Icon } from "@/components/_icons";
import { FileElement } from "@/utils/types";
const File = (props: RenderProps) => {
	const element = props.element as FileElement;
	return (
		<a
			target="__blank"
			href={element.url as string}
			{...props.attributes}
			download
			contentEditable={false}
			spellCheck={false}
			style={{
				display: "flex",
				alignItems: "center",
				gap: "5px",
				padding: "0.5rem",
				border: "1px solid #ccc",
				borderRadius: "10px",
				width: "fit-content",
			}}
		>
			<Icon.Download size={16} color={"#ccc"} />
			{element.name}
		</a>
	);
};

export default File;
