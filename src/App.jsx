import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Loading from "./components/common/Loading";
import NotFound from "./components/common/NotFound";

function App() {
  return (
    <React.Fragment>
      {true ? (
        <BrowserRouter>
          <div>Hello</div>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Loading />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </React.Fragment>
  );
}

export default App;
