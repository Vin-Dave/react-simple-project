import { useState, useEffect } from "react";
import "./App.css";
import Modal from "./modals/Modals";
import Loading from "./Loading/Loading";
export default function App() {
	const [user, setUser] = useState({});
	const [username, setUsername] = useState("");
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/1")
			.then((res) => res.json())
			.then((res) => {
				setUser(res);
				setIsLoading(false);
			})
			.catch((e) => {
				setError(e.message);
				setTimeout(() => {
					setError(null);
				}, 2000);
			});
	}, []);

	function handleSubmit(e) {
		e.preventDefault();

		fetch("https://jsonplaceholder.typicode.com/users/1", {
			method: "PATCH",
			body: JSON.stringify({
				username,
			}),
			headers: {
				"Content-type": "application/json; charset=UTF-8",
			},
		})
			.then((res) => {
				if (res.ok) return res.json();
				else {
					throw Error("Błąd");
				}
			})
			.then((user) => {
				setUser(user);
				setUsername("");
			})
			.catch((e) => {
				setError(e.message);
				setTimeout(() => {
					setError(null);
				}, 2000);
			});
	}

	return (
		<>
			{error && <Modal error={error} />}

			{isLoading ? (
				<Loading />
			) : (
				<div className='container'>
					<h1>Dane osobowe </h1>
					<h2>Username: {user.username}</h2>
					<h2>Email: {user.email}</h2>
					<h2>Miasto: {user?.address?.city}</h2>
					<form onSubmit={handleSubmit}>
						<input
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							placeholder='Zmień nazwę'
						/>
						<button disabled={username.trim().length === 0}>Zapisz</button>
					</form>
				</div>
			)}
		</>
	);
}
