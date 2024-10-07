const { Router } = require("express");
const cartControllers = require("../controllers/cart.controllers");

const { validateResults } = require("../middlewares/_index");
const {
  addProductCartMdlwr,
  getCardByIdMdlwr,
} = require("../middlewares/cart.middlewares");

const router = Router();

router.post("/create", cartControllers.createCart);
router.post(
  "/:cid/product/:pid",
  [...addProductCartMdlwr, validateResults()],
  cartControllers.addProductToCart
);
router.get(
  "/show/:cid",
  [...getCardByIdMdlwr, validateResults()],
  cartControllers.getCartById
);

module.exports = router;
