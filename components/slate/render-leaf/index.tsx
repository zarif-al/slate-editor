import React from "react";
import { RenderLeaf } from "utils/types";
const Leaf = (props: RenderLeaf) => {
	return (
		<span
			{...props.attributes}
			style={{ fontWeight: props.leaf.bold ? "bold" : "normal" }}
		>
			{props.children}
		</span>
	);
};

export default Leaf;
