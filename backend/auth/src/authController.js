import dataBackend from "./common/dataBackend.js";

const authController = () => {
  const login = async (req, res) => {
    // Logic for user login
    const { email, password } = req.body;
    const { getData } = dataBackend("auth");
    const data = await getData("users");
    console.log("data", data);
    res.send({ message: "OK", timestamp: Date.now() });
  };

  const logout = async (req, res) => {
    // Logic for user logout
    res.send({ message: "OK", timestamp: Date.now() });
  };

  return {
    login,
    logout,
  };
};

export default authController;
