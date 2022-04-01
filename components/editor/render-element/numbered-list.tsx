import React from 'react';
import { RenderProps, ListParentElement } from '@/utils/editor/types';

const NumberedList = (props: RenderProps): JSX.Element => {
  const element = props.element as ListParentElement;
  return (
    <ol {...props.attributes} style={{ textAlign: element.align ? element.align : 'left' }}>
      {props.children}
    </ol>
  );
};

export default NumberedList;
