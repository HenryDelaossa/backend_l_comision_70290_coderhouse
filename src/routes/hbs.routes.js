const { Router } = require("express");
const productControllers = require("../controllers/product.controllers");
const productServices = require("../services/product.service");

const router = Router();

router.get(["/", "/home"], (_, res) => {
  const products = productServices.getAllProducts();
  res.render("home", { products });
});

router.get("/realtimeproducts", (_, res) => {
  const products = productServices.getAllProducts();
  res.render("realTimeProducts", { products });
});

module.exports = router;
