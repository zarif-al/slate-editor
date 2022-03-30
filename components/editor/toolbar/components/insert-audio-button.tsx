import React, { useRef } from 'react';

interface InsertFileType {
  icon: JSX.Element;
}

const EDITOR_UPLOAD_ACCEPT = '.mp3';

const InsertAudioButton = ({ icon }: InsertFileType): JSX.Element => {
  const ref = useRef<HTMLInputElement>(null);

  const onUploadAudio = (): void => {
    alert("Can't Store in LocalStorage, Implement Upload to AWS");
  };

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
        onChange={onUploadAudio}
      />
      {icon}
    </span>
  );
};

export default InsertAudioButton;
