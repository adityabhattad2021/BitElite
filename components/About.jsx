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
				className="info flex-col align-middle justify-center items-center font-sans content-center p-10 pt-36"
				style={{
					background: "url(/3.png) no-repeat center center",
					backgroundSize: "cover",
					height: "100vh",
					width: "100vw",
				}}
			>
				<h1>What it does?</h1>
				<p>The pricing model of web2 storage providers like Dropbox or Google Drive charges users per GB. In a scenario where you and a friend both subscribe to Dropbox and store the same file on your respective accounts, you would both be charged by Dropbox for storing the file. Although Filecoin is a web3 solution, it still follows the pricing model of web2 storage providers.
<br/>
<br/>
However, with our solution, if multiple users are storing the same file, they can share the cost of storing it. This means that there will only be one copy of the file in the network (excluding fault-tolerance requirements). This can lead to significant cost savings for users and increased security and reliability.</p>
			</section>
		</>
	);
}
