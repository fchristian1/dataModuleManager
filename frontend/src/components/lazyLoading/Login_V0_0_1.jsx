import { useContext, useState } from "react";
import ButtonOutlineColor from "../tags/buttons/ButtonOutlineColor";
import ButtonSolidColor from "../tags/buttons/ButtonSolidColor";

import InputLabel from "../tags/inputs/InputLabel";
import { DataContext } from "../../DataContext";
import { getUrlFromLink } from "../../common/getUrlFromLink";
import { sendDatatoUrl } from "../../common/sendDatatoUrl";
import auth from "../../common/auth.js";

const Login = () => {
  const dataContext = useContext(DataContext);
  const handleGoToRegister = () => {
    dataContext.setViewLink({
      service: "view",
      path: "/id/register",
    });
  };
  const handleLogin = async () => {
    setMessage("");
    const loginLink = dataContext.initData.links.login;
    const url = getUrlFromLink(loginLink, dataContext.initData.services);
    const { data } = await sendDatatoUrl(url, "POST", { email, password });
    if (data.message != "OK") {
      console.log("Login failed!");
      setMessage("Login failed!");
      return;
    }

    const loginStatus = auth.login(data.token, data.timestamp);
    if (!loginStatus.status) {
      console.log("Login failed!");
      setMessage("Login failed!");
      return;
    }
    dataContext.setLoginStatus(loginStatus.status);
    dataContext.setUserData(loginStatus.userData);

    // dataContext.setViewLink({
    //   service: "view",
    //   path: "/id/manager",
    // });
  };
  const handleCancel = () => {
    setEmail("");
    setPassword("");
    dataContext.setViewLink({
      service: "view",
      path: "/id/home",
    });
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="bg-white shadow-lg p-4 px-10 py-12 border-1 border-gray-400 rounded-lg">
        <div className="w-100">
          <div className="mt-10">Login</div>
          <hr />
          <div className="flex flex-col gap-2 my-10">
            <InputLabel
              lable={"Emial"}
              placeholder={"your email address"}
              color={"amber"}
              type={"text"}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></InputLabel>
            <InputLabel
              lable={"Password"}
              placeholder={"your password"}
              color={"amber"}
              type={"password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></InputLabel>
          </div>
          <div className="text-red-500">{message}</div>
          <hr />
          <div className="flex justify-center gap-4 mt-4 mb-10">
            <ButtonSolidColor
              color={"amber"}
              text="Login"
              onClick={handleLogin}
            ></ButtonSolidColor>
            <ButtonOutlineColor
              color={"gray"}
              text="Cancel"
              onClick={handleCancel}
            ></ButtonOutlineColor>
          </div>
          <div
            onClick={handleGoToRegister}
            className="flex justify-center my-10 w-full hover:text-amber-700 cursor-pointer"
          >
            click here to register
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
