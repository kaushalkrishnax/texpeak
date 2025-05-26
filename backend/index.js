import express from "express";
import http from "http";
import { Server } from "socket.io";
import { onSpeakEvent } from "./controllers/speak.controller.js";
// import { onHistoryEvent } from "./controllers/history.controller.js";
// import { onUsageEvent } from "./controllers/usage.controller.js";
// import { onSettingsEvent } from "./controllers/settings.controller.js";

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(express.json());

app.get("/", (_, res) => {
  res.send("Texpeak server is running 🚀");
});

const socketEvents = {
  speak: onSpeakEvent,
  // history: onHistoryEvent,
  // usage: onUsageEvent,
  // settings: onSettingsEvent,
};

io.on("connection", (socket) => {
  console.log("🟢 Client connected:", socket.id);
  socket.emit("connection", { id: socket.id });

  for (const [event, handler] of Object.entries(socketEvents)) {
    socket.on(event, async (data) => await handler(socket, data));
  }

  socket.on("disconnect", () => {
    console.log("🔴 Client disconnected:", socket.id);
  });
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`🚀 Texpeak server running on http://localhost:${PORT}`);
});
