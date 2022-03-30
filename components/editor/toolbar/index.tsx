import React from 'react';
import { useSlate } from 'slate-react';
import ToggleFunctions from '@/components/editor/toggle-functions';
import { Icon } from '@/components/_icons';
import {
  MarkButton,
  InsertImageButton,
  InsertFileButton,
  InsertAudioButton,
} from '@/components/editor/toolbar/components';

const Toolbar = (): JSX.Element => {
  const editor = useSlate();
  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        width: '100%',
        borderBottom: '1px solid',
        borderTop: '1px solid',
        borderColor: '#EBEDFF',
        padding: '12px 0px',
      }}
    >
      <MarkButton
        action={(): void => {
          ToggleFunctions.toggleBoldMark(editor);
        }}
        icon={
          <Icon.FormatBold
            size={24}
            color={ToggleFunctions.isMarkActive(editor, 'bold') ? 'black' : '#ccc'}
          />
        }
      />
      <MarkButton
        icon={
          <Icon.FormatItalic
            size={24}
            color={ToggleFunctions.isMarkActive(editor, 'italic') ? 'black' : '#ccc'}
          />
        }
        action={(): void => {
          ToggleFunctions.toggleItalicMark(editor);
        }}
      />

      <MarkButton
        icon={
          <Icon.FormatUnderline
            size={24}
            color={ToggleFunctions.isMarkActive(editor, 'underline') ? 'black' : '#ccc'}
          />
        }
        action={(): void => {
          ToggleFunctions.toggleUnderlineMark(editor);
        }}
      />

      <MarkButton
        action={(): void => {
          ToggleFunctions.toggleCodeMark(editor);
        }}
        icon={
          <Icon.Code
            size={24}
            color={ToggleFunctions.isMarkActive(editor, 'code') ? 'black' : '#ccc'}
          />
        }
      />

      <MarkButton
        action={(): void => {
          ToggleFunctions.toggleHeadingOneBlock(editor);
        }}
        icon={
          <Icon.LooksOne
            size={24}
            color={ToggleFunctions.isBlockActive(editor, 'heading-one') ? 'black' : '#ccc'}
          />
        }
      />

      <MarkButton
        action={(): void => {
          ToggleFunctions.toggleHeadingTwoBlock(editor);
        }}
        icon={
          <Icon.LooksTwo
            size={24}
            color={ToggleFunctions.isBlockActive(editor, 'heading-two') ? 'black' : '#ccc'}
          />
        }
      />

      <MarkButton
        action={(): void => {
          ToggleFunctions.toggleBulletListBlock(editor);
        }}
        icon={
          <Icon.BulletedList
            size={24}
            color={ToggleFunctions.isBlockActive(editor, 'bulleted-list') ? 'black' : '#ccc'}
          />
        }
      />

      <MarkButton
        action={(): void => {
          ToggleFunctions.toggleNumberedListBlock(editor);
        }}
        icon={
          <Icon.NumberedList
            size={24}
            color={ToggleFunctions.isBlockActive(editor, 'numbered-list') ? 'black' : '#ccc'}
          />
        }
      />

      <InsertImageButton icon={<Icon.FormatImage size={24} color={'#ccc'} />} />

      <InsertFileButton icon={<Icon.Attachment size={24} color={'#ccc'} />} />

      <InsertAudioButton icon={<Icon.Audiotrack size={24} color={'#ccc'} />} />

      <MarkButton
        action={(): void => {
          ToggleFunctions.toggleNewLine(editor);
        }}
        icon={<Icon.Plus size={24} color={'#ccc'} />}
      />
    </div>
  );
};

export default Toolbar;
