import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '@/components/_icons';
import { useSlate, ReactEditor, useSelected, useFocused, useReadOnly } from 'slate-react';
import { RenderProps, ImageElement } from '@/utils/editor/types';
import { Transforms, Element } from 'slate';
import { ResizableBox, ResizeCallbackData } from 'react-resizable';

const ImageRenderer = (props: RenderProps): JSX.Element => {
  const editor = useSlate();

  //	Cast element as ImageElement
  const element = props.element as ImageElement;
  //	The path is simply the index of the element in the children array
  const path = ReactEditor.findPath(editor, element);
  const [imageSize, setImageSize] = useState(element.size);
  const [aspectRatio, setAspectRatio] = useState(1);
  const selected = useSelected();
  const focused = useFocused();
  const readOnly = useReadOnly();

  const onResizeStop = (e: React.SyntheticEvent, data: ResizeCallbackData): void => {
    Transforms.setNodes(
      editor,
      { size: data.size },
      {
        match: (n) => Element.isElement(n) && 'url' in n && n.url === element.url, //	Using TypeGuard
      },
    );
    setImageSize(data.size);
  };

  return (
    <div
      {...props.attributes}
      contentEditable={false}
      style={{
        margin: '16px 0',
        width: '100%',
        display: 'flex',
        justifyContent: element.align ? element.align : 'left',
      }}
    >
      {props.children}
      <div
        style={{
          position: 'relative',
          boxShadow: selected && focused ? '0 0 0 3px #B4D5FF' : 'none',
          width: 'fit-content',
        }}
      >
        <ResizableBox
          width={imageSize.width}
          height={imageSize.height}
          lockAspectRatio={true}
          minConstraints={[100, 100]}
          maxConstraints={[648, 648 / aspectRatio]}
          resizeHandles={['w', 'e']}
          onResizeStop={onResizeStop}
          handle={
            readOnly ? (
              <div />
            ) : (
              <span className="react-resizable-handle react-resizable-handle-e" />
            )
          }
        >
          <Image
            src={element.url as string}
            alt="Image"
            layout="fill"
            objectFit="contain"
            onLoad={({ target }): void => {
              const { naturalWidth, naturalHeight } = target as HTMLImageElement;
              const calculatedAspectRatio = naturalWidth / naturalHeight;
              const height = imageSize.width / calculatedAspectRatio;
              setAspectRatio(calculatedAspectRatio);
              setImageSize({ height: height, width: imageSize.width });
            }}
          />
        </ResizableBox>
        {!readOnly && (
          <span
            onMouseDown={(): void => Transforms.removeNodes(editor, { at: path })}
            style={{
              display: selected && focused ? 'block' : 'none',
              position: 'absolute',
              top: '0.5em',
              right: '0.5em',
              backgroundColor: 'white',
              cursor: 'pointer',
              borderRadius: '5px',
              border: '0.5px solid black',
            }}
          >
            <Icon.Trash size={24} />
          </span>
        )}
      </div>
    </div>
  );
};

export default ImageRenderer;
