import React from "react";
import { useSlate } from "slate-react";
import ToggleFunctions from "components/editor/toggle-functions";
import { isImageUrl, insertImage } from "components/editor/functions";
import { Icon } from "@/components/_icons";
import {
	MarkButton,
	InsertImageButton,
} from "@/components/editor/toolbar/components";

const Toolbar = () => {
	const editor = useSlate();
	return (
		<div
			style={{
				display: "flex",
				gap: "12px",
				width: "100%",
				borderBottom: "1px solid",
				borderTop: "1px solid",
				borderColor: "#EBEDFF",
				padding: "12px 0px",
			}}
		>
			<MarkButton
				action={() => {
					ToggleFunctions.toggleBoldMark(editor);
				}}
				active={ToggleFunctions.isMarkActive(editor, "bold")}
				icon={
					<Icon.FormatBold
						size={24}
						color={ToggleFunctions.isMarkActive(editor, "bold") ? "black" : "#ccc"}
					/>
				}
			/>
			<MarkButton
				icon={
					<Icon.FormatItalic
						size={24}
						color={ToggleFunctions.isMarkActive(editor, "italic") ? "black" : "#ccc"}
					/>
				}
				action={() => {
					ToggleFunctions.toggleItalicMark(editor);
				}}
				active={ToggleFunctions.isMarkActive(editor, "italic")}
			/>

			<MarkButton
				icon={
					<Icon.FormatUnderline
						size={24}
						color={
							ToggleFunctions.isMarkActive(editor, "underline") ? "black" : "#ccc"
						}
					/>
				}
				action={() => {
					ToggleFunctions.toggleUnderlineMark(editor);
				}}
				active={ToggleFunctions.isMarkActive(editor, "underline")}
			/>

			<MarkButton
				action={() => {
					ToggleFunctions.toggleCodeMark(editor);
				}}
				icon={
					<Icon.Code
						size={24}
						color={ToggleFunctions.isMarkActive(editor, "code") ? "black" : "#ccc"}
					/>
				}
				active={ToggleFunctions.isMarkActive(editor, "code")}
			/>
			<InsertImageButton
				action={() => {
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
				icon={<Icon.FormatImage size={24} color={"#ccc"} />}
			/>
		</div>
	);
};

export default Toolbar;
