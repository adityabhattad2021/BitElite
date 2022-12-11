export default function About() {
	return (
		<>
			<section
				className="about flex-col align-middle justify-center items-center font-sans content-center p-20 pt-36"
				style={{
					background: "url(/2.png) no-repeat center center",
					backgroundSize: "cover",
					height: "100vh",
					width: "100vw",
				}}
			>
				<div className="ml-14">
					<h1 className="drop-shadow-2xl shadow-white">Deduplication Layer</h1>
					<div className="flex flex-row">
						<p className="mr-4">on</p>
						<h2>Filecoin Virtual Machine</h2>
					</div>
				</div>
			</section>
			<section
				className="flex-col align-middle justify-center items-center font-sans content-center p-20 pt-36"
				style={{
					background: "url(/3.png) no-repeat center center",
					backgroundSize: "cover",
					height: "100vh",
					width: "100vw",
				}}
			></section>
		</>
	);
}
