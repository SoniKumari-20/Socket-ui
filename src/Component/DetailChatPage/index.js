import React, { useState } from "react";
import "../Style/style.css";

export default function DetailChatPage() {
  const [CurrentDate, setCurrentDate] = useState("");
  return (
    <>
      <div className="bg-gray-100 h-screen">
        <div className="flex flex-start flex-column">
          <div className="border-circle w-2rem ml-2 h-2rem  bg-primary text-center mt-3 ">
            S
          </div>
          <div className="flex-row  -mt-2 text-left ml-6 ">
            <p className="m-0 p-0 text-xs text-black-alpha-50 font-light">
              Today
            </p>
          </div>
          <div className="flex-row ml-4 max-w-max bg-white leftSideChatbox p-1  text-left">
            <p className="m-1 p-0 text-xs font-normal">
              hello how are you?
            </p>
          </div>
        </div>
        <div className="flex align-items-end flex-column">
          <div className="flex-row  max-w-max bg-red-500  mr-4 RightSideChatbox p-1  text-left">
            <p className="m-1 p-0 text-xs font-normal">
             how are you
            </p>
          </div>
          <div className="flex-row mt-1 inline-flex p-2 ">
            <p className="mr-3 ml-0 -mt-1 mb-0 p-0 text-xs text-black-alpha-50 font-light">
              Today 7.01 am
            </p>
            <div className="border-circle -mt-1 w-2rem h-2rem bg-primary text-center mt-3 ">
              S
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
