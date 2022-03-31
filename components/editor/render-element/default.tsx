import React from 'react';
import { RenderProps } from '@/utils/editor/types';

const DefaultElement = (props: RenderProps): JSX.Element => {
  return (
    <p
      {...props.attributes}
      style={{
        textAlign: props.align,
      }}
    >
      {props.children}
    </p>
  );
};

export default DefaultElement;
