// Import React dependencies.
import React, { useState, useCallback, useEffect, useMemo } from "react";

// Import the Slate editor factory.
import {
	createEditor,
	BaseEditor,
	Descendant,
	Transforms,
	Editor,
	Element,
	Text,
} from "slate";

// Import the Slate components and React plugin.
import { ReactEditor, Slate, Editable, withReact } from "slate-react";
import { HistoryEditor, withHistory } from "slate-history";

//My Renderers
import ImageElement from "components/slate/render-element/image";
import CodeElement from "components/slate/render-element/code";
import DefaultElement from "components/slate/render-element/default";
import Leaf from "components/slate/render-leaf";
//

//Plugin
import withImages from "components/slate/plugins/withImages";
//

import { CustomText, CustomElement } from "utils/types";
import ToggleFunctions from "components/slate/toggle-functions";
import Toolbar from "components/slate/toolbar";

//React DnD
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DndBlock from "components/slate/dnd-block";
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

	//Initialvalue State
	const [value, setValue] = useState<Descendant[]>(initialValue);

	//Editor Init
	const [editor] = useState(
		() => withImages(withHistory(withReact(createEditor()))),
		[]
	);

	//Update initial value with localStorage content
	useEffect(() => {
		if (typeof window !== "undefined") {
			const content = JSON.parse(localStorage.getItem("content") as string);

			if (content && content.length > 0) {
				//This line is necessary to re-render the editor
				editor.children = content;
				//
				setValue(content);
			}
		}
	}, [editor]);

	console.log(value);

	//Render Element. Elements are different types of content Quote, Code etc.
	const renderElement = useCallback(
		(props) => {
			return <DndBlock {...props} />;
		},
		[editor]
	);

	// Define a leaf rendering function. Leaves are formatted text spans. Bolded text, italicised text etc.
	const renderLeaf = useCallback((props) => {
		return <Leaf {...props} />;
	}, []);

	return (
		<DndProvider backend={HTML5Backend}>
			<Slate
				editor={editor}
				//This value only acts as initial value.
				value={initialValue}
				onChange={(newValue) => {
					setValue(newValue);
					const isAstChange = editor.operations.some(
						(op) => "set_selection" !== op.type
					);
					if (isAstChange) {
						// Save the value to Local Storage.
						const content = JSON.stringify(newValue);
						localStorage.setItem("content", content);
					}
				}}
			>
				<Toolbar />
				<Editable
					renderElement={renderElement}
					renderLeaf={renderLeaf}
					//Keyboard ShortCut Functions Here
					onKeyDown={(event) => {
						if (!event.ctrlKey) {
							return;
						}
						switch (event.key) {
							case "`": {
								event.preventDefault();
								ToggleFunctions.toggleCodeBlock(editor);
								break;
							}
							case "b": {
								event.preventDefault();
								ToggleFunctions.toggleBoldMark(editor);
								break;
							}
						}
					}}
					onDrop={(e) => {
						//This is necessary because we dont want to use slate-reacts default drag-drop function to move text around.
						//However we still want to be able to drag and drop images.
						//Allow file dropping.
						const files = e.dataTransfer.files;
						if (!files || files.length < 1) {
							return true;
						}
						return false;
					}}
					onDragStart={(e) => {
						const files = e.dataTransfer.files;
						if (!files || files.length < 1) {
							//This allows dragging our drag handle in react-dnd
							return true;
						} else {
							//This disables dragging images.
							e.preventDefault();
							return true;
						}
					}}
				/>
			</Slate>
		</DndProvider>
	);
};

export default SlateEditor;
