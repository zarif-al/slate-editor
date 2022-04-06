import React, { useRef, useCallback } from 'react';
import { insertAudio, isAcceptableFormat } from '@/components/editor/helper';
import { useSlate } from 'slate-react';
import { uploadFile } from '@/service/storage';

interface InsertFileType {
  icon: JSX.Element;
}

const EDITOR_UPLOAD_ACCEPT = '.mp3';

const InsertAudioButton = ({ icon }: InsertFileType): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null);
  const editor = useSlate();
  const onUploadAudio = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!event.currentTarget.files || !event.currentTarget.files[0]) {
        return;
      } else if (!isAcceptableFormat(EDITOR_UPLOAD_ACCEPT, event)) {
        alert('Unsupported file format');
      } else {
        try {
          const file = event.currentTarget.files[0];
          if (file) {
            const audioUrl = await uploadFile(file);
            insertAudio(editor, audioUrl);
          }
        } catch (error) {
          // eslint-disable-next-line no-console
          console.log('Error', error);
        }
      }
    },
    [editor],
  );

  const handleMouseDown = (): void => {
    /*  alert('Not Implemented'); */
    if (ref.current !== null) {
      ref.current.click();
    }
  };

  return (
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onMouseDown={(event): void => {
        event.preventDefault();
        handleMouseDown();
      }}
    >
      <input
        ref={ref}
        type="file"
        accept={EDITOR_UPLOAD_ACCEPT}
        style={{ display: 'none' }}
        onChange={onUploadAudio}
      />
      {icon}
    </span>
  );
};

export default InsertAudioButton;
