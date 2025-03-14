const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173", // Frontend URL
        methods: ["GET", "POST"]
    }
});

const users = {}; // Store userId → socketId mapping

app.use(cors());

io.on("connection", (socket) => {
    const userId = socket.handshake.auth.userId; // Get user ID from client
  
    if (userId) {
      users[userId] = socket.id; // Store user-specific socket ID
      console.log(`User Connected: ${userId} (Socket ID: ${socket.id})`);
    }
  
    socket.on("disconnect", () => {
      console.log(`User Disconnected: ${userId}`);
      delete users[userId]; // Remove user on disconnect
    });
  
    socket.on("sendMessage", (data) => {
      io.emit("receiveMessage", { message: data.message, id: userId });
    });

    socket.on("disconnect", () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

server.listen(5000, () => {
    console.log("Server running on port 5000");
});

