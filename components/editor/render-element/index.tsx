import React from 'react';
import ImageElement from '@/components/editor/render-element/image';
import DefaultElement from '@/components/editor/render-element/default';
import HeadingOne from '@/components/editor/render-element/heading-one';
import HeadingTwo from '@/components/editor/render-element/heading-two';
import BulletedList from '@/components/editor/render-element/bulleted-list';
import ListItem from '@/components/editor/render-element/list-item';
import NumberedList from '@/components/editor/render-element/numbered-list';
import File from '@/components/editor/render-element/file';
import IframeRender from '@/components/editor/render-element/iframe';
import ParagraphElement from '@/components/editor/render-element/paragraph';
import LinkElement from '@/components/editor/render-element/link';
import { RenderProps } from '@/utils/editor/types';
import { ElementEnums } from '@/utils/editor/enums';

const Element = (props: RenderProps): JSX.Element => {
  switch (props.element.type) {
    case ElementEnums.Image:
      return <ImageElement {...props} />;
    case ElementEnums.HeadingOne:
      return <HeadingOne {...props} />;
    case ElementEnums.HeadingTwo:
      return <HeadingTwo {...props} />;
    case ElementEnums.BulletedList:
      return <BulletedList {...props} />;
    case ElementEnums.NumberedList:
      return <NumberedList {...props} />;
    case ElementEnums.ListItem:
      return <ListItem {...props} />;
    case ElementEnums.File:
      return <File {...props} />;
    case ElementEnums.IFrame:
      return <IframeRender {...props} />;
    case ElementEnums.Paragraph:
      return <ParagraphElement {...props} />;
    case ElementEnums.Link:
      return <LinkElement {...props} />;
    default:
      return <DefaultElement {...props} />;
  }
};

export default Element;
