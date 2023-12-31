import "./styles/theme.css";
import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import { Cart } from "./views/Cart/Cart";
import { Favourites } from "./views/Favourites/Favourites";
import { Layout } from "./components/Layout/Layout";
import { MainPage } from "./views/MainPage/MainPage";
import { loaderMainPage } from "./api/loaderMainPage";
import { Products } from "./components/Products/Products";
import { ProductsList } from "./views/ProductsList/ProductsList";
import { loaderProductList } from "./api/loaderProductList";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/koszyk",
        element: <Cart />,
      },
      {
        path: "/ulubione",
        element: <Favourites />,
      },
      {
        path: "/:genders?",
        element: <MainPage />,
        loader: loaderMainPage,
      },
      {
        path: "/:genders/:subcategory",
        element: <ProductsList />,
        loader: loaderProductList,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
