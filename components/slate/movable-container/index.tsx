import React, { useContext, useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Editor, Transforms, Path } from "slate";
import { useReadOnly, useSlate, ReactEditor } from "slate-react";
import Element from "components/slate/render-element";
import { RenderProps } from "utils/types";

interface MovableType {
	props: RenderProps;
	lastIndex: number;
}

const Movable = ({ props, lastIndex }: MovableType) => {
	const editor = useSlate();
	const element = props.element;
	const path = ReactEditor.findPath(editor, element);
	console.log(lastIndex);
	const moveUp = () => {
		Transforms.moveNodes(editor, {
			at: path,
			to: Path.previous(path),
		});
	};

	const moveDown = () => {
		console.log(Path.next(path));

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
					{Path.hasPrevious(path) && (
						<button
							onClick={() => {
								moveUp();
							}}
						>
							Up
						</button>
					)}
					{path[0] != lastIndex && (
						<button
							onClick={() => {
								moveDown();
							}}
						>
							Down
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
