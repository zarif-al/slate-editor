import React, { useState } from 'react';
import { RenderProps, IFrameElement } from '@/utils/editor/types';
import { Icon } from '@/components/_icons';
import { useSlate, ReactEditor, useSelected, useFocused, useReadOnly } from 'slate-react';
import { Transforms, Element } from 'slate';
import { ResizableBox, ResizeCallbackData } from 'react-resizable';

const IframeRender = (props: RenderProps): JSX.Element => {
  const element = props.element as IFrameElement;
  const editor = useSlate();

  const path = ReactEditor.findPath(editor, element);
  const [iframeSize, setIframeSize] = useState(element.size);
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
    setIframeSize(data.size);
  };

  return (
    <div
      {...props.attributes}
      contentEditable={false}
      style={{
        margin: '16px 0',
        cursor: 'pointer',
      }}
    >
      {/* The Only way to select and iFrame for now, is to put children above and below the iframe container div */}
      {props.children}
      <div
        style={{
          display: 'flex',
          justifyContent: element.align ? element.align : 'left',
          width: '100%',
        }}
      >
        <div
          style={{
            position: 'relative',
            boxShadow: selected && focused ? '0 0 0 3px #B4D5FF' : 'none',
          }}
        >
          <ResizableBox
            width={iframeSize.width}
            height={iframeSize.height}
            lockAspectRatio={true}
            minConstraints={[100, 100]}
            maxConstraints={[700, 350]}
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
            <iframe
              loading="lazy"
              src={element.url as string}
              style={{
                width: '100%',
                height: '100%',
                border: 0,
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={false}
            ></iframe>
          </ResizableBox>
          {!readOnly && (
            <span
              onMouseDown={(): void => Transforms.removeNodes(editor, { at: path })}
              style={{
                display: 'block',
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
      {props.children}
    </div>
  );
};

export default IframeRender;
