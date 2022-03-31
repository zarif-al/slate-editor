import React from 'react';
import isUrl from 'is-url';
import ToggleFunctions from '@/components/editor/toggle-functions';
import { useSlate } from 'slate-react';

interface InsertLinkProps {
  icon: JSX.Element;
}

const InsertLinkButton = ({ icon }: InsertLinkProps) => {
  const editor = useSlate();
  const linkHandler = () => {
    if (ToggleFunctions.isLinkActive(editor)) {
      ToggleFunctions.unWrapLink(editor);
    } else {
      const url = window.prompt('Enter the URL of the link:');
      if (!url || !isUrl(url)) return;
      ToggleFunctions.toggleWrapLink(editor, url);
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

export default InsertLinkButton;
