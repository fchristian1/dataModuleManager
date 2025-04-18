import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
app.all("/health", (req, res) => {
  res.status(200).json({ message: "OK" });
});
app.get("/api/v1/", (req, res) => {
  res.status(200).json({ message: "OK" });
});
app.get("/api/v1/id/:id", (req, res) => {
  const { id } = req.params;
  const { userid } = req.headers;
  let nav = {
    a: [
      {
        name: "Home",
        title: "Home of the site",
        link: { service: "view", path: "/id/home" },
        active: id == "home",
      },
      {
        name: "Manager",
        title: "Manager of the site",
        link: { service: "view", path: "/id/manager" },
        active: id == "manager",
      },
    ],
    b: [],
    c: [
      {
        name: "Login",
        title: "Login to the site",
        link: { service: "view", path: "/id/login" },
        active: id == "login",
      },
      { name: "/" },
      {
        name: "Register",
        title: "Register to the site",
        link: { service: "view", path: "/id/register" },
        active: id == "register",
      },
    ],
  };
  let aside = {
    // a: {
    //   title: "",
    //   data: [
    //     {
    //       name: "Home",
    //       title: "Home of the site",
    //       link: { service: "view", path: "/id/home" },
    //       active: id == "home",
    //     },
    //     {
    //       name: "Manager",
    //       title: "Manager of the site",
    //       link: { service: "view", path: "/id/login" },
    //       active: id == "manager",
    //     },
    //   ],
    // },
  };
  let main = {};
  let footer = {};
  if (!userid || userid == "") {
    if (id == "home") {
      main = {
        a: {},
      };
    }
    if (id == "manager") {
      main = {
        a: {
          module: {
            name: "Login",
            version: "0.0.1",
          },
        },
      };
    }
    if (id == "login") {
      main = {
        a: {
          module: {
            name: "Login",
            version: "0.0.1",
          },
        },
      };
    }
    if (id == "register") {
      main = {
        a: {
          module: {
            name: "Register",
            version: "0.0.1",
          },
        },
      };
    }
    res.status(200).json({
      message: "OK",
      timestamp: Date.now(),
      nav: nav,
      aside: aside,
      main: main,
      footer: footer,
    });
  } else {
    res.status(200).json({ message: "OK", view: id });
  }
});

app.use((req, res) => {
  res.status(404).json({ message: "nOK" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
