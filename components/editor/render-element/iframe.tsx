import React from 'react';
import { RenderProps, IFrameElement } from '@/utils/editor/types';
import { Icon } from '@/components/_icons';

const IframeRender = (props: RenderProps) => {
  const element = props.element as IFrameElement;

  return (
    <div {...props.attributes} contentEditable={false}>
      <span
        style={{
          position: 'relative',
          maxWidth: '100%',
        }}
        contentEditable={false}
      >
        <iframe
          loading="lazy"
          src={element.url as string}
          style={{
            width: '100%',
            border: 0,
          }}
        ></iframe>
      </span>
      {props.children}
    </div>
  );
};

export default IframeRender;
