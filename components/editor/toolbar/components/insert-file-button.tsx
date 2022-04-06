import React, { useRef, useCallback } from 'react';
import { useSlate } from 'slate-react';
import { insertFile, isAcceptableFormat } from '@/components/editor/helper';
import { uploadFile } from '@/service/storage';
interface InsertFileType {
  icon: JSX.Element;
}

const EDITOR_UPLOAD_ACCEPT = '.zip,.rar,.doc,.docx,.pdf';

const InsertFileButton = ({ icon }: InsertFileType): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null);
  const editor = useSlate();

  const onUploadFile = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!event.currentTarget.files || !event.currentTarget.files[0]) {
        return;
      } else if (!isAcceptableFormat(EDITOR_UPLOAD_ACCEPT, event)) {
        alert('Unsupported file format');
      } else {
        try {
          const file = event.currentTarget.files[0];
          if (file) {
            const url = await uploadFile(file);
            insertFile(editor, file, file.name);
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
        onChange={onUploadFile}
      />
      {icon}
    </span>
  );
};

export default InsertFileButton;
