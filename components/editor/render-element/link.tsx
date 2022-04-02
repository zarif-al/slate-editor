import React from 'react';
import { RenderProps, LinkElement } from '@/utils/editor/types';
import { useSelected, useReadOnly } from 'slate-react';

// From their sample code to fix some chrome bug
const InlineChromiumBugfix = (): JSX.Element => (
  <span
    contentEditable={false}
    style={{
      fontSize: 0,
    }}
  >
    ${String.fromCodePoint(160)}
  </span>
);

const LinkRender = (props: RenderProps): JSX.Element => {
  const element = props.element as LinkElement;
  const selected = useSelected();
  const readOnly = useReadOnly();
  return (
    <a
      {...props.attributes}
      href={element.url}
      style={{
        boxShadow: !readOnly && selected ? '0 0 0 3px #ddd' : '',
        color: 'blue',
        overflowWrap: 'break-word',
        wordBreak: 'break-all',
      }}
    >
      <InlineChromiumBugfix />
      {props.children}
      <InlineChromiumBugfix />
    </a>
  );
};

export default LinkRender;
