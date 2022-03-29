import React, { useRef, useCallback } from "react";
import { ReactEditor, useSlate } from "slate-react";
import { isAcceptableFormat } from "@/utils/editor";
import { isImageUrl, insertAudio } from "components/editor/functions";

interface InsertFileType {
	icon: JSX.Element;
}

const EDITOR_UPLOAD_ACCEPT = ".mp3";

const InsertAudioButton = ({ icon }: InsertFileType) => {
	const ref = useRef<HTMLInputElement>(null);
	const editor = useSlate();

	const onUploadAudio = () => {
		alert("Can't Store in LocalStorage, Implement Upload to AWS");
	};

	const handleMouseDown = () => {
		if (ref.current !== null) {
			ref.current.click();
		}
	};

	return (
		<span
			style={{
				display: "flex",
				alignItems: "center",
				cursor: "pointer",
			}}
			onMouseDown={(event) => {
				event.preventDefault();
				handleMouseDown();
			}}
		>
			<input
				ref={ref}
				type="file"
				accept={EDITOR_UPLOAD_ACCEPT}
				style={{ display: "none" }}
				onChange={onUploadAudio}
			/>
			{icon}
		</span>
	);
};

export default InsertAudioButton;
