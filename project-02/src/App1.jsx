import React from "react";

const data = [
	{ id: 1, title: "Kwota w euro", value: 2.4 },
	{ id: 2, title: "Kwota w dolarach", value: 2 },
	{ id: 3, title: "Kwota w funtach", value: 2.5 },
];

export default class App extends React.Component {
	state = {
		amount: 0,
	};

	data = [
		{ id: 1, title: "Kwota w euro", value: 2.4 },
		{ id: 2, title: "Kwota w dolarach", value: 2 },
		{ id: 3, title: "Kwota w funtach", value: 2.5 },
	];

	handleNewValue = (e) => {
		this.setState({
			amount: e.target.value,
		});
	};

	render() {
		const addNewComponent = this.data.map((el) => (
			<Money
				key={el.id}
				title={el.title}
				value={el.value}
				amount={this.state.amount}
			/>
		));
		return (
			<>
				<input
					onChange={this.handleNewValue}
					value={this.state.amount}
					type='number'></input>
				{addNewComponent}
				{/* <Money value={this.state.amount} title='Kwota w Euro' />
				<Money value={this.state.amount} title='Kwota w Dolarach' /> */}
			</>
		);
	}
}

const Money = (props) => {
	const finalValue = (props.amount / props.value).toFixed(2);
	return (
		<div>
			<p>
				{props.title} <span>{finalValue >= 0 ? finalValue : ""} </span>
			</p>
		</div>
	);
};
