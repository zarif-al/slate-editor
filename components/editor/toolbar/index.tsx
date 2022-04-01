import React from 'react';
import { useSlate, useSelected } from 'slate-react';
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

  const isAlignActive = (alignment: string) => {
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
      />

      <ToolbarButton
        action={(): void => {
          if (selectedBlock) {
            ToggleFunctions.toggleAlignment(editor, selectedBlock.type, 'left');
          }
        }}
        icon={<Icon.AlignLeft size={24} color={isAlignActive('left') ? 'black' : '#ccc'} />}
      />

      <ToolbarButton
        action={(): void => {
          if (selectedBlock) {
            ToggleFunctions.toggleAlignment(editor, selectedBlock.type, 'center');
          }
        }}
        icon={<Icon.AlignCenter size={24} color={isAlignActive('center') ? 'black' : '#ccc'} />}
      />

      <ToolbarButton
        action={(): void => {
          if (selectedBlock) {
            ToggleFunctions.toggleAlignment(editor, selectedBlock.type, 'right');
          }
        }}
        icon={<Icon.AlignRight size={24} color={isAlignActive('right') ? 'black' : '#ccc'} />}
      />

      <ToolbarButton
        action={(): void => {
          if (selectedBlock) {
            ToggleFunctions.toggleAlignment(editor, selectedBlock.type, 'justify');
          }
        }}
        icon={<Icon.AlignJustify size={24} color={isAlignActive('justify') ? 'black' : '#ccc'} />}
      />

      <InsertImageButton icon={<Icon.FormatImage size={24} color={'#ccc'} />} />

      <InsertFileButton icon={<Icon.Attachment size={24} color={'#ccc'} />} />

      <InsertAudioButton icon={<Icon.Audiotrack size={24} color={'#ccc'} />} />

      <InsertIframeButton icon={<Icon.Iframe size={24} color={'#ccc'} />} />

      <InsertLinkButton
        icon={
          <Icon.Link size={24} color={ToggleFunctions.isLinkActive(editor) ? 'black' : '#ccc'} />
        }
      />

      <ToolbarButton
        action={(): void => {
          ToggleFunctions.toggleNewLine(editor);
        }}
        icon={<Icon.Plus size={24} color={'#ccc'} />}
      />
    </div>
  );
};

export default Toolbar;
