import React from "react";
import { RenderProps } from "@/utils/editor/types";

const NumberedList = (props: RenderProps) => {
	return <ol {...props.attributes}>{props.children}</ol>;
};

export default NumberedList;
