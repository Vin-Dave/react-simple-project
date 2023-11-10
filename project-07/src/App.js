import "./App.css";
import initialFriends from "./_DATA";
import ListFriends from "./component/Friends";

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <ListFriends />
      </div>
    </div>
  );
}

export default App;
