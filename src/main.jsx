import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Error from "./Error";
import Home from "./Home";
import "./index.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const isLoggedIn = false;

let routes = [];

if (isLoggedIn) {
  routes = [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "contacts/:contactId",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];
} else {
  routes = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ];
}

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
