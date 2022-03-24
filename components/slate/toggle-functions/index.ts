import { Transforms, Editor, Element, Text } from "slate";

function isBoldMarkActive(editor: Editor) {
	const [match] = Editor.nodes(editor, {
		match: (n) => Text.isText(n) && n.bold === true,
		universal: true,
	});

	return !!match;
}

function isCodeBlockActive(editor: Editor) {
	const [match] = Editor.nodes(editor, {
		match: (n) => Element.isElement(n) && n.type === "code",
	});
	return !!match;
}

const ToggleFunctions = {
	//Toggle Bold
	toggleBoldMark(editor: Editor) {
		const isActive = isBoldMarkActive(editor);
		Transforms.setNodes(
			editor,
			{ bold: isActive ? false : true },
			{ match: (n) => Text.isText(n), split: isActive ? true : false }
		);
	},

	//Toggle Code
	toggleCodeBlock(editor: Editor) {
		const isActive = isCodeBlockActive(editor);
		Transforms.setNodes(
			editor,
			{ type: isActive ? "paragraph" : "code" },
			{ match: (n) => Editor.isBlock(editor, n) }
		);
	},
};

export default ToggleFunctions;
