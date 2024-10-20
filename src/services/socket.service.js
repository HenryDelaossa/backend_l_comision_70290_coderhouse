const { getSocket } = require("../config/socketConfig");

exports.emitProducts = (products) => {
  try {
    const socket = getSocket();
    socket.emit("products", products);
  } catch (error) {
    console.log("emitProducts error:: ", error.message);
  }
};
