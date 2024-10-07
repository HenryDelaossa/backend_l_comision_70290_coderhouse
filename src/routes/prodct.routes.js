const { Router } = require("express");
const productControllers = require("../controllers/product.controllers");
const {
  listProductMdlwr,
  productMidlrw,
  paramValidationMidlwr,
} = require("../middlewares/product.middlewares");
const { pushToRequest, validateResults } = require("../middlewares/_index");

const router = Router();

router.get(
  "/list",
  [...listProductMdlwr, validateResults()],
  productControllers.listAllProducts
);

router.get(
  "/show/:pid",
  [...paramValidationMidlwr, validateResults()],
  productControllers.getProduct
);

router.post(
  "/create",
  [
    ...productMidlrw,
    validateResults(),
    ...pushToRequest(
      "product",
      [
        "title",
        "description",
        "code",
        "price",
        "status",
        "stock",
        "category",
        "thumbnails",
      ],
      [["status", true]]
    ),
  ],
  productControllers.createProduct
);

router.patch(
  "/update/:pid",
  [
    ...paramValidationMidlwr,
    ...productMidlrw,
    validateResults(),
    ...pushToRequest("product", [
      "title",
      "description",
      "code",
      "price",
      "status",
      "stock",
      "category",
      "thumbnails",
    ]),
  ],
  productControllers.updateProduct
);
router.delete(
  "/delete/:pid",
  [...paramValidationMidlwr, validateResults()],
  productControllers.deleteProduct
);

module.exports = router;
