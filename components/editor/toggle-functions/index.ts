import { Transforms, Editor, Element, Text, Range } from 'slate';
import {
  CustomText,
  ListParentElement,
  Alignment,
  LinkElement,
  CustomElement,
} from '@/utils/editor/types';
import { ElementEnums } from '@/utils/editor/enums';
type Mark = Omit<CustomText, 'text'> | null;

const ToggleFunctions = {
  //	Toggle Marks
  isMarkActive(editor: Editor, format: string): boolean {
    const marks: Mark = Editor.marks(editor);

    return marks ? marks[format as keyof Mark] === true : false;
  },
  toggleMark(editor: Editor, mark: string): void {
    const isActive = ToggleFunctions.isMarkActive(editor, mark);
    Transforms.setNodes(
      editor,
      { [mark]: isActive ? false : true },
      { match: (n) => Text.isText(n), split: true },
    );
  },
  // Toggle New Line
  toggleNewLine(editor: Editor): void {
    Transforms.insertNodes(
      editor,
      {
        type: ElementEnums.Paragraph,
        children: [{ text: '' }],
      },
      { at: [editor.children.length] },
    );
    Transforms.move(editor, { unit: 'character' });
  },
  // Toggle Remove Line
  toggleRemoveLine(editor: Editor): void {
    Transforms.removeNodes(editor, { at: [editor.children.length] });
    Transforms.move(editor, { unit: 'character' });
  },
  // Toggle Alignment
  isAlignActive(editor: Editor, block: string, align: string): boolean {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === block,
    });

    if (!match) return false;

    const element = match[0] as Element;

    return 'align' in element && element.align === align;
  },
  toggleAlignment(editor: Editor, block: string, alignment: string): void {
    const isActive = ToggleFunctions.isAlignActive(editor, block, alignment);
    Transforms.setNodes(
      editor,
      { align: isActive ? 'left' : (alignment as Alignment) },
      { match: (n) => Editor.isBlock(editor, n) && n.type === block, split: false },
    );
  },
  //	Toggle Blocks
  isBlockActive(editor: Editor, block: string): boolean {
    const [match] = Editor.nodes(editor, {
      match: (n) => Element.isElement(n) && n.type === block,
    });
    return !!match;
  },
  toggleBlock(editor: Editor, block: string): void {
    const isActive = ToggleFunctions.isBlockActive(editor, block);
    Transforms.unwrapNodes(editor, {
      match: (n) =>
        Element.isElement(n) &&
        (n.type == ElementEnums.BulletedList || n.type == ElementEnums.NumberedList),
      split: true,
    });

    if (block == ElementEnums.BulletedList || block == ElementEnums.NumberedList) {
      Transforms.setNodes(
        editor,
        { type: isActive ? ElementEnums.Paragraph : ElementEnums.ListItem },
        { match: (n) => Editor.isBlock(editor, n), split: false },
      );
      if (!isActive) {
        const list = { type: ElementEnums.ListItem, children: [{ text: '' }] };
        const element = {
          type: block,
          children: [list],
        } as ListParentElement;
        Transforms.wrapNodes(editor, element);
      }
    } else {
      Transforms.setNodes(
        editor,
        { type: isActive ? ElementEnums.Paragraph : (block as ElementEnums) },
        { match: (n) => Editor.isBlock(editor, n), split: false },
      );
    }
  },
  // Toggle Link
  isLinkActive(editor: Editor): boolean {
    const [link] = Editor.nodes(editor, {
      match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === ElementEnums.Link,
    });
    return !!link;
  },
  unWrapLink(editor: Editor): void {
    Transforms.unwrapNodes(editor, {
      match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === ElementEnums.Link,
    });
  },
  toggleWrapLink(editor: Editor, url: string): void {
    const { selection } = editor;
    const isCollapsed = selection && Range.isCollapsed(selection);

    const currentElement =
      selection && (editor.children[selection.anchor.path[0]] as CustomElement | undefined);

    if (currentElement && currentElement.type !== ElementEnums.Paragraph) {
      console.log('Trigger');
      Transforms.move(editor, { distance: 1, unit: 'character', reverse: false });
    }

    const link: LinkElement = {
      type: ElementEnums.Link,
      url,
      children: isCollapsed ? [{ text: url }] : [],
    };

    if (isCollapsed) {
      Transforms.insertNodes(editor, link);
    } else {
      Transforms.wrapNodes(editor, link, { split: true });
      Transforms.collapse(editor, { edge: 'end' });
    }
  },
  toggleUnwrapBullet(editor: Editor): void {
    Transforms.unwrapNodes(editor, {
      match: (n) =>
        Element.isElement(n) &&
        (n.type == ElementEnums.BulletedList || n.type == ElementEnums.NumberedList),
      split: true,
    });
    Transforms.setNodes(
      editor,
      { type: ElementEnums.Paragraph },
      { match: (n) => Editor.isBlock(editor, n), split: false },
    );
  },
};

export default ToggleFunctions;
