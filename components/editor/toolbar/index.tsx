import React from 'react';
import { useSlate } from 'slate-react';
import ToggleFunctions from '@/components/editor/toggle-functions';
import { Icon } from '@/components/_icons';
import {
  ToolbarButton,
  InsertImageButton,
  InsertFileButton,
  InsertAudioButton,
  InsertIframeButton,
  InsertLinkButton,
} from '@/components/editor/toolbar/components';
import { CustomElement } from '@/utils/editor/types';
import { ElementEnums } from '@/utils/editor/enums';

const Toolbar = (): JSX.Element => {
  const editor = useSlate();
  // Needed to set alignment property on the selected block of content
  const selectedBlock = editor.selection
    ? (editor.children[editor.selection.anchor.path[0]] as CustomElement)
    : undefined;

  const isAlignActive = (alignment: string): boolean => {
    if (selectedBlock) {
      return ToggleFunctions.isAlignActive(editor, selectedBlock.type, alignment);
    } else {
      return false;
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        borderBottom: '1px solid',
        width: '100%',
        borderTop: '1px solid',
        borderColor: '#EBEDFF',
        padding: '12px 0px',
        position: 'sticky',
        top: '0',
        zIndex: 999,
        backgroundColor: 'white',
      }}
    >
      <ToolbarButton
        action={(): void => {
          ToggleFunctions.toggleMark(editor, 'bold');
        }}
        icon={
          <Icon.FormatBold
            size={24}
            color={ToggleFunctions.isMarkActive(editor, 'bold') ? 'black' : '#ccc'}
          />
        }
        tooltip="Bold | CTRL + B"
      />
      <ToolbarButton
        icon={
          <Icon.FormatItalic
            size={24}
            color={ToggleFunctions.isMarkActive(editor, 'italic') ? 'black' : '#ccc'}
          />
        }
        action={(): void => {
          ToggleFunctions.toggleMark(editor, 'italic');
        }}
        tooltip="Bold | CTRL + I"
      />

      <ToolbarButton
        icon={
          <Icon.FormatUnderline
            size={24}
            color={ToggleFunctions.isMarkActive(editor, 'underline') ? 'black' : '#ccc'}
          />
        }
        action={(): void => {
          ToggleFunctions.toggleMark(editor, 'underline');
        }}
        tooltip="Bold | CTRL + U"
      />

      <ToolbarButton
        action={(): void => {
          ToggleFunctions.toggleMark(editor, 'code');
        }}
        icon={
          <Icon.Code
            size={24}
            color={ToggleFunctions.isMarkActive(editor, 'code') ? 'black' : '#ccc'}
          />
        }
        tooltip="Code"
      />

      <ToolbarButton
        action={(): void => {
          ToggleFunctions.toggleBlock(editor, ElementEnums.HeadingOne);
        }}
        icon={
          <Icon.LooksOne
            size={24}
            color={
              ToggleFunctions.isBlockActive(editor, ElementEnums.HeadingOne) ? 'black' : '#ccc'
            }
          />
        }
        tooltip="H1"
      />

      <ToolbarButton
        action={(): void => {
          ToggleFunctions.toggleBlock(editor, ElementEnums.HeadingTwo);
        }}
        icon={
          <Icon.LooksTwo
            size={24}
            color={
              ToggleFunctions.isBlockActive(editor, ElementEnums.HeadingTwo) ? 'black' : '#ccc'
            }
          />
        }
        tooltip="H2"
      />

      <ToolbarButton
        action={(): void => {
          ToggleFunctions.toggleBlock(editor, ElementEnums.BulletedList);
        }}
        icon={
          <Icon.BulletedList
            size={24}
            color={
              ToggleFunctions.isBlockActive(editor, ElementEnums.BulletedList) ? 'black' : '#ccc'
            }
          />
        }
        tooltip="Unordered Bulletlist"
      />

      <ToolbarButton
        action={(): void => {
          ToggleFunctions.toggleBlock(editor, ElementEnums.NumberedList);
        }}
        icon={
          <Icon.NumberedList
            size={24}
            color={
              ToggleFunctions.isBlockActive(editor, ElementEnums.NumberedList) ? 'black' : '#ccc'
            }
          />
        }
        tooltip="Numbered Bulletlist"
      />

      <ToolbarButton
        action={(): void => {
          if (selectedBlock) {
            ToggleFunctions.toggleAlignment(editor, selectedBlock.type, 'left');
          }
        }}
        icon={<Icon.AlignLeft size={24} color={isAlignActive('left') ? 'black' : '#ccc'} />}
        tooltip="Align Left"
      />

      <ToolbarButton
        action={(): void => {
          if (selectedBlock) {
            ToggleFunctions.toggleAlignment(editor, selectedBlock.type, 'center');
          }
        }}
        icon={<Icon.AlignCenter size={24} color={isAlignActive('center') ? 'black' : '#ccc'} />}
        tooltip="Align Center"
      />

      <ToolbarButton
        action={(): void => {
          if (selectedBlock) {
            ToggleFunctions.toggleAlignment(editor, selectedBlock.type, 'right');
          }
        }}
        icon={<Icon.AlignRight size={24} color={isAlignActive('right') ? 'black' : '#ccc'} />}
        tooltip="Align Right"
      />

      <ToolbarButton
        action={(): void => {
          if (selectedBlock) {
            ToggleFunctions.toggleAlignment(editor, selectedBlock.type, 'justify');
          }
        }}
        icon={<Icon.AlignJustify size={24} color={isAlignActive('justify') ? 'black' : '#ccc'} />}
        tooltip="Align Justify"
      />

      <InsertImageButton
        icon={<Icon.FormatImage size={24} color={'#ccc'} />}
        tooltip="Insert Image"
      />

      <InsertFileButton icon={<Icon.Attachment size={24} color={'#ccc'} />} tooltip="Insert File" />

      <InsertAudioButton
        icon={<Icon.Audiotrack size={24} color={'#ccc'} />}
        tooltip="Insert Audio"
      />

      <InsertIframeButton icon={<Icon.Iframe size={24} color={'#ccc'} />} tooltip="Insert Iframe" />

      <InsertLinkButton
        icon={
          <Icon.Link size={24} color={ToggleFunctions.isLinkActive(editor) ? 'black' : '#ccc'} />
        }
        tooltip="Insert Link"
      />

      <ToolbarButton
        action={(): void => {
          ToggleFunctions.toggleNewLine(editor);
        }}
        icon={<Icon.Plus size={24} color={'#ccc'} />}
        tooltip="New Line | CTRL + ENTER"
      />

      <ToolbarButton
        action={(): void => {
          ToggleFunctions.toggleRemoveLine(editor);
        }}
        icon={<Icon.Minus size={24} color={'#ccc'} />}
        tooltip="Remove Line | CTRL + Backspace"
      />
    </div>
  );
};

export default Toolbar;
