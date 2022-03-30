import React from "react";
import { RenderProps } from "utils/editor/types";

const DefaultElement = (props: RenderProps) => {
	return <p {...props.attributes}>{props.children}</p>;
};

export default DefaultElement;
