// Import React dependencies.
import React, { useState, useCallback } from "react";
// Import the Slate editor factory.
import {
	createEditor,
	BaseEditor,
	Descendant,
	Transforms,
	Editor,
} from "slate";
// Import the Slate components and React plugin.
import { ReactEditor, Slate, Editable, withReact } from "slate-react";
import { HistoryEditor } from "slate-history";
//My Renderers
import CodeElement from "components/slate/renderer/code";
import DefaultElement from "components/slate/renderer/default";
import { CustomText, CustomElement } from "utils/types";
// TypeScript specific code <-

// Imports :-
// BaseEditor
// Descendant
// ReactEditor

//Declare Slate Module
declare module "slate" {
	interface CustomTypes {
		Editor: BaseEditor & ReactEditor & HistoryEditor;
		Element: CustomElement;
		Text: CustomText;
	}
}

// Typescript specific code ->
const SlateEditor = (): JSX.Element => {
	const initialValue: CustomElement[] = [
		{
			type: "paragraph",
			children: [{ text: "A line of text in a paragraph." }],
		},
	];
	const [value, setValue] = useState<Descendant[]>([]);
	const [editor] = useState(() => withReact(createEditor()));

	//Render Element
	const renderElement = useCallback((props) => {
		switch (props.element.type) {
			case "code":
				return <CodeElement {...props} />;
			default:
				return <DefaultElement {...props} />;
		}
	}, []);

	return (
		<Slate
			editor={editor}
			value={initialValue}
			onChange={(newValue) => setValue(newValue)}
		>
			<Editable
				renderElement={renderElement}
				onKeyDown={(event) => {
					if (event.key === "&") {
						event.preventDefault();
						editor.insertText("and");
					}
					if (event.key === "`" && event.ctrlKey) {
						event.preventDefault();
						// Determine whether any of the currently selected blocks are code blocks.
						const [match] = Editor.nodes(editor, {
							match: (n: CustomElement) => n.type === "code",
						});
						// Toggle the block type depending on whether there's already a match.
						Transforms.setNodes(
							editor,
							{ type: match ? "paragraph" : "code" },
							{ match: (n: CustomElement) => Editor.isBlock(editor, n) }
						);
					}
				}}
			/>
		</Slate>
	);
};

export default SlateEditor;
