import React, { useRef, useCallback } from "react";
import { ReactEditor, useSlate } from "slate-react";
import { isAcceptableFormat } from "@/utils/editor";
import { isImageUrl, insertFile } from "components/editor/functions";

interface InsertFileType {
	icon: JSX.Element;
}

const EDITOR_UPLOAD_ACCEPT = ".zip,.rar,.doc,.docx,.pdf";

const InsertFileButton = ({ icon }: InsertFileType) => {
	const ref = useRef<HTMLInputElement>(null);
	const editor = useSlate();

	const onUploadFile = useCallback(
		async (event: React.ChangeEvent<HTMLInputElement>) => {
			if (!event.currentTarget.files || !event.currentTarget.files[0]) {
				return;
			} else if (!isAcceptableFormat(EDITOR_UPLOAD_ACCEPT, event)) {
				alert("Unsupported file format");
			} else {
				try {
					const file = event.currentTarget.files[0];
					if (file) {
						const reader = new FileReader();
						const [mime] = file.type.split("/");

						reader.addEventListener("load", () => {
							const url = reader.result;
							insertFile(editor, url, file.name);
						});

						reader.readAsDataURL(file);
					}
				} catch (error) {
					console.log("Error", error);
				}
			}
		},
		[editor]
	);

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
				onChange={onUploadFile}
			/>
			{icon}
		</span>
	);
};

export default InsertFileButton;
