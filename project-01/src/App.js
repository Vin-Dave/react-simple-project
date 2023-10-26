import React, { useEffect, useState } from "react";
import Button from "./component/Button";
import TopPanel from "./component/TopPanel";
import ResultPanel from "./component/ResultPanel";
import messages from "./component/_MESSAGES";
import ItemLi from "./component/ItemLi";
export default function App() {
	const _URL = "https://type.fit/api/quotes";
	const [step, setStep] = useState(1);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(_URL)
			.then((response) => response.json())

			.then((data) => {
				if (data.length > 0) {
					const shuffledData = data.sort(() => 0.5 - Math.random());
					const selectedData = shuffledData.slice(0, 3);
					setData(selectedData);
					console.log(selectedData);
				}
			})
			.catch((e) => console.log(e));
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

	const checkData =
		data.length > 0 ? (
			<ItemLi data={data} />
		) : (
			<p className='message'>Brak połaczenia z API</p>
		);
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
				{checkData}
			</div>
		</>
	);
}
