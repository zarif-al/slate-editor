import React from 'react';
import ImageElement from '@/components/editor/render-element/image';
import CodeElement from '@/components/editor/render-element/code';
import DefaultElement from '@/components/editor/render-element/default';
import HeadingOne from '@/components/editor/render-element/heading-one';
import HeadingTwo from '@/components/editor/render-element/heading-two';
import BulletedList from '@/components/editor/render-element/bulleted-list';
import ListItem from '@/components/editor/render-element/list-item';
import NumberedList from '@/components/editor/render-element/numbered-list';
import File from '@/components/editor/render-element/file';
import { RenderProps } from '@/utils/editor/types';

const Element = (props: RenderProps): JSX.Element => {
  switch (props.element.type) {
    case 'code':
      return <CodeElement {...props} />;
    case 'image':
      return <ImageElement {...props} />;
    case 'heading-one':
      return <HeadingOne {...props} />;
    case 'heading-two':
      return <HeadingTwo {...props} />;
    case 'bulleted-list':
      return <BulletedList {...props} />;
    case 'numbered-list':
      return <NumberedList {...props} />;
    case 'list-item':
      return <ListItem {...props} />;
    case 'file':
      return <File {...props} />;
    default:
      return <DefaultElement {...props} />;
  }
};

export default Element;
