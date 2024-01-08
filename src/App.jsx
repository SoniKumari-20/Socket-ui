import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Loading from "./components/common/Loading";
import NotFound from "./components/common/NotFound";
import "primereact/resources/themes/vela-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import SignUp from "./components/SignUp";
import { readCookie } from "./utils/cookies";

function App() {
  return (
    <React.Fragment>
      {readCookie("socketAppToken") ? (
        <BrowserRouter>
          <div>DASHBOARD</div>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Loading />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      )}
    </React.Fragment>
  );
}

export default App;
