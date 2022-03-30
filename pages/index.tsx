import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Editor from "components/editor";
import { CustomText, CustomElement } from "utils/types";
import { Descendant } from "slate";

const Home: NextPage = () => {
	const initialValue: CustomElement[] = [
		{
			type: "paragraph",
			children: [{ text: "A line of text in a paragraph." }],
		},
	];

	//Initialvalue State
	const [value, setValue] = useState<Descendant[]>(initialValue);

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				padding: "0 2rem",
			}}
		>
			<Head>
				<title>Editors Trial</title>
				<meta name="description" content="Trying out different editors" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div
				style={{
					width: "800px",
					border: "2px solid black",
					marginTop: "100px",
					padding: "2rem",
				}}
			>
				<Editor initialValue={value} setValue={setValue} />
			</div>
		</div>
	);
};

export default Home;
