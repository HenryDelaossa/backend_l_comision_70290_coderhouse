const path = require("path");
const { readDataFile, writeDataFile } = require("../helpers/fileSystem");

const dataFilePathProducts = path.join(__dirname, "../data/products.json");

exports.getAllProducts = (limit) => {
  let products = readDataFile(dataFilePathProducts);
  if (limit && typeof limit === "number" && limit > 0)
    products?.slice(0, limit);
  return products;
};

exports.getProductById = (id) => {
  const products = readDataFile(dataFilePathProducts);
  return products.find((p) => p.id === id);
};

exports.createProduct = (productData) => {
  const products = readDataFile(dataFilePathProducts);
  const newProduct = { id: Date.now().toString(), ...productData };
  products.push(newProduct);
  writeDataFile(dataFilePathProducts, products);
  return newProduct;
};

exports.updateProduct = (id, productData) => {
  const products = readDataFile(dataFilePathProducts);
  const index = products.findIndex((p) => p.id === id);

  if (index !== -1) {
    products[index] = { id, ...productData };
    writeDataFile(dataFilePathProducts, products);
    return products[index];
  }
  return null;
};

exports.deleteProduct = (id) => {
  let products = readDataFile(dataFilePathProducts);
  const index = products.findIndex((p) => p.id === id);

  if (index !== -1) {
    products = products.filter((p) => p.id !== id);
    writeDataFile(dataFilePathProducts, products);
    return true;
  }
  return null;
};
