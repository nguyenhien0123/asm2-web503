import express from "express";
import routerAuth from "./auth.js";
import routerBook from "./book.js";
const router = express.Router();
router.use("/auth", routerAuth);
router.use("/products", routerBook);
export default router;
