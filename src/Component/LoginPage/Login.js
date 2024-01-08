import React, { useState } from "react";
import axios from "axios";
import "../Style/LoginStylePage.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
export default function Login() {
  const [LoginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const handleCollectData = (userInfo) => {
    const { name, value } = userInfo.target;
    setLoginInfo({ ...LoginInfo, [name]: value });
  };
  console.log(LoginInfo);
  const handleLogin = async (loginInfo) => {
    const data = await axios.post(
      "https://socket-app-lgus.onrender.com/api/v1/users/login",
      {
        ...loginInfo,
      }
    );
  };
  return (
    <div className="flex align-items-center  justify-content-evenly mt-8  OuterDiv shadow-6">
      <div className=" w-50% h-5 flex  flex-column">
        <div className="align-items-center text-center flex -mt-6 logo">
          <Image
            src="https://1000logos.net/wp-content/uploads/2022/01/RANDOM-CHAT-Logo.png"
            alt="Image"
            width="40"
            height="20"
          />
          <p className=" text-xs  font-medium ">Socket</p>
        </div>
        <div className="BottomImage flex align-items-center  justify-content-center">
          <Image
            src="/loginPageImage.png"
            alt="Image"
            height="100%"
            width="100%"
          />
        </div>
      </div>
      <div className="flex align-items-start flex-column justify-content-start w-50%  h-5  ">
        <div className="mt-2">
          <h4 className="m-0 p-0">Sign in to your account</h4>
          <p className="m-0 p-0 WholeLabels mt-2">
            Don't have an account ?
            <span style={{ color: "#ef0000" }}>Sign up</span>
          </p>
        </div>
        <div className="mt-2">
          <p className="p-1 m-0  mt-2 WholeLabels">Email</p>
          <InputText
            placeholder="email"
            className="h-2rem"
            name="email"
            value={LoginInfo.email}
            onChange={(e) => handleCollectData(e)}
          ></InputText>
          <p className="p-1 m-0 WholeLabels mt-2 ">Password</p>
          <InputText
            className="h-2rem "
            placeholder="password"
            value={LoginInfo.password}
            name="password"
            onChange={(e) => handleCollectData(e)}
          />
        </div>
        <div className="mt-2">
          <span
            style={{ color: "#ef0000", fontSize: "10px", fontWeight: "600" }}
          >
            Forgot password ?
          </span>
        </div>
        <div className="mt-2 flex flex-column" style={{ width: "100%" }}>
          <Button
            severity="danger"
            label="log in"
            style={{ backgroundColor: "#ef0000", color: "white" }}
            className=" p-1 text-center WholeLabels"
            rounded
            onClick={() => handleLogin({ ...LoginInfo })}
          />
          <Button
            label="LOGIN WITH GOOGLE "
            className=" mt-2 p-1 text-center WholeLabels"
            rounded
            outlined
            style={{ color: "#ef0000" }}
            severity="danger"
          />
        </div>
      </div>
    </div>
  );
}