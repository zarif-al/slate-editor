import React from "react";
import { RenderProps } from "utils/types";
const HeadingOne = (props: RenderProps) => {
	return <h1 {...props.attributes}> {props.children}</h1>;
};

export default HeadingOne;
