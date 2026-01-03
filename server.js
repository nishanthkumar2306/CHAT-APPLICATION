// Import required modules
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

// Create Express app
const app = express();

// Create HTTP server using Express
const server = http.createServer(app);

// Create Socket.IO server
const io = new Server(server);

// Serve static frontend files from "public" folder
app.use(express.static("public"));

// Listen for client connections
io.on("connection", (socket) => {

    // Listen for chat messages from client
    socket.on("chatMessage", (msg) => {

        // Send received message to all connected users
        io.emit("chatMessage", msg);
    });
});

// Start server on port 3000
server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
