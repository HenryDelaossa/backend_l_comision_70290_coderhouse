const { createServer } = require("http");
const { apiRouter, hbsRouter } = require("./routes/index.routes");
const { initSocket } = require("./config/socketConfig");
const expressConfig = require("./config/expressConfig");
const Config = require("./config");

// Express config
const { app, express } = expressConfig();
const routerApi = express.Router();

// Socket init config
const server = createServer(app);
initSocket(server);

// HBS router
hbsRouter(app);

// API router
apiRouter(app, routerApi);

// Run app
const PORT = Config.portApp;
server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
