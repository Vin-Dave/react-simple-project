import { redirect } from "react-router-dom";
import { PATH_ENDPOINT_MAP, URL_BACK_END } from "../constans/loader-api";
export function loaderMainPage({ params }) {
  const backEndPath = PATH_ENDPOINT_MAP[params.genders];
  if (backEndPath) {
    return fetch(`${URL_BACK_END}/${backEndPath}`);
  } else {
    return redirect("/kobieta");
  }
}
