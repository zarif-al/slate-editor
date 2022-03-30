import React from 'react';
import { insertIframe } from '@/components/editor/functions';
import isUrl from 'is-url';
import { useSlate } from 'slate-react';

interface IframeButtonProps {
  icon: JSX.Element;
}

const InsertIframeButton = ({ icon }: IframeButtonProps): JSX.Element => {
  const editor = useSlate();

  const linkHandler = () => {
    const url = window.prompt('Enter the URL of the iframe:');
    if (!url || !isUrl(url)) {
      alert('Invalid URL');
      return;
    } else {
      insertIframe(editor, url);
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
        linkHandler();
      }}
    >
      {icon}
    </span>
  );
};

export default InsertIframeButton;
