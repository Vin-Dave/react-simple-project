import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { List } from "../List/List";
import styles from "./Panel.module.css";
import { Form } from "../Form/Form";

export function Panel() {
  const _URL = "http://localhost:3000/words";

  const [data, setData] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(_URL)
      .then((res) => {
        console.log(res);
        if (res.ok) return res.json();

        throw new Error("Błąd ładowania danych");
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
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

  function handleDeleteClick(id) {
    fetch(`${_URL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok)
          setData((prevData) => prevData.filter((item) => item.id !== id));
        else {
          throw new Error("Błąd usuwania");
        }
      })
      .catch((e) => setErrorMessage(e));

    if (isLoading) return <p>Ładowanie</p>;
  }
  return (
    <>
      <section className={styles.section}>
        <Form onFormSubmit={(word) => handleAddNewWord(word)} />
        <List data={data} handleDeleteClick={handleDeleteClick}></List>
      </section>
    </>
  );
}
