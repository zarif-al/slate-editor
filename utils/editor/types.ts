import { Attributes, ReactChildren } from 'react';

//Customize Text Type Here
export type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
};

//Write Custom Element types Here
type ParagraphElement = { type: 'paragraph'; children: CustomText[] };

type CodeElement = { type: 'code'; children: CustomText[] };

export type IFrameElement = {
  type: 'iframe';
  url: string | ArrayBuffer | null;
  children: CustomText[];
};

export type ImageElement = {
  type: 'image';
  url: string | ArrayBuffer | null;
  size: {
    width: number;
    height: number;
  };
  children: CustomText[];
};

type HeadingOneElement = {
  type: 'heading-one';
  children: CustomText[];
};

type HeadingTwoElement = {
  type: 'heading-two';
  children: CustomText[];
};

type ListElement = {
  type: 'list-item';
  children: CustomText[];
};

export type BulletedListElement = {
  type: 'bulleted-list';
  children: ListElement[];
};

export type NumberedList = {
  type: 'numbered-list';
  children: ListElement[];
};

export type FileElement = {
  type: 'file';
  url: string | ArrayBuffer | null;
  name: string;
  children: CustomText[];
};

export type AudioElement = {
  type: 'audio';
  url: string | ArrayBuffer | null;
  children: CustomText[];
};

// Make Element type a union of the above custom element types
export type CustomElement =
  | ParagraphElement
  | HeadingOneElement
  | HeadingTwoElement
  | CodeElement
  | ImageElement
  | ListElement
  | BulletedListElement
  | NumberedList
  | FileElement
  | AudioElement
  | IFrameElement;

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
