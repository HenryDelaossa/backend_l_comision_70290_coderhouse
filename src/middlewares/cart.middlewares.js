const { body, param } = require("express-validator");

exports.createCartMdlwr = [];

exports.addProductCartMdlwr = [
  param("cid")
    .exists()
    .withMessage("cid is required")
    .isString()
    .isLength({ min: 2 })
    .withMessage("cid invalid value"),
  param("pid")
    .exists()
    .withMessage("pid is required")
    .isString()
    .isLength({ min: 2 })
    .withMessage("pid invalid value"),
];

exports.getCardByIdMdlwr = [
  param("cid")
    .exists()
    .withMessage("cid is required")
    .isString()
    .isLength({ min: 2 })
    .withMessage("cid invalid value"),
];
