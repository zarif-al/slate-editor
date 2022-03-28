import React, { useContext, useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Editor, Transforms, Path } from "slate";
import { useReadOnly, useSlate, ReactEditor } from "slate-react";
import Element from "@/components/editor/render-element";
import { RenderProps } from "@/utils/types";

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

	const swap = () => {
		console.log("Swapping ", selected, " with ", path);
		Transforms.moveNodes(editor, { at: selected, to: path });
		if (Path.isAfter(path, selected)) {
			Transforms.moveNodes(editor, { at: [path[0] - 1], to: selected });
		} else {
			Transforms.moveNodes(editor, { at: [path[0] + 1], to: selected });
		}
		setSelected(null);
	};

	const moveBelow = () => {
		console.log("Moving ", selected, " below ", path);
		Transforms.moveNodes(editor, { at: selected, to: [path[0] + 1] });
		setSelected(null);
	};

	const moveAbove = () => {
		console.log("Moving ", selected, " below ", path);
		Transforms.moveNodes(editor, { at: selected, to: path });
		setSelected(null);
	};

	return (
		<div>
			<div
				className="container"
				style={{
					display: "flex",
					gap: "10px",
					alignItems: "center",
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
					{selected && Path.equals(selected, path) && (
						<button
							onClick={() => {
								setSelected(null);
							}}
						>
							Cancel
						</button>
					)}
					{selected !== null && !Path.equals(selected, path) && (
						<button
							onClick={() => {
								moveAbove();
							}}
						>
							Above
						</button>
					)}
					{selected !== null && !Path.equals(selected, path) && (
						<button
							onClick={() => {
								swap();
							}}
						>
							Swap Here
						</button>
					)}
					{selected !== null && !Path.equals(selected, path) && (
						<button
							onClick={() => {
								moveBelow();
							}}
						>
							Below
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
