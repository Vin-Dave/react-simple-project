import { redirect } from "react-router-dom";

export function loaderMainPage({ params }) {
  const PATH_ENDPOINT_MAP = {
    kobieta: "women",
    mezczyzna: "men",
    dziecko: "children",
  };

  const backEndPath = PATH_ENDPOINT_MAP[params.genders];
  if (backEndPath) {
    return fetch(`http://localhost:3000/${backEndPath}`);
  } else {
    return redirect("/");
  }
}
