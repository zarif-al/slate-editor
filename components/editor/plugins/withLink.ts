// this hoc componenet used to check if inserted text is url or not
// https://github.com/ianstormtaylor/slate/blob/master/site/examples/links.tsx

import { ReactEditor } from 'slate-react';
import isUrl from 'is-url';
import ToggleFunctions from '@/components/editor/toggle-functions';
import { Editor, Text } from 'slate';
import { CustomElement } from '@/utils/editor/types';

const withLinks = (editor: Editor) => {
  const { insertData, insertText, isInline } = editor;

  editor.isInline = (element: CustomElement) =>
    ['link'].includes(element.type) || isInline(element);

  editor.insertText = (text) => {
    if (text && isUrl(text)) {
      ToggleFunctions.toggleWrapLink(editor, text);
    } else {
      insertText(text);
    }
  };

  editor.insertData = (data) => {
    const text = data.getData('text/plain');

    if (text && isUrl(text)) {
      ToggleFunctions.toggleWrapLink(editor, text);
    } else {
      insertData(data);
    }
  };

  return editor;
};

export default withLinks;
