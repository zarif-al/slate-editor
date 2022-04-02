import React from 'react';
import { RenderProps, HeadingTwoElement } from '@/utils/editor/types';
const HeadingTwo = (props: RenderProps): JSX.Element => {
  const element = props.element as HeadingTwoElement;
  return (
    <h2
      {...props.attributes}
      style={{
        textAlign: element.align ? element.align : 'left',
        overflowWrap: 'break-word',
        wordBreak: 'break-all',
      }}
    >
      {props.children}
    </h2>
  );
};

export default HeadingTwo;
