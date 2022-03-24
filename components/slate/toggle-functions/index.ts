import { Transforms, Editor, Element, Text } from "slate";
import { CustomText } from "utils/types";

type Mark = Omit<CustomText, "text"> | null;

const ToggleFunctions = {
	//Toggle Marks
	isMarkActive(editor: Editor, format: string) {
		const marks: Mark = Editor.marks(editor);
		return marks ? marks[format as keyof Mark] === true : false;
	},
	toggleBoldMark(editor: Editor) {
		const isActive = ToggleFunctions.isMarkActive(editor, "bold");
		Transforms.setNodes(
			editor,
			{ bold: isActive ? false : true },
			{ match: (n) => Text.isText(n), split: true }
		);
	},
	toggleItalicMark(editor: Editor) {
		const isActive = ToggleFunctions.isMarkActive(editor, "italic");
		Transforms.setNodes(
			editor,
			{ italic: isActive ? false : true },
			{ match: (n) => Text.isText(n), split: true }
		);
	},
	toggleUnderlineMark(editor: Editor) {
		const isActive = ToggleFunctions.isMarkActive(editor, "underline");
		Transforms.setNodes(
			editor,
			{ underline: isActive ? false : true },
			{ match: (n) => Text.isText(n), split: true }
		);
	},
	toggleCodeMark(editor: Editor) {
		const isActive = ToggleFunctions.isMarkActive(editor, "code");
		Transforms.setNodes(
			editor,
			{ code: isActive ? false : true },
			{ match: (n) => Text.isText(n), split: true }
		);
	},
	//Toggle Code
	isBlockActive(editor: Editor, block: string) {
		const [match] = Editor.nodes(editor, {
			match: (n) => Element.isElement(n) && n.type === block,
		});
		return !!match;
	},
	toggleCodeBlock(editor: Editor) {
		const isActive = ToggleFunctions.isBlockActive(editor, "code");
		Transforms.setNodes(
			editor,
			{ type: isActive ? "paragraph" : "code" },
			{ match: (n) => Editor.isBlock(editor, n), split: true }
		);
	},
};

export default ToggleFunctions;
