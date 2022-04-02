import React from 'react';
import { RenderProps, HeadingOneElement } from '@/utils/editor/types';
const HeadingOne = (props: RenderProps): JSX.Element => {
  const element = props.element as HeadingOneElement;
  return (
    <h1
      {...props.attributes}
      style={{
        textAlign: element.align ? element.align : 'left',
        overflowWrap: 'break-word',
        wordBreak: 'break-all',
      }}
    >
      {props.children}
    </h1>
  );
};

export default HeadingOne;
