import React from "react";
import { useState } from "react";
import "../Style/style.css";
import { Avatar } from 'primereact/avatar';
import { Sidebar } from "primereact/sidebar";
// const datas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export default function Users() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="card flex justify-content-center mt-9">
      <Sidebar
        className="sidebar"
        showCloseIcon="false"
        visible={visible}
        onHide={() => setVisible(true)}
      >
          <div className="flex w-full p-2   border-round-xl mt-2" style={{backgroundColor:"rgb(245 241 241 / 98%)"}}>
            <div className="border-circle  text-center ">
            <Avatar image="/images/avatar/amyelsner.png" size="large" shape="circle" />
            </div>
            <div className="flex align-items-center justify-content-between w-full ">
              <div className="flex">
                <span className="ml-3">
                  <p className="m-0 p-0">soni</p>
                  <p className="m-0 p-0 text-xs">hello </p>
                </span>
              </div>
              <div className="flex flex-column">
                <div className="NewMsgNotification bg-red-500 border-circle">
                  1
                </div>
                <p className="m-0 p-0 text-xs color-red">Today</p>
              </div>
            </div>
          </div>
      </Sidebar>
    </div>
  );
}
