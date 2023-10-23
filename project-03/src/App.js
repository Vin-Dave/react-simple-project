import React, { Component } from "react";
import ListLi from "./components/ListLi";
import Button from "./components/Button";
const API = "https://randomuser.me/api/?results=5";
export default class App extends Component {
	state = {
		data: null,
	};
	handleClickRender = () => {
		fetch(API).then((response) =>
			response
				.json()
				.then((data) => {
					this.setState({
						data: data.results,
					});
				})
				.catch((e) => console.log(e))
		);
	};
	

	render() {
		return (
			<>
				<Button click={this.handleClickRender} />
				{this.state.data ? <ListLi users={this.state.data} /> : null}
			</>
		);
	}
}
