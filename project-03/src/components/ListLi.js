import React from "react";

const ListLi = (props) => {
	console.log(props.users);
	const userList = props.users.map((user) => (
		<div key={user.login.md5}>
			<h2>{`User Name: ${user.name.first}  ${user.name.last}`}</h2>
			<span>{`Describe: ${user.location.street.name}`}</span>
		</div>
	));
	return <ul>{userList}</ul>;
};

export default ListLi;
