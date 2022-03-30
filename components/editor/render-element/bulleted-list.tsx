import React from 'react';
import { RenderProps } from '@/utils/editor/types';

const BulletedList = (props: RenderProps): JSX.Element => {
  return <ul {...props.attributes}>{props.children}</ul>;
};

export default BulletedList;
