import { redirect } from "react-router-dom";

import { URL_BACK_END, PATH_ENDPOINT_MAP } from "../constans/loader-api";
import { CATEGORIES } from "../constants/categories";

export function loaderProductList({ params: { gender, category } }) {
  const selectedCategory = CATEGORIES.find((c) => c.path === category);
  const selectedGender = PATH_ENDPOINT_MAP[gender];
  if (selectedCategory && selectedGender) {
    return fetch(
      `${URL_BACK_END}/products/?gender=${PATH_ENDPOINT_MAP[gender]}&category=${category}`
    );
  } else {
    redirect("/kobieta");
  }
}
