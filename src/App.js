import "./App.css";
import React from "react";
import {
  AllUsers,
  DetailChatPage,
  Login,
  NavBar,
  RightChatBot,
  RightNavBar,
} from "./Component/AllDataContainer/index";
import "primereact/resources/themes/vela-blue/theme.css"; // This imports theme.css from primereact themes module
import "primereact/resources/primereact.min.css"; // This imports primereact main css
import "primeicons/primeicons.css"; // This imports primeicons css from primeicons module
import "primeflex/primeflex.css";
function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <div style={{ display: "flex" }}>
        <div className="LeftSideBar">
          <NavBar></NavBar>
          <AllUsers />
        </div>
        <div class="flex-1 h-4rem font-bold text-center border-round">
          <RightNavBar></RightNavBar>
          <DetailChatPage />
        </div>
      </div>
    </div>
  );
}

export default App;
