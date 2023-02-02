import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableNavbar from "./components/TableNavbar";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./index.css";

import reportWebVitals from "./reportWebVitals";
// import App from "./components/App";
import Board from "./components/Board";
import NotFound from "./components/NotFound";
import MoviesDetails from "./components/MoviesDetails";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TableNavbar />
      <Routes>
        <Route path="/" element={<Board />} />
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
