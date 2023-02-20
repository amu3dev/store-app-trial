import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import TableNavbar from "./components/TableNavbar";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import Board from "./components/Board";
import LoginForm from "./components/LoginForm";
import MoviesDetails from "./components/MoviesDetails";
import NotFound from "./components/NotFound";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TableNavbar />
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="/movies/:id" element={<MoviesDetails />} />

        <Route path="/movies" element={<Board />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <App /> */}
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
