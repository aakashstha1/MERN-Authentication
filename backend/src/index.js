import dns from "dns";
dns.setDefaultResultOrder("ipv4first");
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";
import { transporter } from "./mail/nodemailer/nodemailer.config.js";

dotenv.config({ quiet: true });

const app = express();
const PORT = process.env.PORT || 8000;
// const __dirname = path.resolve();

const allowedOrigins = ["http://localhost:5173", process.env.CLIENT_URL];
// const allowedOrigins = ["http://localhost:5173"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  }),
);

app.use(express.json()); // allows us to parse incoming requests:req.body
app.use(express.urlencoded({ extended: true })); // allows us to parse incoming requests with urlencoded payloads
app.use(cookieParser()); // allows us to parse incoming cookies

// app.use((req, res, next) => {
//   res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
//   next();
// });

app.get("/health", (req, res) => {
  res.send("API is healthy");
});

app.use("/api/v1", authRoutes);

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname, "/frontend/dist")));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
//   });
// }
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
