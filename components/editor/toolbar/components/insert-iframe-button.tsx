import React from 'react';
import { insertIframe, isIframe } from '@/components/editor/helper';
import isUrl from 'is-url';
import { useSlate } from 'slate-react';
import { ElementEnums } from '@/utils/editor/enums';

interface IframeButtonProps {
  icon: JSX.Element;
  tooltip: string;
}

const InsertIframeButton = ({ icon, tooltip }: IframeButtonProps): JSX.Element => {
  const editor = useSlate();

  const linkHandler = (): void => {
    const url = window.prompt('Enter the URL of the iframe:');

    if (!url) {
      return;
    } else if (!isUrl(url) && !isIframe(url)) {
      alert('Invalid URL');
      return;
    } else {
      if (isIframe(url)) {
        const parser = new DOMParser();
        const parsedIframe = parser.parseFromString(url, 'text/html');
        const iFrame = parsedIframe.getElementsByTagName(ElementEnums.IFrame);
        const src = iFrame[0].src;
        insertIframe(editor, src);
      } else {
        insertIframe(editor, url);
      }
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
      title={tooltip}
    >
      {icon}
    </span>
  );
};

export default InsertIframeButton;
