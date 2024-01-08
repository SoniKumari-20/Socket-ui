import React from "react";
import "../Style/style.css";
import { InputText } from "primereact/inputtext";
export default function NavBar() {
  return (
    <>
      <div className="flex surface align-items-center h-3rem justify-content-center ">
        <div className="  font-bold  align-content-center p-3 border-round">
          <span className="p-input-icon-left" style={{ fontSize: '1rem', color:"gray" }}>
            <i className="pi pi-search" style={{ fontSize: '1rem', color:"gray" }}/>
            <InputText placeholder="Search" />
            <InputText placeholder="Search" className="p-inputtext-sm leftsearchBar bg-gray-50" />
          </span>
        </div>
      </div>
    </>
  );
}


