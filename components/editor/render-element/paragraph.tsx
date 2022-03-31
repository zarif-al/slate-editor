import React from 'react';
import { RenderProps, ParagraphElement } from '@/utils/editor/types';

const ParagraphRender = (props: RenderProps): JSX.Element => {
  const element = props.element as ParagraphElement;
  return (
    <p
      {...props.attributes}
      style={{
        textAlign: element.align ? element.align : 'left',
      }}
    >
      {props.children}
    </p>
  );
};

export default ParagraphRender;
