import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./config/db.js";
import subscriber from "./controller/subscriber.js";
const app = express();

//configure env
dotenv.config();

//databse config
connectDB();

//ES module fix dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./client/build")));

const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello from Server");
});

app.post("/subscribe", subscriber);

app.use("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server connected to ${PORT}`);
});
