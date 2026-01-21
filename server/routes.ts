import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/chat", async (req, res) => {
    const { message, history } = req.body;
    const { handleChatMessage } = await import("./chat");
    const reply = await handleChatMessage(message, history);
    res.json({ reply });
  });

  return httpServer;
}
