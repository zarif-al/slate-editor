import React from "react";
import Image from "next/image";
import { useSlate, ReactEditor, useSelected, useFocused } from "slate-react";
import { RenderProps } from "utils/types";
import { Transforms, Element, Text } from "slate";

const ImageElement = (props: RenderProps) => {
	const editor = useSlate();
	const path = ReactEditor.findPath(editor, props.element);

	const selected = useSelected();
	const focused = useFocused();

	return (
		<div {...props.attributes}>
			{props.children}
			<div
				contentEditable={false}
				style={{
					boxShadow: selected && focused ? "0 0 0 3px #B4D5FF" : "none",
					width: "fit-content",
					position: "relative",
					cursor: "pointer",
				}}
			>
				<Image
					src={props.element.type === "image" ? (props.element.url as string) : ""}
					alt="Image"
					layout="intrinsic"
					width={400}
					height={500}
				/>
				<button
					onMouseDown={() => Transforms.removeNodes(editor, { at: path })}
					style={{
						display: selected && focused ? "block" : "none",
						position: "absolute",
						top: "0.5em",
						left: "0.5em",
						backgroundColor: "white",
						cursor: "pointer",
					}}
				>
					Del
				</button>
			</div>
		</div>
	);
};

export default ImageElement;
