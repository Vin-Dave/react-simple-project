import React, { useEffect, useState } from "react";
import Button from "./component/Button";
import TopPanel from "./component/TopPanel";
import ResultPanel from "./component/ResultPanel";
import messages from "./component/_MESSAGES";

export default function App() {
	const _URL = "https://type.fit/api/quotes";
	const [step, setStep] = useState(1);
	const [data, setData] = useState([
		{ author: "Autor 1", text: "Tekst cytatu 1" },
	]);

	useEffect(() => {
		fetch(_URL)
			.then((response) => response.json())
			.then((data) => {
				const shuffledData = data.sort(() => 0.5 - Math.random());
				const selectedData = shuffledData.slice(0, 3);
				setData(selectedData);
				console.log(selectedData);
			});
	}, [step]);

	const handleClick = (type) => {
		if (type === "prev") {
			if (step > 0) setStep(step - 1);
		} else if (type === "next") {
			if (step < 3) setStep(step + 1);
		}
	};
	console.log(step);

	const handleChangeStep = (id) => {
		setStep(id);
	};
	return (
		<>
			<div className='steps'>
				<div className='numbers'>
					{messages.map((element) => (
						<TopPanel
							step={step}
							key={element.id}
							value={element}
							click={() => handleChangeStep(element.id)}
						/>
					))}
				</div>
				<ResultPanel step={step} data={messages} />

				<div className='buttons'>
					<Button click={handleClick} title={"Prev"} type='prev' />
					<Button click={handleClick} title={"Next"} type='next' />
				</div>
				<ItemLi data={data} />
			</div>
		</>
	);
}

const ItemLi = ({ data }) => {
	return (
		<ul>
			{data.map((element) => (
				<li key={element.text}>
					<h2>{element.author}</h2>
					<span>{element.text}</span>
				</li>
			))}
		</ul>
	);

	console.log(data);
};
