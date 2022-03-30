import React, { useState } from 'react';
import { RenderProps, IFrameElement } from '@/utils/editor/types';
import { Icon } from '@/components/_icons';
import { useSlate, ReactEditor, useSelected, useFocused } from 'slate-react';
import { Transforms, Element } from 'slate';
import { ResizableBox, ResizeCallbackData } from 'react-resizable';

const IframeRender = (props: RenderProps): JSX.Element => {
  const element = props.element as IFrameElement;
  const editor = useSlate();

  const path = ReactEditor.findPath(editor, element);
  const [iframeSize, setIframeSize] = useState(element.size);
  const selected = useSelected();
  const focused = useFocused();

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
    <div {...props.attributes} contentEditable={false}>
      {props.children}
      <span
        style={{
          position: 'relative',
          maxWidth: '100%',
        }}
        contentEditable={false}
      >
        <ResizableBox
          width={iframeSize.width}
          height={iframeSize.height}
          lockAspectRatio={true}
          minConstraints={[100, 100]}
          maxConstraints={[700, 350]}
          resizeHandles={['w', 'e']}
          onResizeStop={onResizeStop}
          handle={<span className="react-resizable-handle react-resizable-handle-e" />}
        >
          <iframe
            loading="lazy"
            src={element.url as string}
            style={{
              width: '100%',
              height: '100%',
              border: 0,
            }}
          ></iframe>
        </ResizableBox>
      </span>
    </div>
  );
};

export default IframeRender;
