import React from 'react';
import { RenderProps, AudioElement } from '@/utils/editor/types';
import { Icon } from '@/components/_icons';

const Audio = (props: RenderProps): JSX.Element => {
  const element = props.element as AudioElement;

  return (
    <div
      {...props.attributes}
      contentEditable={false}
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        margin: '16px 0px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <audio
          src={element.url as string}
          controls
          controlsList="nodownload"
          style={{
            height: '40px',
            width: '400px',
          }}
        ></audio>
        <a href={element.url as string} download>
          <Icon.Download size={24} color={'#ccc'} />
        </a>
      </div>
      {props.children}
    </div>
  );
};

export default Audio;
