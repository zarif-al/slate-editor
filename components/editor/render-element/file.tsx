import React from "react";
import { RenderProps } from "utils/editor/types";
import { Icon } from "@/components/_icons";
import { FileElement } from "@/utils/editor/types";
import { removeElement } from "@/components/editor/functions";
import { ReactEditor, useSlate } from "slate-react";

const File = (props: RenderProps) => {
	const editor = useSlate();
	const element = props.element as FileElement;
	const path = ReactEditor.findPath(editor, element);
	return (
		<div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
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
			<span
				onMouseDown={() => {
					console.log("clicked");
					removeElement(editor, path);
				}}
				style={{ cursor: "pointer" }}
			>
				<Icon.Close size={16} color={"#ccc"} />
			</span>
		</div>
	);
};

export default File;
