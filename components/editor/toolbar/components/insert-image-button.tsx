import React, { useRef, useCallback } from 'react';
import { useSlate } from 'slate-react';
import { insertImage, isAcceptableFormat } from '@/components/editor/helper';
import { uploadFile } from '@/service/storage';
interface InsertImageTypes {
  icon: JSX.Element;
}

const EDITOR_UPLOAD_ACCEPT = '.jpg,.jpeg,.png,.gif,.bmp';

const InsertImageButton = ({ icon }: InsertImageTypes): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null);
  const editor = useSlate();

  const onUploadImage = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!event.currentTarget.files || !event.currentTarget.files[0]) {
        return;
      } else if (!isAcceptableFormat(EDITOR_UPLOAD_ACCEPT, event)) {
        alert('Unsupported file format');
      } else {
        try {
          const file = event.currentTarget.files[0];
          if (file) {
            const image_url = await uploadFile(file);
            insertImage(editor, image_url);
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
        onChange={onUploadImage}
      />
      {icon}
    </span>
  );
};

export default InsertImageButton;
