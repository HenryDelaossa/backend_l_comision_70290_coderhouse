const ProductRoutes = require("./prodct.routes");
const CartRoutes = require("./cart.routes");

const router = (router) => {
  router.use("/product", ProductRoutes);
  router.use("/cart", CartRoutes);
};

module.exports = router;
