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
import ImageElement from "components/editor/render-element/image";
import CodeElement from "components/editor/render-element/code";
import DefaultElement from "components/editor/render-element/default";
import Leaf from "components/editor/render-leaf";
//

//Plugin
import withImages from "components/editor/plugins/withImages";
//

import { CustomText, CustomElement } from "utils/types";
import ToggleFunctions from "components/editor/toggle-functions";
import Toolbar from "components/editor/toolbar";

//React DnD
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DndBlock from "components/editor/dnd-block";
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

//Props
interface SlateProps {
	initialValue: Descendant[];
	setValue: (value: Descendant[]) => void;
	toolbarVisible?: boolean;
}

// Typescript specific code ->
const SlateEditor = ({
	initialValue,
	setValue,
	toolbarVisible = true,
}: SlateProps): JSX.Element => {
	//Editor Init
	const editor = useMemo(
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
	}, [editor, setValue]);

	//Render Element. Elements are different types of content Quote, Code etc.
	const renderElement = useCallback((props) => {
		return <DndBlock {...props} />;
	}, []);

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
						console.log("saving");
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
