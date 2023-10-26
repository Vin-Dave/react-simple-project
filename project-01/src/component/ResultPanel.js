export default function Resultpanel({ step, data }) {
	return (
		<p className='message'>
			{data[step - 1] ? data[step - 1].value : "Brak wiadomości"}
		</p>
	);
}
