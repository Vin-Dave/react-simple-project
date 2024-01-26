import { useState } from "react";
import styles from "./App.module.css";
import { Panel } from "./components/Panel/Panel";
import { Button } from "./components/Button/Button";

function App() {
  const [isFormShown, setIsFormShown] = useState(true);

  function handleShowPanel() {
    setIsFormShown((s) => !s);
  }
  return (
    <main className={styles.main}>
      <Button onClick={handleShowPanel}>
        {isFormShown ? "Schowaj Panel" : "Pokaż Panel"}
      </Button>
      {isFormShown ? <Panel /> : null}
    </main>
  );
}

export default App;
