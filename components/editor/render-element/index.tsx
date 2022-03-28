import React, { Attributes, FC, Fragment, ReactChildren } from "react";
import ImageElement from "components/slate/render-element/image";
import CodeElement from "components/slate/render-element/code";
import DefaultElement from "components/slate/render-element/default";
import { RenderProps } from "utils/types";

const Element = (props: RenderProps) => {
	switch (props.element.type) {
		case "code":
			return <CodeElement {...props} />;
		case "image":
			return <ImageElement {...props} />;
		default:
			return <DefaultElement {...props} />;
	}
};

export default Element;
