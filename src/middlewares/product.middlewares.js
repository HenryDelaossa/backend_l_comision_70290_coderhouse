const { query, body, param } = require("express-validator");

exports.listProductMdlwr = [
  query("limit")
    .optional()
    .isInt({ min: 1 })
    .withMessage("invalid query limit"),
];

exports.paramValidationMidlwr = [
  param("pid")
    .exists()
    .withMessage("pid is required")
    .isInt()
    .withMessage("pid invalid value"),
];

exports.productMidlrw = [
  body("title")
    .exists()
    .withMessage("title is required")
    .isString()
    .isLength({ min: 2 })
    .withMessage("title is invalid value"),
  body("description")
    .exists()
    .withMessage("description is required")
    .isString()
    .isLength({ min: 2 })
    .withMessage("description is invalid value"),
  body("code")
    .exists()
    .withMessage("code is required")
    .isString()
    .isLength({ min: 2 })
    .withMessage("code is invalid value"),
  body("price")
    .exists()
    .withMessage("price is required")
    .isInt({ min: 1 })
    .withMessage("price is invalid value"),
  body("stock")
    .exists()
    .withMessage("stock is required")
    .isInt({ min: 1 })
    .withMessage("stock is invalid value"),
  body("category")
    .exists()
    .withMessage("category is required")
    .isString()
    .isLength({ min: 2 })
    .withMessage("category is invalid value"),
  body("thumbnails")
    .exists()
    .isArray({ min: 1 })
    .withMessage("Thumbnails[] is required"),
  body("thumbnails.*")
    .isString()
    .withMessage("Each thumbnail must be a string"),
  body("status").optional().isBoolean().withMessage("status invalid value"),
];
