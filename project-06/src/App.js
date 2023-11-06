import "./App.css";
import faqs from "./_DATA/test-data";
import Accordion from "./component/Accordion";

export default function App() {
	return (
		<div>
			<Accordion data={faqs} />
		</div>
	);
}
