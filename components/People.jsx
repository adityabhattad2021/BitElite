import Image from 'next/image'


const people = [
	{
		name: "Sudharson",
		role: "Frontend Developer",
		url: "https://github.com/SudhanPlayz",
		img: "https://avatars.githubusercontent.com/u/55418697",
	},
	{
		name: "Aditya Bhattad",
		role: "Frontend Developer",
		url: "https://github.com/adityabhattad2021",
		img: "https://avatars.githubusercontent.com/u/93488388",
	},
	{
		name: "Mallikarjun Reddy",
		role: "Solidity Developer",
		url: "https://github.com/rummuer",
		img: "https://avatars.githubusercontent.com/u/25072266",
	},
	{
		name: "Jithin KS",
		role: "Backend Developer",
		url: "https://github.com/JithinKS97",
		img: "https://avatars.githubusercontent.com/u/19987520",
	},
	{
		name: "Navil Rodrigues",
		role: "Backend Developer",
		url: "https://github.com/rodriguesnavil",
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
					<div className="user" onClick={() => openURL(person.url)} key={person.url}>
						<Image src={person.img} alt="user" width={30} height={30} />
						<h3>{person.name}</h3>
						<p>{person.role}</p>
					</div>
				))}
			</div>
		</section>
	);
}
