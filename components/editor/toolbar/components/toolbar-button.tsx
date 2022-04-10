import React from 'react';

interface MarkDownButtonTypes {
  action: () => void;
  icon: JSX.Element;
  tooltip: string;
}

const ToolbarButton = ({ icon, action, tooltip }: MarkDownButtonTypes): JSX.Element => {
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
      title={tooltip}
    >
      {icon}
    </span>
  );
};

export default ToolbarButton;
