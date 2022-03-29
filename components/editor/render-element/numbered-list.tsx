import React from "react";
import { RenderProps } from "@/utils/types";

const NumberedList = (props: RenderProps) => {
	return <ol {...props.attributes}>{props.children}</ol>;
};

export default NumberedList;
