import express from "express";

import mongoose from "mongoose";
import router from "./routers/index.js";
const app = express();
app.use(express.json());
const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/baithi");
    console.log("Ket noi thanh cong");
  } catch (error) {
    console.log("Ket noi that bai");
  }
};
app.use("/", router);
app.listen(4000, () => {
  connect();
  console.log(`Listening on port 4000`);
});
