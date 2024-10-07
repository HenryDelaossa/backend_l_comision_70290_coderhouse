const { httpResponseOk, httpResponseError } = require("../helpers/http");
const productServices = require("../services/product.service");

exports.listAllProducts = (req, res) => {
  try {
    const { limit } = req.query;
    const products = productServices.getAllProducts(Number(limit));
    httpResponseOk(res, products);
  } catch (error) {
    httpResponseError(
      res,
      error?.code,
      error?.message || "listAllProducts controller error"
    );
  }
};

exports.getProduct = (req, res) => {
  const { pid } = req.params;
  try {
    const product = productServices.getProductById(pid);

    if (product) return httpResponseOk(res, product);
    else throw new Error("producto no encontrado");
  } catch (error) {
    httpResponseError(
      res,
      error?.code,
      error?.message || "getProduct controller error"
    );
  }
};

exports.createProduct = (req, res) => {
  try {
    const productData = { ...req._product };
    const newProduct = productServices.createProduct(productData);
    httpResponseOk(res, newProduct, "success");
  } catch (error) {
    httpResponseError(
      res,
      error?.code,
      error?.message || "createProduct controller error"
    );
  }
};

exports.updateProduct = (req, res) => {
  try {
    const { pid } = req.params;
    const newProductInfo = { ...req._product };

    const updatedProduct = productServices.updateProduct(pid, newProductInfo);
    if (updatedProduct) return httpResponseOk(res, updatedProduct);
    throw new Error("no existe producto");
  } catch (error) {
    httpResponseError(
      res,
      error?.code,
      error?.message || "updateProduct controller error"
    );
  }
};

exports.deleteProduct = (req, res) => {
  try {
    const { pid } = req.params;

    const deleted = productServices.deleteProduct(pid);
    if (deleted) return httpResponseOk(res, deleted, "producto eliminado");

    throw new Error("producto no encontrado");
  } catch (error) {
    httpResponseError(
      res,
      error?.code,
      error?.message || "deleteProduct controller error"
    );
  }
};
