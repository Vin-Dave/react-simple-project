import React from "react";

const MessagePositive = () => {
	return (
		<>
			<p>Masz uprawnienia</p>
			<p>.</p>
		</>
	);
};
const MessageNegative = () => {
	return (
		<>
			<p>Nie masz uprawnien</p>
			<p>.</p>
		</>
	);
};

export default class App extends React.Component {
	state = {
		aprove: false,
		formSubmitted: false,
	};

	selectHandleClick = () => {
		this.setState({
			aprove: !this.state.aprove,
			formSubmitted: false,
		});
	};
	setMessage = () => {
		if (this.state.formSubmitted) {
			return this.state.aprove ? <MessagePositive /> : <MessageNegative />;
		}
	};

	handleSubmit = (e) => {
		e.preventDefault();
		if (!this.state.formSubmitted) {
			this.setState({
				formSubmitted: true,
			});
		}
	};
	render() {
		return (
			<>
				<h1>Title</h1>
				<form onSubmit={this.handleSubmit}>
					<input
						onChange={this.selectHandleClick}
						checked={this.state.aprove}
						type='checkbox'
						id='age'></input>
					<label htmlFor='age'>Zaznacz</label>
					<br />
					<button>Check</button>
				</form>

				{this.setMessage()}
			</>
		);
	}
}
