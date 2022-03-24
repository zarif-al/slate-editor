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
	const image: CustomElement = { type: "image", url, children: [text] };
	Transforms.insertNodes(editor, image);
};
