import { useState, useEffect } from "react";

export default function App() {
    const [user, setUser] = useState({});
    const [username, setUsername] = useState("");
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(res => res.json())
            .then(res => setUser(res));
    }, []);

    function handleSubmit(e) {
        e.preventDefault();

      fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'PATCH',
    body: JSON.stringify({
        username
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}).then((res) => res.json())
        .then((user) => {
            setUser(user);
            setUsername("");
        });
    }

    return (<>
    <div className="container">
        <h1>Dane osobowe </h1>
        <h2>Username: {user.username}</h2>
        <h2>Email: {user.email}</h2>
        <h2>Miasto: {user?.address?.city}</h2>
        <form onSubmit={handleSubmit}>
            <input 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                placeholder="Zmień nazwę"
            />
            <button disabled={username.trim().length === 0}>Zapisz</button>
        </form>
        </div>
    </>);
}