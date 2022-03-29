import React, { useContext, useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Editor, Transforms } from "slate";
import { useReadOnly, useSlate, ReactEditor } from "slate-react";
import Element from "components/editor/render-element";
import { RenderProps } from "utils/types";
import { Icon } from "@/components/_icons";

interface ItemType {
	type: string;
	path: number[];
}

const DndBlock = (props: RenderProps) => {
	const editor = useSlate();
	const element = props.element;
	const path = ReactEditor.findPath(editor, element);

	const [{ isDragging }, drag, preview] = useDrag(
		() => ({
			type: "container",
			item: {
				type: "container",
				path: path,
			},
			collect: (monitor) => ({
				isDragging: !!monitor.isDragging(),
			}),
		}),
		[path]
	);

	const [{ isOver }, drop] = useDrop(
		() => ({
			accept: "container",
			drop: (item: ItemType, monitor) => {
				console.log("Moving from", item.path, "to", path);
				Transforms.moveNodes(editor, { at: item.path, to: path });
			},
			collect: (monitor) => ({
				isOver: !!monitor.isOver(),
			}),
			hover: (item, monitor) => ({
				isOver: !!monitor.isOver(),
			}),
		}),
		[path]
	);

	//Disable drag properties in list-items
	if (props.element.type === "list-item") {
		return <Element {...props} />;
	}

	return (
		<div ref={drop}>
			<div
				style={{
					display: "flex",
					gap: "10px",
					alignItems: "center",
				}}
			>
				<div
					ref={drag}
					contentEditable={false}
					style={{ cursor: "pointer", userSelect: "none" }}
				>
					<Icon.Drag size={14} color={"grey"} />
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
