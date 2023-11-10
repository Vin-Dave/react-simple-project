import Button from "./Button/Button";

export default function Friend({ person }) {
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
