const updateProductsList = (elementUlId) => {
  const socket = io();

  socket.on("products", (products) => {
    const productList = document.getElementById(elementUlId);
    productList.innerHTML = "";
    products.forEach((product) => {
      const li = document.createElement("li");
      li.textContent = `id: ${product.id} - title: ${product.title} - price:${product.price}`;
      productList.appendChild(li);
    });
  });
};
