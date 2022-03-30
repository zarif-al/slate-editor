import React from 'react';
import { RenderLeaf } from '@/utils/editor/types';
const Leaf = (props: RenderLeaf): JSX.Element => {
  if (props.leaf.code) {
    return (
      <span
        {...props.attributes}
        style={{
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        <code>{props.children}</code>
      </span>
    );
  } else {
    return (
      <span
        {...props.attributes}
        style={{
          fontWeight: props.leaf.bold ? 'bold' : 'normal',
          fontStyle: props.leaf.italic ? 'italic' : 'normal',
          textDecoration: props.leaf.underline ? 'underline' : 'none',
        }}
      >
        {props.children}
      </span>
    );
  }
};

export default Leaf;
