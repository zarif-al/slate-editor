import { Transforms, Editor, Element, Text } from "slate";
import {
	CustomText,
	BulletedListElement,
	NumberedList,
} from "utils/editor/types";
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
	toggleNewLine(editor: Editor) {
		Transforms.insertNodes(
			editor,
			{
				type: "paragraph",
				children: [{ text: "" }],
			},
			{ at: [editor.children.length] }
		);
	},
	//Toggle Blocks
	isBlockActive(editor: Editor, block: string) {
		const [match] = Editor.nodes(editor, {
			match: (n) => Element.isElement(n) && n.type === block,
		});
		return !!match;
	},
	toggleHeadingOneBlock(editor: Editor) {
		const isActive = ToggleFunctions.isBlockActive(editor, "heading-one");

		Transforms.unwrapNodes(editor, {
			match: (n) =>
				Element.isElement(n) &&
				(n.type == "bulleted-list" || n.type == "numbered-list"),
			split: true,
		});

		Transforms.setNodes(
			editor,
			{ type: isActive ? "paragraph" : "heading-one" },
			{ match: (n) => Editor.isBlock(editor, n), split: false }
		);
	},
	toggleHeadingTwoBlock(editor: Editor) {
		const isActive = ToggleFunctions.isBlockActive(editor, "heading-two");
		Transforms.unwrapNodes(editor, {
			match: (n) =>
				Element.isElement(n) &&
				(n.type == "bulleted-list" || n.type == "numbered-list"),
			split: true,
		});

		Transforms.setNodes(
			editor,
			{ type: isActive ? "paragraph" : "heading-two" },
			{ match: (n) => Editor.isBlock(editor, n), split: false }
		);
	},
	toggleBulletListBlock(editor: Editor) {
		const isActive = ToggleFunctions.isBlockActive(editor, "bulleted-list");
		console.log(isActive);
		Transforms.unwrapNodes(editor, {
			match: (n) =>
				Element.isElement(n) &&
				(n.type == "bulleted-list" || n.type == "numbered-list"),
			split: true,
		});

		Transforms.setNodes(
			editor,
			{ type: isActive ? "paragraph" : "list-item" },
			{ match: (n) => Editor.isBlock(editor, n), split: false }
		);

		if (!isActive) {
			const list = { type: "list-item", children: [{ text: "" }] };
			const block = {
				type: "bulleted-list",
				children: [list],
			} as BulletedListElement;
			Transforms.wrapNodes(editor, block);
		}
	},
	toggleNumberedListBlock(editor: Editor) {
		const isActive = ToggleFunctions.isBlockActive(editor, "numbered-list");

		Transforms.unwrapNodes(editor, {
			match: (n) =>
				Element.isElement(n) &&
				(n.type == "bulleted-list" || n.type == "numbered-list"),
			split: true,
		});

		Transforms.setNodes(
			editor,
			{ type: isActive ? "paragraph" : "list-item" },
			{ match: (n) => Editor.isBlock(editor, n), split: false }
		);

		if (!isActive) {
			const list = { type: "list-item", children: [{ text: "" }] };
			const block = {
				type: "numbered-list",
				children: [list],
			} as NumberedList;
			Transforms.wrapNodes(editor, block);
		}
	},
};

export default ToggleFunctions;
