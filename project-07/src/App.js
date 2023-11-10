import "./App.css";
import initialFriends from "./_DATA";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <ListFriends />
      </div>
    </div>
  );
}

function ListFriends() {
  const persons = initialFriends;

  return (
    <>
      <ul>
        {persons.map((person) => (
          <Friend person={person} key={person.id} />
        ))}
      </ul>
      <AddNewPersonForm />
    </>
  );
}

function Friend({ person }) {
  const balance = () => {
    if (person.balance > 0) {
      return (
        <p className="green">
          You are owed {person.name} {person.balance}$
        </p>
      );
    } else if (person.balance < 0) {
      return (
        <p className="red">
          You owe {person.name} {Math.abs(person.balance)}$
        </p>
      );
    } else {
      return <p className="blue">No balance with {person.name}</p>;
    }
  };
  return (
    <li>
      <img src={person.image} alt={person.name}></img>
      {person.name}
      {balance()}
      <Button>Select</Button>
    </li>
  );
}
function Button({ children }) {
  return <button className="button">{children}</button>;
}

function AddNewPersonForm() {
  return (
    <form className="form-add-friend">
      <label>Name</label>
      <input type="text"></input>
      <label>Image URL</label>
      <input type="text"></input>
      <Button>Add</Button>
    </form>
  );
}

export default App;
