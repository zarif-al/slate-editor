import React from 'react';
import { RenderProps } from '@/utils/editor/types';

const NumberedList = (props: RenderProps): JSX.Element => {
  return (
    <div>
      <ol {...props.attributes}>{props.children}</ol>
    </div>
  );
};

export default NumberedList;
