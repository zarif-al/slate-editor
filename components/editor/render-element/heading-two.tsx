import React from "react";
import { RenderProps } from "utils/types";
const HeadingTwo = (props: RenderProps) => {
	return <h2 {...props.attributes}>{props.children}</h2>;
};

export default HeadingTwo;
