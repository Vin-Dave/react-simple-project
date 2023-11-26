import Friend from "./Friend";
import initialFriends from "../_DATA";
import AddNewPersonForm from "./AddNewPersonForm";
export default function ListFriends() {
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
