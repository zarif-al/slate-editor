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

	const IconContainer = ({ action, icon }) => {
		return (
			<span
				onClick={() => {
					action();
				}}
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
						gap: "2px",
						alignItems: "center",
					}}
				>
					{selected === null && (
						<IconContainer
							action={setSelected(path)}
							icon={<Icon.Drag size={12} color={"grey"} />}
						/>
					)}
					{selected && Path.equals(selected, path) && (
						<span
							onClick={() => {
								setSelected(null);
							}}
						>
							<Icon.Close size={12} color={"grey"} />
						</span>
					)}
					{selected !== null && !Path.equals(selected, path) && (
						<span
							onClick={() => {
								moveAbove();
							}}
							style={{ transform: "rotate(-180deg)", cursor: "pointer" }}
						>
							<span>
								<Icon.Arrow size={12} color={"grey"} />
							</span>
						</span>
					)}
					{selected !== null && !Path.equals(selected, path) && (
						<span
							onClick={() => {
								swap();
							}}
						>
							<Icon.Shuffle size={12} color={"grey"} />
						</span>
					)}
					{selected !== null && !Path.equals(selected, path) && (
						<span
							onClick={() => {
								moveBelow();
							}}
						>
							<Icon.Arrow size={12} color={"grey"} />
						</span>
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
