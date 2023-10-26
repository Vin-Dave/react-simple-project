export default function TopPanel({ step, value, click }) {
	let i = 1;
	return (
		<>
			<div onClick={click} className={step >= value.id ? "active" : ""}>
				{value.id}
			</div>
		</>
	);
}
