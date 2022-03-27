import React, { useState } from "react";
import Image from "next/image";
import { useSlate, ReactEditor, useSelected, useFocused } from "slate-react";
import { RenderProps } from "utils/types";
import { Transforms, Element, Text } from "slate";
import { ResizableBox, ResizeCallbackData } from "react-resizable";
import { ImageElement } from "utils/types";
const ImageElement = (props: RenderProps) => {
	const editor = useSlate();

	//Cast element as ImageElement
	const element = props.element as ImageElement;

	const path = ReactEditor.findPath(editor, element);
	const [imageSize, setImageSize] = useState(element.size);
	const [aspectRatio, setAspectRatio] = useState(1);
	const selected = useSelected();
	const focused = useFocused();

	const onResizeStop = (e: React.SyntheticEvent, data: ResizeCallbackData) => {
		Transforms.setNodes(
			editor,
			{ size: data.size },
			{
				match: (n) => Element.isElement(n) && "url" in n && n.url === element.url, //Using TypeGuard
			}
		);
		setImageSize(data.size);
	};

	return (
		<div {...props.attributes}>
			{props.children}
			<div
				contentEditable={false}
				style={{
					position: "relative",
				}}
			>
				<ResizableBox
					width={imageSize.width}
					height={imageSize.height}
					lockAspectRatio={true}
					minConstraints={[100, 100]}
					maxConstraints={[732, 732 / aspectRatio]}
					resizeHandles={["w", "e"]}
					onResizeStop={onResizeStop}
					handle={
						<span className="react-resizable-handle react-resizable-handle-e" />
					}
				>
					<Image
						src={element.url as string}
						alt="Image"
						layout="fill"
						objectFit="contain"
						onLoad={({ target }) => {
							const { naturalWidth, naturalHeight } = target as HTMLImageElement;
							const aspectRatio = naturalWidth / naturalHeight;
							const height = imageSize.width / aspectRatio;
							setAspectRatio(aspectRatio);
							setImageSize({ height: height, width: imageSize.width });
						}}
					/>
				</ResizableBox>
				<button
					onMouseDown={() => Transforms.removeNodes(editor, { at: path })}
					style={{
						display: selected && focused ? "block" : "none",
						position: "absolute",
						top: "0.5em",
						left: "0.5em",
						backgroundColor: "white",
						cursor: "pointer",
					}}
				>
					Del
				</button>
			</div>
		</div>
	);
};

export default ImageElement;
