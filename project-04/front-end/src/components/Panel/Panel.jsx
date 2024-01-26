import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { List } from "../List/List";
import styles from "./Panel.module.css";
import { Form } from "../Form/Form";

export function Panel() {
  const _URL = "http://localhost:3000/words";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(_URL)
      .then((res) => {
        console.log(res);
        if (res.ok) return res.json();

        throw new Error("Błąd ładowania danych");
      })
      .then((data) => setData(data))
      .catch((e) => console.log(e.message));
  }, []);

  function handleAddNewWord(word) {
    fetch(_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(word),
    })
      .then((res) => {
        if (res.ok) return res.json();

        throw new Error("Błąd dodawania");
      })
      .then((data) => setData((prevData) => [...prevData, data]))
      .catch((e) => console.log(e.message));
  }

  return (
    <>
      <section className={styles.section}>
        <Form onFormSubmit={(word) => handleAddNewWord(word)} />
        <List data={data}></List>
      </section>
    </>
  );
}
