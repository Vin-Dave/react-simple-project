import React, { useEffect, useState } from "react";

const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
];

export default function App() {
	const _URL = "https://type.fit/api/quotes";
	const [step, setStep] = useState(1);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(_URL)
			.then((response) => response.json())
			.then((data) => {
				const temp = data.slice(0, 5);
				setData(temp);
			});
	}, []);

	const handleClickPrev = () => {
		if (step > 0) setStep(step - 1);
	};
	const handleClickNext = () => {
		if (step < 2) setStep(step + 1);
	};

	return (
		<>
			<ItemLi data={data} />
			<div className='steps'>
				<div className='numbers'>
					<div className={step >= 0 ? "active" : ""}>1</div>
					<div className={step >= 1 ? "active" : ""}>2</div>
					<div className={step >= 2 ? "active" : ""}>3</div>
				</div>

				<p className='message'>{messages[step]}</p>

				<div className='buttons'>
					<button
						onClick={handleClickPrev}
						style={{ backgroundColor: "#7950f0", color: "#fff" }}>
						Prev
					</button>
					<button
						onClick={handleClickNext}
						style={{ backgroundColor: "#7950f0", color: "#fff" }}>
						Next
					</button>
				</div>
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
