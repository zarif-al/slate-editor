import { Transforms, Editor, Element, Text, Range } from 'slate';
import {
  CustomText,
  BulletedListElement,
  NumberedList,
  Alignment,
  LinkElement,
} from '@/utils/editor/types';
type Mark = Omit<CustomText, 'text'> | null;

const ToggleFunctions = {
  //	Toggle Marks
  isMarkActive(editor: Editor, format: string): boolean {
    const marks: Mark = Editor.marks(editor);

    return marks ? marks[format as keyof Mark] === true : false;
  },
  toggleBoldMark(editor: Editor): void {
    const isActive = ToggleFunctions.isMarkActive(editor, 'bold');
    Transforms.setNodes(
      editor,
      { bold: isActive ? false : true },
      { match: (n) => Text.isText(n), split: true },
    );
  },
  toggleItalicMark(editor: Editor): void {
    const isActive = ToggleFunctions.isMarkActive(editor, 'italic');
    Transforms.setNodes(
      editor,
      { italic: isActive ? false : true },
      { match: (n) => Text.isText(n), split: true },
    );
  },
  toggleUnderlineMark(editor: Editor): void {
    const isActive = ToggleFunctions.isMarkActive(editor, 'underline');
    Transforms.setNodes(
      editor,
      { underline: isActive ? false : true },
      { match: (n) => Text.isText(n), split: true },
    );
  },
  toggleCodeMark(editor: Editor): void {
    const isActive = ToggleFunctions.isMarkActive(editor, 'code');

    Transforms.setNodes(
      editor,
      { code: isActive ? false : true },
      { match: (n) => Text.isText(n), split: true },
    );
  },
  toggleLinkMark(editor: Editor, text: string): void {
    const isActive = ToggleFunctions.isMarkActive(editor, 'link');
    Transforms.setNodes(
      editor,
      { link: isActive ? false : true, text: text },
      { match: (n) => Text.isText(n), split: true },
    );
  },
  toggleNewLine(editor: Editor): void {
    Transforms.insertNodes(
      editor,
      {
        type: 'paragraph',
        children: [{ text: '' }],
      },
      { at: [editor.children.length] },
    );
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
  toggleHeadingOneBlock(editor: Editor): void {
    const isActive = ToggleFunctions.isBlockActive(editor, 'heading-one');

    Transforms.unwrapNodes(editor, {
      match: (n) =>
        Element.isElement(n) && (n.type == 'bulleted-list' || n.type == 'numbered-list'),
      split: true,
    });

    Transforms.setNodes(
      editor,
      { type: isActive ? 'paragraph' : 'heading-one' },
      { match: (n) => Editor.isBlock(editor, n), split: false },
    );
  },
  toggleHeadingTwoBlock(editor: Editor): void {
    const isActive = ToggleFunctions.isBlockActive(editor, 'heading-two');
    Transforms.unwrapNodes(editor, {
      match: (n) =>
        Element.isElement(n) && (n.type == 'bulleted-list' || n.type == 'numbered-list'),
      split: true,
    });

    Transforms.setNodes(
      editor,
      { type: isActive ? 'paragraph' : 'heading-two' },
      { match: (n) => Editor.isBlock(editor, n), split: false },
    );
  },
  toggleBulletListBlock(editor: Editor): void {
    const isActive = ToggleFunctions.isBlockActive(editor, 'bulleted-list');
    Transforms.unwrapNodes(editor, {
      match: (n) =>
        Element.isElement(n) && (n.type == 'bulleted-list' || n.type == 'numbered-list'),
      split: true,
    });

    Transforms.setNodes(
      editor,
      { type: isActive ? 'paragraph' : 'list-item' },
      { match: (n) => Editor.isBlock(editor, n), split: false },
    );

    if (!isActive) {
      const list = { type: 'list-item', children: [{ text: '' }] };
      const block = {
        type: 'bulleted-list',
        children: [list],
      } as BulletedListElement;
      Transforms.wrapNodes(editor, block);
    }
  },
  toggleNumberedListBlock(editor: Editor): void {
    const isActive = ToggleFunctions.isBlockActive(editor, 'numbered-list');

    Transforms.unwrapNodes(editor, {
      match: (n) =>
        Element.isElement(n) && (n.type == 'bulleted-list' || n.type == 'numbered-list'),
      split: true,
    });

    Transforms.setNodes(
      editor,
      { type: isActive ? 'paragraph' : 'list-item' },
      { match: (n) => Editor.isBlock(editor, n), split: false },
    );

    if (!isActive) {
      const list = { type: 'list-item', children: [{ text: '' }] };
      const block = {
        type: 'numbered-list',
        children: [list],
      } as NumberedList;
      Transforms.wrapNodes(editor, block);
    }
  },
  // Toggle Link
  isLinkActive(editor: Editor): boolean {
    const [link] = Editor.nodes(editor, {
      match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === 'link',
    });
    return !!link;
  },
  unWrapLink(editor: Editor): void {
    Transforms.unwrapNodes(editor, {
      match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === 'link',
    });
  },
  toggleWrapLink(editor: Editor, url: string): void {
    const { selection } = editor;
    const isCollapsed = selection && Range.isCollapsed(selection);
    const link: LinkElement = {
      type: 'link',
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
};

export default ToggleFunctions;
