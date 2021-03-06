import { Transforms, Editor, Range, Element } from 'slate';
import { CustomElement } from '@/utils/editor/types';
import { ElementEnums } from '@/utils/editor/enums';
// This plugin changes a node from a list-item to paragraph because normal behavior is bad for UX.
// Normal behavior renders a list-item without a parent ordered/unordered list tag

const withCleanLists = (editor: Editor): Editor => {
  const { deleteBackward } = editor;

  editor.deleteBackward = (unit): void => {
    const { selection } = editor;

    if (
      selection &&
      selection.focus.offset === 0 &&
      selection.anchor.offset === 0 &&
      Range.isCollapsed(selection)
    ) {
      const node = editor.children[selection.anchor.path[0]] as CustomElement | undefined;
      const prevNode = editor.children[selection.anchor.path[0] - 1] as CustomElement | undefined;

      // If the previous node is a list-item. This code is necessary if the previous list-item has no content.
      if (
        prevNode &&
        (prevNode.type === ElementEnums.NumberedList || prevNode.type === ElementEnums.BulletedList)
      ) {
        Transforms.move(editor, { distance: 1, unit: 'character', reverse: true });
        Transforms.removeNodes(editor, { at: [editor.children.length - 1] });
      } else {
        if (
          (node?.type === ElementEnums.NumberedList || node?.type === ElementEnums.BulletedList) &&
          node.children.length === 1
        ) {
          // If the list is not on the first line
          if (selection.anchor.path[0] > 0) {
            Transforms.setNodes(
              editor,
              {
                type: ElementEnums.Paragraph,
                children: [{ text: '' }],
              },
              { at: [selection.anchor.path[0], 0] },
            );
          } else {
            // If the list is on the first line
            Transforms.unwrapNodes(editor, {
              match: (n) =>
                Element.isElement(n) &&
                (n.type == ElementEnums.BulletedList || n.type == ElementEnums.NumberedList),
              split: true,
            });
            Transforms.setNodes(
              editor,
              { type: ElementEnums.Paragraph, children: [{ text: '' }] },
              { match: (n) => Editor.isBlock(editor, n), split: false },
            );
          }
        }
        deleteBackward(unit);
      }
    } else {
      deleteBackward(unit);
    }
  };

  return editor;
};

export default withCleanLists;
