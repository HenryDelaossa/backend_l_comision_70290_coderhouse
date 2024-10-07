const express = require("express");
const cors = require("cors");
const appRouter = require("./routes/index.routes");
const Config = require("./config");

const PORT = Config.portApp;
const app = express();
const router = express.Router();

// cors
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (_, res) => {
  res.send("ok-server");
});

// router
app.use("/api/1.0", router);
appRouter(router);
// server
app.listen(PORT, () => {
  console.log(`app run on port  ${PORT}`);
});
