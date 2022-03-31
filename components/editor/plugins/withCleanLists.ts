import { isImageUrl, insertImage } from '@/components/editor/functions';
import { Transforms, Editor, Element, Text, Range } from 'slate';
import { CustomElement } from '@/utils/editor/types';

// This plugin changes a node from a list-item to paragraph because normal behavior is bad for UX.
// Normal behavior renders a list-item without a parent ordered/unordered list tag

const withCleanLists = (editor: Editor): Editor => {
  const { deleteBackward } = editor;

  editor.deleteBackward = (unit) => {
    const { selection } = editor;

    if (
      selection &&
      selection.focus.offset === 0 &&
      selection.anchor.offset === 0 &&
      Range.isCollapsed(selection)
    ) {
      const node = editor.children[selection.anchor.path[0]] as CustomElement | undefined;
      if (
        (node?.type === 'numbered-list' || node?.type === 'bulleted-list') &&
        node.children.length === 1
      ) {
        Transforms.setNodes(editor, {
          type: 'paragraph',
          children: [{ text: '' }],
        });
      }
      deleteBackward(unit);
    } else {
      deleteBackward(unit);
    }
  };

  return editor;
};

export default withCleanLists;
