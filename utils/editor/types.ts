import { Attributes, ReactChildren } from 'react';

// Alignment Types
export type Alignment = 'left' | 'center' | 'right' | 'justify';

//Customize Text Type Here
export type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
};

//Write Custom Element types Here
export type ParagraphElement = {
  type: 'paragraph';
  align?: Alignment;
  children: CustomText[];
};

export type IFrameElement = {
  type: 'iframe';
  url: string | ArrayBuffer | null;
  size: {
    width: number;
    height: number;
  };
  align?: Alignment;
  children: CustomText[];
};

export type ImageElement = {
  type: 'image';
  url: string | ArrayBuffer | null;
  size: {
    width: number;
    height: number;
  };
  align?: Alignment;
  children: CustomText[];
};

export type HeadingOneElement = {
  type: 'heading-one';
  align?: Alignment;
  children: CustomText[];
};

export type HeadingTwoElement = {
  type: 'heading-two';
  align?: Alignment;
  children: CustomText[];
};

type ListElement = {
  type: 'list-item';

  children: CustomText[];
};

export type BulletedListElement = {
  type: 'bulleted-list';
  align?: Alignment;
  children: ListElement[];
};

export type NumberedList = {
  type: 'numbered-list';
  align?: Alignment;
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
