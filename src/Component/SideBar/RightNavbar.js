import React from "react";
import "../Style/style.css";
export default function RightNavBar() {
  return (
    <>
      <div className="flex surface h-3rem align-items-center p-4">
        <div className="border-circle w-3rem h-2rem  bg-primary text-align-center font-light  ">
          h
        </div>
        <div className="p-1">
            <p className="m-0 p-0 text-medium">soni</p>
            <p className="m-0 p-0 text-xs font-light">online</p>
        </div>
        <div className=" flex justify-content-end flex-wrap ml-6 w-full ">
          <div className="m-2">
            <i className="pi pi-phone"></i>
          </div>
          <div className="m-2">
            <i className="pi pi-video"></i>
          </div>
          <div className="m-2">
            <i className="pi pi-ellipsis-v"></i>
          </div>
        </div>
      </div>
    </>
  );
}
