import React from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { Transforms } from 'slate';
import { useSlate, ReactEditor, useReadOnly } from 'slate-react';
import Element from '@/components/editor/render-element';
import { RenderProps } from '@/utils/editor/types';
import { Icon } from '@/components/_icons';
import { ElementEnums } from '@/utils/editor/enums';
interface ItemType {
  type: string;
  path: number[];
}

interface UseDragCollectReturnType {
  isDragging: boolean;
}

interface UseDropCollectReturnType {
  isOver: boolean;
}

interface UseDropHoverReturnType {
  isOver: boolean;
}

const DndBlock = (props: RenderProps): JSX.Element => {
  const editor = useSlate();
  const element = props.element;
  const path = ReactEditor.findPath(editor, element);

  const readOnly = useReadOnly();

  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: 'container',
      item: {
        type: 'container',
        path: path,
      },
      canDrag: (): boolean => {
        return !readOnly;
      },
      collect: (monitor): UseDragCollectReturnType => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [path],
  );

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: 'container',
      drop: (item: ItemType): void => {
        Transforms.moveNodes(editor, { at: item.path, to: path });
      },
      collect: (monitor): UseDropCollectReturnType => ({
        isOver: !!monitor.isOver(),
      }),
      hover: (item, monitor): UseDropHoverReturnType => ({
        isOver: !!monitor.isOver(),
      }),
    }),
    [path],
  );

  //	Disable drag properties in list-items
  if (props.element.type === ElementEnums.ListItem || props.element.type === ElementEnums.Link) {
    return <Element {...props} />;
  }

  return (
    <div ref={drop}>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          margin: '16px 0px',
        }}
      >
        {!readOnly && (
          <div ref={drag} contentEditable={false} style={{ cursor: 'grab', userSelect: 'none' }}>
            <Icon.Drag size={14} color={'grey'} />
          </div>
        )}

        <div
          ref={preview}
          style={{
            color: isDragging ? 'grey' : 'black',
            backgroundColor: isOver ? '#ccc' : 'transparent',
            borderRadius: isOver ? '6px' : '0px',
            width: '100%',
          }}
        >
          <Element {...props} />
        </div>
      </div>
    </div>
  );
};

export default DndBlock;
