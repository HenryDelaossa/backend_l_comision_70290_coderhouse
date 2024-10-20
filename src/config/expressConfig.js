const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const cors = require("cors");

const expressConfig = () => {
  const app = express();
  //cors
  app.use(
    cors({
      origin: "*",
      credentials: true,
    })
  );
  // handlebars
  app.engine(
    "hbs",
    engine({
      extname: "hbs",
      defaultLayout: "main",
      layoutsDir: path.join(__dirname, "../views", "layouts"),
    })
  );
  app.set("view engine", "hbs");
  app.set("views", path.join(__dirname, "../views"));

  // static path files
  app.use(express.static(path.join(__dirname, "../public")));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  return { app, express };
};

module.exports = expressConfig;
