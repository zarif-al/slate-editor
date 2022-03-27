import React, { useContext, useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Editor, Transforms } from "slate";
import { useReadOnly, useSlateStatic, ReactEditor } from "slate-react";
import Element from "components/slate/render-element";
import { RenderProps } from "utils/types";

/* ReactEditor.findPath(editor, element); */

interface ItemType {
	type: string;
	path: number[];
}

const DndBlock = (props: RenderProps) => {
	const editor = useSlateStatic();
	const element = props.element;
	const path = ReactEditor.findPath(editor, element);

	const [{ isDragging }, drag, preview] = useDrag(() => ({
		type: "container",
		item: {
			type: "container",
			path: path,
		},
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	}));

	const [{ isOver }, drop] = useDrop(
		() => ({
			accept: "container",
			drop: (item: ItemType, monitor) => {
				console.log("Moving from", item.path[0], "to", path[0]);
				Transforms.moveNodes(editor, { at: item.path, to: path });
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
					||
				</div>
				<div
					ref={preview}
					style={{
						color: isDragging ? "red" : "black",
						backgroundColor: isOver ? "cyan" : "transparent",
					}}
				>
					<Element {...props} />
				</div>
			</div>
		</div>
	);
};

export default DndBlock;
