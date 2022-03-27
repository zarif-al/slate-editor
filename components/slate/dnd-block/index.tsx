import React, { useContext, useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Editor, Transforms, Path } from "slate";
import { useReadOnly, useSlate, ReactEditor } from "slate-react";
import Element from "components/slate/render-element";
import { RenderProps } from "utils/types";

/* ReactEditor.findPath(editor, element); */

interface ItemType {
	type: string;
	path: number[];
}

const DndBlock = (props: RenderProps) => {
	const editor = useSlate();
	const element = props.element;
	const path = ReactEditor.findPath(editor, element);
	const [{ isDragging }, drag, preview] = useDrag(() => ({
		type: "container",
		item: {
			type: "container",
			path: path,
			element: element,
		},
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	const [{ isOver }, drop] = useDrop(
		() => ({
			accept: "container",
			drop: (item: ItemType, monitor) => {
				console.log(
					"Moving from",
					item.element.children[0].text,
					"to",
					element.children[0].text
				);
				Transforms.moveNodes(editor, {
					at: item.path,
					to: path,
				});
			},
			collect: (monitor) => ({
				isOver: !!monitor.isOver(),
			}),
			hover: (item, monitor) => ({
				isOver: !!monitor.isOver(),
			}),
		}),
		[]
	);

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
		<div ref={drop}>
			<div
				className="container"
				style={{
					display: "flex",
					gap: "10px",
				}}
			>
				<div
					ref={drag}
					contentEditable={false}
					style={{ cursor: "pointer", userSelect: "none" }}
				>
					<button
						onClick={() => {
							moveUp();
						}}
					>
						Up
					</button>
					<button
						onClick={() => {
							moveDown();
						}}
					>
						Down
					</button>
				</div>
				<div
					ref={preview}
					style={{
						color: isDragging ? "red" : "black",
						backgroundColor: isOver ? "cyan" : "transparent",
						width: "100%",
					}}
				>
					<Element {...props} />
				</div>
			</div>
		</div>
	);
};

export default DndBlock;
