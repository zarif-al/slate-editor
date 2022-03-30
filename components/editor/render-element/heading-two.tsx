import React from "react";
import { RenderProps } from "utils/editor/types";
const HeadingTwo = (props: RenderProps) => {
	return <h2 {...props.attributes}>{props.children}</h2>;
};

export default HeadingTwo;
