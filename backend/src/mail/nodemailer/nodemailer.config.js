import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

export const transporter = nodemailer.createTransport({
  // host: "smtp.gmail.com",
  // service: "gmail",
  // port: 465,
  // secure: true,
  // auth: {
  //   user: process.env.EMAIL_USER,
  //   pass: process.env.EMAIL_PASS,
  // },
  host: "smtp.gmail.com",
  port: 587,
  secure: false,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

  family: 4, // Force IPv4

  connectionTimeout: 30000,
  greetingTimeout: 30000,
  socketTimeout: 30000,
});

export const sender = process.env.EMAIL_USER;
