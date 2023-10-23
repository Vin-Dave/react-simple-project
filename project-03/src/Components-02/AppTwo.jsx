import { Component } from "react";
import ListItems from "./ListItems";

const data = {
	users: [
		{
			id: 1,
			age: 19,
			name: "Tomasz",
			sex: "male",
		},
		{
			id: 2,
			age: 19,
			name: "Tomasz",
			sex: "male",
		},
		{
			id: 3,
			age: 19,
			name: "Tomasz",
			sex: "male",
		},
		{
			id: 4,
			age: 24,
			name: "Klaudia",
			sex: "feame",
		},
	],
};

export default class AppTwo extends Component {
	state = {
		data: data,
	};

	render() {
        
		const UserMapList = this.state.data.users.map((user) => (
			<ListItems key={user.id} name={user.name} sex={user.sex} age={user.age} />
		));
		return <ul>{UserMapList}</ul>;
	}
}
