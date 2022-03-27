import { Attributes, ReactChildren } from "react";

//Customize Text Type Here
export type CustomText = {
	text: string;
	bold?: boolean;
	italic?: boolean;
	underline?: boolean;
	code?: boolean;
};

//Write Custom Element types Here
type ParagraphElement = { type: "paragraph"; children: CustomText[] };

type CodeElement = { type: "code"; children: CustomText[] };

export type ImageElement = {
	type: "image";
	url: string | ArrayBuffer | null;
	size: {
		width: number;
		height: number;
	};
	children: CustomText[];
};

type HeadingElement = {
	type: "heading";
	level: number;
	children: CustomText[];
};

// Make Element type a union of the above custom element types
export type CustomElement =
	| ParagraphElement
	| HeadingElement
	| CodeElement
	| ImageElement;

//RenderElement Props Type
export interface RenderProps {
	attributes: Attributes;
	children: ReactChildren;
	element: CustomElement;
}

export interface RenderLeaf {
	attributes: Attributes;
	children: ReactChildren;
	leaf: CustomText;
	text: CustomText;
}
