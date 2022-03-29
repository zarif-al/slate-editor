import React, { useContext, useEffect, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Editor, Transforms, Path } from "slate";
import { useReadOnly, useSlate, ReactEditor } from "slate-react";
import Element from "@/components/editor/render-element";
import { RenderProps } from "@/utils/types";
import { Icon } from "@/components/_icons";

interface MovableType {
	props: RenderProps;
	selected: Path | null;
	setSelected: (path: Path | null) => void;
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
		if (selected !== null) {
			Transforms.moveNodes(editor, { at: selected, to: path });
			if (Path.isAfter(path, selected)) {
				Transforms.moveNodes(editor, { at: [path[0] - 1], to: selected });
			} else {
				Transforms.moveNodes(editor, { at: [path[0] + 1], to: selected });
			}
			setSelected(null);
		}
	};

	const moveBelow = () => {
		console.log("Moving ", selected, " below ", path);
		if (selected !== null) {
			Transforms.moveNodes(editor, { at: selected, to: [path[0] + 1] });
			setSelected(null);
		}
	};

	const moveAbove = () => {
		console.log("Moving ", selected, " below ", path);
		if (selected !== null) {
			Transforms.moveNodes(editor, { at: selected, to: path });
			setSelected(null);
		}
	};

	interface IconContainerType {
		action: () => void;
		icon: JSX.Element;
	}

	const IconContainer = ({ action, icon }: IconContainerType) => {
		return (
			<span
				onClick={() => {
					action();
				}}
				style={{ cursor: "pointer" }}
			>
				{icon}
			</span>
		);
	};

	return (
		<div>
			<div
				style={{
					display: "flex",
					gap: "10px",
					alignItems: "center",
				}}
			>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					{selected === null && (
						<IconContainer
							action={() => {
								setSelected(path);
							}}
							icon={<Icon.Drag size={12} color={"grey"} />}
						/>
					)}
					{selected && Path.equals(selected, path) && (
						<IconContainer
							action={() => {
								setSelected(null);
							}}
							icon={<Icon.Close size={12} color={"grey"} />}
						/>
					)}
					{selected !== null && !Path.equals(selected, path) && (
						<IconContainer
							action={() => {
								moveAbove();
							}}
							icon={<Icon.ArrowUp size={12} color={"grey"} />}
						/>
					)}
					{selected !== null && !Path.equals(selected, path) && (
						<IconContainer
							action={() => {
								swap();
							}}
							icon={<Icon.Shuffle size={12} color={"grey"} />}
						/>
					)}
					{selected !== null && !Path.equals(selected, path) && (
						<IconContainer
							action={() => {
								moveBelow();
							}}
							icon={<Icon.ArrowDown size={12} color={"grey"} />}
						/>
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
