import React from 'react';

interface MarkDownButtonTypes {
  action: () => void;
  icon: JSX.Element;
}

const ToolbarButton = ({ icon, action }: MarkDownButtonTypes): JSX.Element => {
  return (
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
      }}
      onMouseDown={(e): void => {
        e.preventDefault();
        action();
      }}
    >
      {icon}
    </span>
  );
};

export default ToolbarButton;
