import { useState } from "react";
import styles from "./Item.module.css";
export function Item({ word, translation, id, handleDeleteClick }) {
  const [isTranslationShown, setIsTranslationShown] = useState(false);

  return (
    <li className={styles.item}>
      <span className={styles.word}>
        (PL) <strong>{word}</strong>
      </span>
      <span className={styles.word}>
        (ANG)
        <strong> {isTranslationShown ? translation : "******"}</strong>
      </span>
      <div className={styles.buttons}>
        <button
          onClick={() => setIsTranslationShown((prevValue) => !prevValue)}
          className={styles.button}
        >
          👁️
        </button>
        <button onClick={() => handleDeleteClick(id)} className={styles.button}>
          ✔️
        </button>
      </div>
    </li>
  );
}
