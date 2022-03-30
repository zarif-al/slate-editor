import React from "react";
import { RenderProps } from "@/utils/editor/types";
import { AudioElement } from "@/utils/editor/types";
import { Icon } from "@/components/_icons";

const AudioElement = (props: RenderProps) => {
	const element = props.element as AudioElement;

	return (
		<div {...props.attributes} contentEditable={false}>
			<div
				style={{
					position: "relative",
					border: "1px solid #ccc",
					height: "70px",
					borderRadius: "6px",
					display: "flex",
					alignItems: "center",
				}}
			>
				<audio
					src={element.url as string}
					controls
					controlsList="nodownload"
				></audio>
				<a
					href={element.url as string}
					download
					style={{
						position: "absolute",
						right: "27px",
						top: "50%",
						transform: "translateY(-50%)",
					}}
				>
					<Icon.Download size={16} color={"#ccc"} />
				</a>
			</div>
			{element.children}
		</div>
	);
};

export default AudioElement;
