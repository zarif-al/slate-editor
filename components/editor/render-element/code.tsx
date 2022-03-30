import React from "react";
import { RenderProps } from "utils/editor/types";

const CodeElement = (props: RenderProps) => {
	return (
		<pre {...props.attributes}>
			<code>{props.children}</code>
		</pre>
	);
};

export default CodeElement;
