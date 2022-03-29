import React from "react";
import { useSlate } from "slate-react";
import ToggleFunctions from "components/editor/toggle-functions";
import { isImageUrl, insertImage } from "components/editor/functions";
import { Icon } from "@/components/_icons";
import {
	MarkButton,
	InsertImageButton,
	InsertFileButton,
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

			<MarkButton
				action={() => {
					ToggleFunctions.toggleHeadingOneBlock(editor);
				}}
				icon={
					<Icon.LooksOne
						size={24}
						color={
							ToggleFunctions.isBlockActive(editor, "heading-one") ? "black" : "#ccc"
						}
					/>
				}
				active={ToggleFunctions.isBlockActive(editor, "heading-one")}
			/>

			<MarkButton
				action={() => {
					ToggleFunctions.toggleHeadingTwoBlock(editor);
				}}
				icon={
					<Icon.LooksTwo
						size={24}
						color={
							ToggleFunctions.isBlockActive(editor, "heading-two") ? "black" : "#ccc"
						}
					/>
				}
				active={ToggleFunctions.isBlockActive(editor, "heading-two")}
			/>

			<MarkButton
				action={() => {
					ToggleFunctions.toggleBulletListBlock(editor);
				}}
				icon={
					<Icon.BulletedList
						size={24}
						color={
							ToggleFunctions.isBlockActive(editor, "bulleted-list") ? "black" : "#ccc"
						}
					/>
				}
				active={ToggleFunctions.isBlockActive(editor, "bulleted-list")}
			/>

			<MarkButton
				action={() => {
					ToggleFunctions.toggleNumberedListBlock(editor);
				}}
				icon={
					<Icon.NumberedList
						size={24}
						color={
							ToggleFunctions.isBlockActive(editor, "numbered-list") ? "black" : "#ccc"
						}
					/>
				}
				active={ToggleFunctions.isBlockActive(editor, "numbered-list")}
			/>

			<InsertImageButton icon={<Icon.FormatImage size={24} color={"#ccc"} />} />

			<InsertFileButton icon={<Icon.Attachment size={24} color={"#ccc"} />} />
		</div>
	);
};

export default Toolbar;
