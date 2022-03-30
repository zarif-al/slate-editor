import React from "react";
import { RenderProps } from "@/utils/editor/types";
const HeadingOne = (props: RenderProps): JSX.Element => {
	return <h1 {...props.attributes}>{props.children}</h1>;
};

export default HeadingOne;
