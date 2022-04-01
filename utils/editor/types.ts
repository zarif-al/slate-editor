import { Attributes, ReactChildren } from 'react';
import { ElementEnums } from '@/utils/editor/enums';
// Alignment Types
export type Alignment = 'left' | 'center' | 'right' | 'justify';

//Customize Text Type Here
export type CustomText = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
  link?: boolean;
};

//Write Custom Element types Here
export type ParagraphElement = {
  type: ElementEnums.Paragraph;
  align?: Alignment;
  children: CustomText[];
};

export type IFrameElement = {
  type: ElementEnums.IFrame;
  url: string | ArrayBuffer | null;
  size: {
    width: number;
    height: number;
  };
  align?: Alignment;
  children: CustomText[];
};

export type ImageElement = {
  type: ElementEnums.Image;
  url: string | ArrayBuffer | null;
  size: {
    width: number;
    height: number;
  };
  align?: Alignment;
  children: CustomText[];
};

export type LinkElement = {
  type: ElementEnums.Link;
  url: string;
  children: CustomText[];
};

export type HeadingOneElement = {
  type: ElementEnums.HeadingOne;
  align?: Alignment;
  children: CustomText[];
};

export type HeadingTwoElement = {
  type: ElementEnums.HeadingTwo;
  align?: Alignment;
  children: CustomText[];
};

export type ListElement = {
  type: ElementEnums.ListItem;
  children: CustomText[];
};

export type ListParentElement = {
  type: ElementEnums.BulletedList | ElementEnums.NumberedList;
  align?: Alignment;
  children: ListElement[];
};

export type FileElement = {
  type: ElementEnums.File;
  url: string | ArrayBuffer | null;
  name: string;
  children: CustomText[];
};

export type AudioElement = {
  type: ElementEnums.Audio;
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
  | ListParentElement
  | FileElement
  | AudioElement
  | IFrameElement
  | LinkElement;

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
