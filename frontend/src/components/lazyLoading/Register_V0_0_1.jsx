import { useContext, useState } from "react";
import ButtonOutlineColor from "../tags/buttons/ButtonOutlineColor";
import ButtonSolidColor from "../tags/buttons/ButtonSolidColor";

import InputLabel from "../tags/inputs/InputLabel";
import { DataContext } from "../../DataContext";

const Register = () => {
  const dataContext = useContext(DataContext);
  const handleGoToLogin = () => {
    dataContext.setViewLink({
      service: "view",
      path: "/id/login",
    });
  };

  const handleRegister = () => {
    dataContext.setViewLink({
      service: "view",
      path: "/id/login",
    });
  };
  const handleCancel = () => {
    setEmail("");
    setPassworda("");
    setPasswordb("");
    dataContext.setViewLink({
      service: "view",
      path: "/id/home",
    });
  };
  const [email, setEmail] = useState("");
  const [passworda, setPassworda] = useState("");
  const [passwordb, setPasswordb] = useState("");
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="bg-white shadow-lg p-4 px-10 py-12 border-1 border-gray-400 rounded-lg">
        <div className="w-100">
          <div className="mt-10">Register</div>
          <hr />
          <div className="flex flex-col gap-2 my-10">
            <InputLabel
              lable={"Emial to Register"}
              placeholder={"your email address to register"}
              color={"amber"}
              type={"text"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></InputLabel>
            <InputLabel
              lable={"Password"}
              placeholder={"your new password"}
              color={"amber"}
              type={"password"}
              value={passworda}
              onChange={(e) => setPassworda(e.target.value)}
            ></InputLabel>
            <InputLabel
              lable={"Retype Password"}
              placeholder={"retype your new password"}
              color={"amber"}
              type={"password"}
              value={passwordb}
              onChange={(e) => setPasswordb(e.target.value)}
            ></InputLabel>
          </div>
          <hr />
          <div className="flex justify-center gap-4 mt-4 mb-10">
            <ButtonSolidColor
              color={"amber"}
              text="Register"
              onClick={handleRegister}
            ></ButtonSolidColor>
            <ButtonOutlineColor
              color={"gray"}
              text="Cancel"
              onClick={handleCancel}
            ></ButtonOutlineColor>
          </div>
          <div
            onClick={handleGoToLogin}
            className="flex justify-center my-10 w-full hover:text-amber-700 cursor-pointer"
          >
            click here to login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
