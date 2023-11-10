import Button from "./Button/Button";

export default function AddNewPersonForm() {
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
