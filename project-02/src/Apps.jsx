import React from "react";

export default class Apps extends React.Component {
	state = {
		free: 5,
		select: 0,
	};

	addHandleClick = () => {
		this.setState({
			select: this.state.select + 1,
		});
	};

	removeHandleClick = () => {
		this.setState({
			select: this.state.select - 1,
		});
	};
	handleBuyClick = () => {
		this.setState({
			free: this.state.free - this.state.select,
			select: 0,
		});
	};
	render() {
		return (
			<>
				<button
					disabled={this.state.select ? false : true}
					onClick={this.removeHandleClick}>
					-
				</button>
				<span>{this.state.select}</span>
				<button
					disabled={this.state.select >= this.state.free ? true : false}
					onClick={this.addHandleClick}>
					+
				</button>
				<button
					hidden={this.state.select ? false : true}
					onClick={this.handleBuyClick}>
					KUP
				</button>
			</>
		);
	}
}
