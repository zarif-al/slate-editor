import React from 'react';
import { RenderProps, ListParentElement } from '@/utils/editor/types';

const BulletedList = (props: RenderProps): JSX.Element => {
  const element = props.element as ListParentElement;
  return (
    <ul {...props.attributes} style={{ textAlign: element.align ? element.align : 'left' }}>
      {props.children}
    </ul>
  );
};

export default BulletedList;
