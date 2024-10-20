const { Server } = require("socket.io");

let io;

const initSocket = (server) => {
  io = new Server(server);

  io.on("connection", (socket) => {
    const ip = socket.handshake.address;
    console.log(`connected: ${ip}`);

    socket.on("disconnect", () => {
      console.log(`disconnected: ${ip} id: ${socket.id}`);
    });
  });
};

/**
 * Obtiene la instancia de Socket.IO.
 * @returns {Server} La instancia de Socket.IO.
 */
const getSocket = () => {
  if (!io) throw new Error("Socket io is not initialized!");
  return io;
};

module.exports = {
  initSocket,
  getSocket,
};
