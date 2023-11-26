export default function Button({ click, type, title }) {
	return (
		<button
			onClick={() => click(type)}
			style={{ backgroundColor: "#7950f0", color: "#fff" }}>
			{title}
		</button>
	);
}
