import { useState, useEffect, useMemo, useReducer } from "react";
import { List } from "../List/List";
import { Form } from "../Form/Form";
import { FilterButton } from "../FilterButton/FilterButton";
import { Info } from "../Info/Info";
import styles from "./Panel.module.css";
import { getCategoryInfo } from "../../utils/getCategoryInfo";

const url = "http://localhost:3000/words";

function DataReducer(state, action) {
  switch (action.type) {
    case "load_data":
      return {
        isLoading: false,
        data: [...action.res],
      };
    case "delete_item":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.id),
      };
    case "add_item":
      return { ...state, data: [...state.data, action.res] };
    default:
      throw new Error("Not supported action!");
  }
}

export function Panel({ onError }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [state, dispatch] = useReducer(DataReducer, {
    data: [],
    isLoading: true,
  });

  useEffect(() => {
    let isCanceled = false;
    const params = selectedCategory ? `?category=${selectedCategory}` : "";
    fetch(`${url}${params}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error("Błąd ładowania danych!");
      })
      .then((res) => {
        if (!isCanceled) {
          dispatch({ type: "load_data", res });
          // setIsLoading(false);
        }
      })
      .catch(onError);

    return () => {
      isCanceled = true;
    };
  }, [selectedCategory, onError]);

  const categoryInfo = useMemo(
    () => getCategoryInfo(selectedCategory),
    [selectedCategory]
  );

  function handleFormSubmit(formData) {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!selectedCategory || selectedCategory === res.category) {
          dispatch({ type: "add_item", res });
        }
      });
  }

  function handleDeleteItem(id) {
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          dispatch({ type: "delete_item", id });
        } else {
          throw new Error("Błąd podczas usuwania!");
        }
      })
      .catch(onError);
  }

  function handleFilterClick(category) {
    setSelectedCategory(category);
  }

  if (state.isLoading) {
    return <p>Ładowanie</p>;
  }

  return (
    <>
      <section className={styles.section}>
        <Info>{categoryInfo}</Info>
        <Form onFormSubmit={handleFormSubmit} />
        <div className={styles.filters}>
          <FilterButton
            active={selectedCategory === null}
            onClick={() => handleFilterClick(null)}
          >
            Wszystkie
          </FilterButton>
          <FilterButton
            active={selectedCategory === "noun"}
            onClick={() => handleFilterClick("noun")}
          >
            Rzeczowniki
          </FilterButton>
          <FilterButton
            active={selectedCategory === "verb"}
            onClick={() => handleFilterClick("verb")}
          >
            Czasowniki
          </FilterButton>
        </div>
        <List data={state.data} onDeleteItem={handleDeleteItem} />
      </section>
    </>
  );
}
