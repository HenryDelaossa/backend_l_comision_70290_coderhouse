const path = require("path");
const { readDataFile, writeDataFile } = require("../helpers/fileSystem");
const productsServices = require("../services/product.service");

const dataFilePathcart = path.join(__dirname, "../data/carts.json");

/**
 *
 * @param {string[]} productId
 * @returns
 */
exports.createCart = () => {
  const carts = readDataFile(dataFilePathcart);
  const newCart = {
    id: Date.now().toString(),
    products: [],
  };
  carts.push(newCart);
  writeDataFile(dataFilePathcart, carts);
  return newCart;
};

exports.getCartById = (cid) => {
  const carts = readDataFile(dataFilePathcart);
  return carts.find((cart) => cart.id === cid) || null;
};

exports.addProductToCart = (cid, pid) => {
  const carts = readDataFile(dataFilePathcart);
  const cart = carts.find((cart) => cart.id === cid);

  const product = productsServices.getProductById(pid);
  if (!cart || !product)
    throw new Error(`${!cart ? "cart" : "product"} not found`);

  const existingProductInCart = cart.products.find((p) => p.product === pid);
  if (existingProductInCart) existingProductInCart.quantity += 1;
  else cart.products.push({ product: pid, quantity: 1 });

  writeDataFile(dataFilePathcart, carts);
  return cart;
};
