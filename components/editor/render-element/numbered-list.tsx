import React from 'react';
import { RenderProps, NumberedList } from '@/utils/editor/types';

const NumberedList = (props: RenderProps): JSX.Element => {
  const element = props.element as NumberedList;
  return (
    <ol {...props.attributes} style={{ textAlign: element.align ? element.align : 'left' }}>
      {props.children}
    </ol>
  );
};

export default NumberedList;
