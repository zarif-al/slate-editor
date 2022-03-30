// Import React dependencies.
import React, { useCallback, useMemo } from "react";

// Import the Slate editor factory.
import { createEditor, BaseEditor, Descendant } from "slate";

// Import the Slate components and React plugin.
import { ReactEditor, Slate, Editable, withReact } from "slate-react";
import { HistoryEditor, withHistory } from "slate-history";

//	My Renderers
import Leaf from "@/components/editor/render-leaf";
//

//	Plugin
import withImages from "@/components/editor/plugins/withImages";
//

import { CustomText, CustomElement } from "@/utils/editor/types";
import ToggleFunctions from "@/components/editor/toggle-functions";
import Toolbar from "@/components/editor/toolbar";

//	React DnD
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DndBlock from "@/components/editor/dnd-block";
// TypeScript specific code <-

// Imports :-
// BaseEditor
// Descendant
// ReactEditor

//	Declare Slate Module
declare module "slate" {
	interface CustomTypes {
		Editor: BaseEditor & ReactEditor & HistoryEditor;
		Element: CustomElement;
		Text: CustomText;
	}
}

//	Props
interface SlateProps {
	initialValue: Descendant[];
	setValue: (value: Descendant[]) => void;
	toolbarVisible?: boolean;
}

// Typescript specific code ->
const SlateEditor = ({ initialValue, setValue }: SlateProps): JSX.Element => {
	//	Editor Init
	const editor = useMemo(
		() => withImages(withHistory(withReact(createEditor()))),
		[]
	);

	if (initialValue !== editor.children) {
		editor.children = initialValue;
	}
	//	Render Element. Elements are different types of content Quote, Code etc.
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
				//	This value only acts as initial value.
				value={initialValue}
				onChange={(newValue): void => {
					setValue(newValue);
					const isAstChange = editor.operations.some(
						(op) => "set_selection" !== op.type
					);
					if (isAstChange) {
						const content = JSON.stringify(newValue);
						localStorage.setItem("content", content);
					}
				}}
			>
				<Toolbar />
				<Editable
					renderElement={renderElement}
					renderLeaf={renderLeaf}
					//	Keyboard ShortCut Functions Here
					onKeyDown={(event): void => {
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
					onDrop={(e): boolean => {
						//	This is necessary because we dont want to use slate-reacts default drag-drop function to move text around.
						//	However we still want to be able to drag and drop images.
						//	Allow file dropping.
						const files = e.dataTransfer.files;
						if (!files || files.length < 1) {
							return true;
						}
						return false;
					}}
					onDragStart={(e): boolean => {
						const files = e.dataTransfer.files;
						if (!files || files.length < 1) {
							//	This allows dragging our drag handle in react-dnd
							return true;
						} else {
							//	This disables dragging images.
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
