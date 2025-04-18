import { decodeToken } from "react-jwt";
const auth = () => {
  const login = (token, timestamp) => {
    const tokenData = decodeToken(token);
    if (!tokenData) {
      localStorage.removeItem("login");
      localStorage.removeItem("userdata");
      return { status: false, userdata: null };
    }
    const userdata = {
      token: token,
      timestamp: timestamp,
      username: tokenData.user,
    };
    localStorage.setItem("login", true);
    localStorage.setItem("userdata", JSON.stringify(userdata));
    return { status: true, userdata: userdata };
  };
  const relogin = () => {
    const login = localStorage.getItem("login");
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    if (login && userdata) {
      return { status: true, userdata: userdata };
    } else {
      return { status: false, userdata: null };
    }
  };

  return { login, relogin };
};
export default auth();
