import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  connectionTimeout: 15000,
  socketTimeout: 15000,
});

export const sender = process.env.EMAIL_USER;
