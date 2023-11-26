import { useState } from "react";

const questions = [
	{
		id: 3457,
		question: "What language is React based on?",
		answer: "JavaScript",
	},
	{
		id: 7336,
		question: "What are the building blocks of React apps?",
		answer: "Components",
	},
	{
		id: 8832,
		question: "What's the name of the syntax we use to describe a UI in React?",
		answer: "JSX",
	},
	{
		id: 1297,
		question: "How to pass data from parent to child components?",
		answer: "Props",
	},
	{
		id: 9103,
		question: "How to give components memory?",
		answer: "useState hook",
	},
	{
		id: 2002,
		question:
			"What do we call an input element that is completely synchronised with state?",
		answer: "Controlled element",
	},
];

export default function Appt() {
	return <FlashCard />;
}

const FlashCard = () => {
	const [isActive, setIsActive] = useState();

	const handleToggleCheck = (id) => {
		setIsActive(id !== setIsActive ? id : null);
	};

	return (
		<ul className='ulTestList '>
			{questions.map((item) => (
				<li
					onClick={() => handleToggleCheck(item.id)}
					key={item.id}
					className={isActive === item.id ? "isActive" : ""}>
					{isActive === item.id ? item.answer : item.question}
					{/* {isActive === item.id ? (className = "active") : null} */}
				</li>
			))}
		</ul>
	);
};
