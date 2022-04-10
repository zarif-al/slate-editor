import React from 'react';
import { RenderProps, AudioElement } from '@/utils/editor/types';
import { Icon } from '@/components/_icons';
import { removeElement } from '@/components/editor/helper';
import { ReactEditor, useSlate, useReadOnly } from 'slate-react';

const Audio = (props: RenderProps): JSX.Element => {
  const element = props.element as AudioElement;
  const editor = useSlate();
  const path = ReactEditor.findPath(editor, element);
  const readOnly = useReadOnly();

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
        {!readOnly && (
          <span
            onMouseDown={(): void => {
              removeElement(editor, path);
            }}
            style={{ cursor: 'pointer' }}
          >
            <Icon.Close size={16} color={'#ccc'} />
          </span>
        )}
      </div>
      {props.children}
    </div>
  );
};

export default Audio;
