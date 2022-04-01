import isUrl from 'is-url';
import ToggleFunctions from '@/components/editor/toggle-functions';
import { Editor } from 'slate';
import { CustomElement } from '@/utils/editor/types';
import { ElementEnums } from '@/utils/editor/enums';
const withLinks = (editor: Editor): Editor => {
  const { insertData, insertText, isInline } = editor;

  editor.isInline = (element: CustomElement): boolean =>
    element.type === ElementEnums.Link || isInline(element);

  editor.insertText = (text): void => {
    if (text && isUrl(text)) {
      ToggleFunctions.toggleWrapLink(editor, text);
    } else {
      insertText(text);
    }
  };

  editor.insertData = (data): void => {
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
