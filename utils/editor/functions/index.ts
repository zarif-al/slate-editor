import React from "react";

export function isAcceptableFormat(
	acceptableFormats: string,
	event: React.ChangeEvent<HTMLInputElement>
) {
	const formats = acceptableFormats.split(",");
	const file = event.currentTarget.files && event.currentTarget.files[0];
	if (file) {
		const splitted = file.name.split(".");
		const fileExt = "." + splitted[splitted.length - 1];
		if (formats.includes(fileExt)) {
			return true;
		}
	}
	return false;
}
