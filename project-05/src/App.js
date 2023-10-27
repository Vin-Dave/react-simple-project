import "./App.css";

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>Logo</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>lorem impsum</h3>
    </div>
  );
}

function PackingList() {
  return <div className="list ">LIST</div>;
}

function Stats() {
  return (
    <footer className="stats">
      <p>You have x items on your list </p>
    </footer>
  );
}

export default App;
