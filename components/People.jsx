import Image from 'next/image'

const people = [
	{
		name: "Sudharson",
		role: "Frontend Developer",
		github: "https://github.com/SudhanPlayz",
		img: "https://avatars.githubusercontent.com/u/55418697",
		linkedin: "https://www.linkedin.com/in/itzsudhan"
	},
	{
		name: "Aditya Bhattad",
		role: "Frontend Developer",
		github: "https://github.com/adityabhattad2021",
		img: "https://avatars.githubusercontent.com/u/93488388",
	},
	{
		name: "Mallikarjun Reddy",
		role: "Solidity Developer",
		github: "https://github.com/rummuer",
		img: "https://avatars.githubusercontent.com/u/25072266",
	},
	{
		name: "Jithin KS",
		role: "Backend Developer",
		github: "https://github.com/JithinKS97",
		img: "https://avatars.githubusercontent.com/u/19987520",
	},
	{
		name: "Navil Rodrigues",
		role: "Backend Developer",
		github: "https://github.com/rodriguesnavil",
		img: "https://avatars.githubusercontent.com/u/32533176",
	},
]

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
			<h1>Who&apos;s building it?</h1>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					flexDirection: "row",
					flexWrap: "wrap",
				}}
			>
				{people.map((person) => (
					<div className="user" onClick={() => openURL(person.url)} key={person.name}>
						<Image src={person.img} alt="user" width={100} height={100} />
						<h3>{person.name}</h3>
						<p>{person.role}</p>
						<div className="social">
							{person.github && <div className="github" onClick={() => openURL(person.github)}>
								<svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
									<path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
								</svg>
							</div>}
							{person.linkedin && <div className="linkedin" onClick={() => openURL(person.linkedin)}>
								<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72">
									<g fill="none" fill-rule="evenodd"><rect width="72" height="72" fill="#117EB8" rx="4" /><path fill="#FFF" d="M13.139 27.848h9.623V58.81h-9.623V27.848zm4.813-15.391c3.077 0 5.577 2.5 5.577 5.577 0 3.08-2.5 5.581-5.577 5.581a5.58 5.58 0 1 1 0-11.158zm10.846 15.39h9.23v4.231h.128c1.285-2.434 4.424-5 9.105-5 9.744 0 11.544 6.413 11.544 14.75V58.81h-9.617V43.753c0-3.59-.066-8.209-5-8.209-5.007 0-5.776 3.911-5.776 7.95V58.81h-9.615V27.848z" /></g>
								</svg>
							</div>}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
