export default function People() {
	const openURL = (url) => {
		window.open(url, "_blank");
	}

	return (
		<section
			style={{
				background: "url(/4.png) no-repeat center center",
				backgroundSize: "cover",
				height: "100vh",
				width: "100vw",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
			}}
			className="people"
		>
			<h1>Who's building it?</h1>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "row",
					flexWrap: "wrap",
				}}
			>
				<div className="user" onClick={() => openURL("https://github.com/SudhanPlayz")}>
					<img src="https://avatars.githubusercontent.com/u/55418697" alt="user" />
					<h3>Sudhan</h3>
					<p>Frontend Developer</p>
				</div>
				<div className="user">
					<img src="/favicon.ico" alt="user" />
					<h3>John Doe</h3>
					<p>CEO</p>
				</div>
				<div className="user">
					<img src="/favicon.ico" alt="user" />
					<h3>John Doe</h3>
					<p>CEO</p>
				</div>
				<div className="user">
					<img src="/favicon.ico" alt="user" />
					<h3>John Doe</h3>
					<p>CEO</p>
				</div>
				<div className="user">
					<img src="/favicon.ico" alt="user" />
					<h3>John Doe</h3>
					<p>CEO</p>
				</div>
			</div>
		</section>
	);
}
