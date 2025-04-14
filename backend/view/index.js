import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.all("/health", (req, res) => {
  res.status(200).json({ message: "OK" });
});
app.get("/api/v1/", (req, res) => {
  res.status(200).json({ message: "OK" });
});
app.get("/api/v1/id/:id", (req, res) => {
  const { id } = req.params;
  const { userid } = req.headers;
  if (!userid || userid == "") {
    res.status(200).json({
      message: "OK",
      timestamp: Date.now(),
      nav: {
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
            link: { service: "view", path: "/id/login" },
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
        ],
      },
      aside: {
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
      },
      main: {},
      footer: {},
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
