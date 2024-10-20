const ProductRoutes = require("./prodct.routes");
const CartRoutes = require("./cart.routes");

// hbs routes
const hbsRoutes = require("./hbs.routes");

const apiRouter = (app, router) => {
  app.use("/api/1.0", router);
  router.get("/", (_, res) => {
    res.send({ message: "ok api" });
  });
  router.use("/product", ProductRoutes);
  router.use("/cart", CartRoutes);
};

const hbsRouter = (app) => {
  app.use("/", hbsRoutes);
};

module.exports = { apiRouter, hbsRouter };
