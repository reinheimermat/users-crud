import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router"
import AppRouter from "./Routes"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={AppRouter} />
  </React.StrictMode>
)
