import express from "express";
import {
  create,
  dele,
  getAll,
  getDetail,
  update,
} from "../controller/books.js";
import { permission } from "../permission.js";
const routerBook = express.Router();
routerBook.get("/", getAll);
routerBook.get("/:id", getDetail);
routerBook.post("/", permission, create);
routerBook.put("/:id", permission, update);
routerBook.delete("/:id", permission, dele);
export default routerBook;
