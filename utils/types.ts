import { Attributes, ReactChildren } from "react";

//Customize Text Type Here
export type CustomText = { text: string; bold?: boolean };

//Write Custom Element types Here
type ParagraphElement = { type: "paragraph"; children: CustomText[] };

type CodeElement = { type: "code"; children: CustomText[] };

type HeadingElement = {
	type: "heading";
	level: number;
	children: CustomText[];
};

// Make Element type a union of the above custom element types
export type CustomElement = ParagraphElement | HeadingElement | CodeElement;

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
