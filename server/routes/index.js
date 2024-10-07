import express from "express";
import axios from "axios";
import Helpers from "../helper/index.js";

const { generateGeminiHeaders } = Helpers;

// route
const router = express.Router();

// Route to get account balances
router.get("/chat-message", async (req, res) => {
  console.log("take message");
  const payload = {
    request: "/v1/balances",
    nonce: Date.now(),
  };

  const headers = generateGeminiHeaders(payload);

  try {
    const response = await axios.post(
      `${process.env.BASE_URL}/balances`,
      payload,
      {
        headers,
      }
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching balances from Gemini" });
  }
});

router.get("/", (req, res) => {
  console.log("Hi soujanya");
});

export default router;
