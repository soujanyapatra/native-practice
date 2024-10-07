import express from "express";
import dotenv from "dotenv";
import routes from "./routes/index.js";

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// middlewares
// Use JSON
app.use(express.json());

// Define routes
app.use("/api/", routes);

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
