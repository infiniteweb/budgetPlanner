import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root.jsx";
import MonthView from "./monthView.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  { path: "/month", element: <MonthView /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
