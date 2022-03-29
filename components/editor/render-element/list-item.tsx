import React from "react";
import { RenderProps } from "@/utils/types";

const ListItem = (props: RenderProps) => {
	//List Item is kept inside Bulleted or Numbered List Element
	return <li {...props.attributes}>{props.children}</li>;
};

export default ListItem;
