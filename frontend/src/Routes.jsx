import React from "react";
import {Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

import Home from './components/home/Home'
import UserCrud from "./components/user/UserCrud"

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="users" element={<UserCrud />} />
    </Route>
  )
)

export default Router