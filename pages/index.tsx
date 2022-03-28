import type { NextPage } from "next";
import Head from "next/head";
import Editor from "@/components/editor";
const Home: NextPage = () => {
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
				<Editor />
			</div>
		</div>
	);
};

export default Home;
