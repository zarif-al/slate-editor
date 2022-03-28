import React, { useContext, useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Editor, Transforms, Path } from "slate";
import { useReadOnly, useSlate, ReactEditor } from "slate-react";
import Element from "components/slate/render-element";
import { RenderProps } from "utils/types";

interface MovableType {
	props: RenderProps;
	selected: Path | null;
	setSelected: () => void;
}

const Movable = ({ props, selected, setSelected }: MovableType) => {
	const editor = useSlate();
	const element = props.element;
	const path = ReactEditor.findPath(editor, element);
	const moveUp = () => {
		Transforms.moveNodes(editor, {
			at: path,
			to: Path.previous(path),
		});
	};

	const moveDown = () => {
		Transforms.moveNodes(editor, {
			at: path,
			to: Path.next(path),
		});
	};

	return (
		<div>
			<div
				className="container"
				style={{
					display: "flex",
					gap: "10px",
				}}
			>
				<div
					contentEditable={false}
					style={{ cursor: "pointer", userSelect: "none" }}
				>
					{selected === null && (
						<button
							onClick={() => {
								setSelected(path);
							}}
						>
							Select
						</button>
					)}
					{selected !== null && !Path.equals(selected, path) && (
						<button
							onClick={() => {
								console.log("Moving from ", selected, " to ", path);
								Transforms.moveNodes(editor, { at: selected, to: path });
								if (Path.isAfter(path, selected)) {
									Transforms.moveNodes(editor, { at: [path[0] - 1], to: selected });
								} else {
									Transforms.moveNodes(editor, { at: [path[0] + 1], to: selected });
								}
								setSelected(null);
							}}
						>
							Swap Here
						</button>
					)}
				</div>
				<div>
					<Element {...props} />
				</div>
			</div>
		</div>
	);
};

export default Movable;
