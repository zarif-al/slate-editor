import React from 'react';
import { RenderProps } from '@/utils/editor/types';

const ListItem = (props: RenderProps): JSX.Element => {
  //	List Item is kept inside Bulleted or Numbered List Element
  return (
    <li
      {...props.attributes}
      style={{
        overflowWrap: 'break-word',
        wordBreak: 'break-all',
      }}
    >
      {props.children}
    </li>
  );
};

export default ListItem;
