import { Editor, Transforms } from "slate";
import imageExtensions from "image-extensions";
import isUrl from "is-url";
import { CustomElement } from "utils/types";

export const isImageUrl = (url: string) => {
	if (!url) return false;
	if (!isUrl(url)) return false;
	const ext = new URL(url).pathname.split(".").pop();
	if (!ext) return false;
	return imageExtensions.includes(ext);
};

export const insertImage = (
	editor: Editor,
	url: string | ArrayBuffer | null
) => {
	const text = { text: "" };
	const image: CustomElement = {
		type: "image",
		url,
		size: {
			width: 400,
			height: 400,
		},
		children: [text],
	};
	Transforms.insertNodes(editor, image);
};

export const insertFile = (
	editor: Editor,
	url: string | ArrayBuffer | null,
	name: string
) => {
	const text = { text: "" };
	const file: CustomElement = {
		type: "file",
		url,
		name,
		children: [text],
	};
	Transforms.insertNodes(editor, file);
};
