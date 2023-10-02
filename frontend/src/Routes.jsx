import React from "react"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom"

import Home from "./components/home/Home"
import UserCrud from "./components/user/UserCrud"
import App from "./App"

const AppRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="users" element={<UserCrud />} />
      <Route path="*" element={<Home />} />
    </Route>
  )
)

export default AppRouter
