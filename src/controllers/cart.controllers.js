const { httpResponseOk, httpResponseError } = require("../helpers/http");
const cartServices = require("../services/cart.service");

exports.createCart = (_, res) => {
  try {
    const cart = cartServices.createCart();
    httpResponseOk(res, cart);
  } catch (error) {
    httpResponseError(
      res,
      error?.code,
      error?.message || "createCart controller error"
    );
  }
};

exports.getCartById = (req, res) => {
  try {
    const { cid } = req.params;
    const cart = cartServices.getCartById(cid);
    if (!cart) return httpResponseError(res, 404, "cart not found");

    httpResponseOk(res, cart);
  } catch (error) {
    httpResponseError(
      res,
      error?.code,
      error?.message || "getCartById controller error"
    );
  }
};

exports.addProductToCart = (req, res) => {
  try {
    const { cid, pid } = req.params;
    const updatedCart = cartServices.addProductToCart(cid, pid);

    httpResponseOk(res, updatedCart);
  } catch (error) {
    httpResponseError(
      res,
      error?.code,
      error?.message || "addProductToCart controller error"
    );
  }
};
