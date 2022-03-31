import React from 'react';
import { RenderProps } from '@/utils/editor/types';

const DefaultElement = (props: RenderProps): JSX.Element => {
  return (
    <p {...props.attributes} contentEditable={false}>
      {props.children}
    </p>
  );
};

export default DefaultElement;
