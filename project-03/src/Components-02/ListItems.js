export default function ListItems({ name, age, sex }) {
	return (
		<li>
			<h4>{`Imię ${name}`}</h4>
			<h5>{`Wiek  ${age}`}</h5>
			<h6>{`Płeć  ${sex}`}</h6>
		</li>
	);
}
