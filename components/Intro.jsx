export default function Intro() {
	return (
		<section
			style={{
				background: "url(/1.png) no-repeat center center",
				backgroundSize: "cover",
				height: "100vh",
				width: "100vw",
			}}
			className="landing flex-col align-middle justify-center items-center font-sans content-center p-20 pt-36"
		>
			<div className="mt-20 ml-20">
				<h2 className="leading-9">Team</h2>
				<h1 className="leading-2">BitElite</h1>
				<p className="leading-2 ml-2">PRESENTS</p>
			</div>
		</section>
	);
}
