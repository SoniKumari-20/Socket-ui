import React, { useState } from "react";
import axios from "axios";
import "./Style/LoginStylePage.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Image } from "primereact/image";
import { loginUser } from "../api/functions";
import { signupUser } from "../api/functions";
export default function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const handleCollectData = (userInfo) => {
    const { name, value } = userInfo.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });
  };
  console.log(signUpInfo);
  const handleSignUp = ({ name }) => {
    console.log(name);
    signupUser();
  };
  return (
    <div className="flex align-items-center  justify-content-evenly  OuterDiv shadow-6">
      <div className="h-5 flex  flex-column" style={{ width: "50%" }}>
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
      <div
        className="flex align-items-start flex-column justify-content-start  h-5  "
        style={{ width: "50%" }}
      >
        <div className="mt-2">
          <h4 className="m-0 p-0">Create Account</h4>
        </div>
        <div className="mt-2">
          <p className="p-0 m-0  WholeLabels">UserName</p>
          <InputText
            placeholder="username"
            className="h-2rem"
            name="username"
            value={signUpInfo.username}
            onChange={(e) => handleCollectData(e)}
          ></InputText>
          <p className="p-0 m-0 WholeLabels">Email</p>
          <InputText
            placeholder="email"
            className="h-2rem"
            name="email"
            value={signUpInfo.email}
            onChange={(e) => handleCollectData(e)}
          ></InputText>
          <p className="p-0 m-0 WholeLabels  ">Password</p>
          <InputText
            className="h-2rem "
            placeholder="password"
            value={signUpInfo.password}
            name="password"
            onChange={(e) => handleCollectData(e)}
          />
          <p className="p-0 m-0 WholeLabels ">Confirm Password</p>
          <InputText
            className="h-2rem "
            placeholder="confirmPassword"
            value={signUpInfo.passwordConfirm}
            name="passwordConfirm"
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
        <div className="mt-2 flex flex-column" style={{ width: "50%" }}>
          <Button
            severity="danger"
            label="log in"
            style={{ backgroundColor: "#ef0000", color: "white" }}
            className=" p-1 text-center WholeLabels"
            rounded
            onClick={() => loginUser({ ...LoginInfo })}
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
