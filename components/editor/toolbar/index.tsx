import React from "react";
import { useSlate } from "slate-react";
import ToggleFunctions from "components/editor/toggle-functions";
import { isImageUrl, insertImage } from "components/editor/functions";

const Toolbar = () => {
	const editor = useSlate();
	return (
		<div
			style={{
				display: "flex",
				gap: "5px",
				width: "100%",
				borderBottom: "1px solid black",
				padding: "0.5rem",
			}}
		>
			<button
				style={{
					fontWeight: ToggleFunctions.isMarkActive(editor, "bold")
						? "800"
						: "normal",
				}}
				onMouseDown={(event) => {
					event.preventDefault();
					ToggleFunctions.toggleBoldMark(editor);
				}}
			>
				B
			</button>
			<button
				style={{
					fontWeight: ToggleFunctions.isMarkActive(editor, "italic")
						? "800"
						: "normal",
					fontStyle: "italic",
				}}
				onMouseDown={(event) => {
					event.preventDefault();
					ToggleFunctions.toggleItalicMark(editor);
				}}
			>
				I
			</button>
			<button
				style={{
					fontWeight: ToggleFunctions.isMarkActive(editor, "underline")
						? "800"
						: "normal",
					textDecoration: "underline",
				}}
				onMouseDown={(event) => {
					event.preventDefault();
					ToggleFunctions.toggleUnderlineMark(editor);
				}}
			>
				U
			</button>
			<button
				style={{
					fontWeight: ToggleFunctions.isMarkActive(editor, "code")
						? "800"
						: "normal",
				}}
				onMouseDown={(event) => {
					event.preventDefault();
					ToggleFunctions.toggleCodeMark(editor);
				}}
			>
				{"< Span >"}
			</button>
			<button
				style={{
					fontWeight: ToggleFunctions.isBlockActive(editor, "code")
						? "800"
						: "normal",
				}}
				onMouseDown={(event) => {
					event.preventDefault();
					ToggleFunctions.toggleCodeBlock(editor);
				}}
			>
				{"< Block >"}
			</button>
			<button
				onMouseDown={(event) => {
					event.preventDefault();
					const url = window.prompt("Enter the URL of the image:");
					if (url === null) {
						return;
					}
					if (url == "" || !isImageUrl(url)) {
						alert("URL is not an image");
						return;
					}
					insertImage(editor, url);
				}}
			>
				Img
			</button>
		</div>
	);
};

export default Toolbar;
