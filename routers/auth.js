import express from "express";
import { signin, signup } from "../controller/auth.js";
const routerAuth = express.Router();
routerAuth.post("/signup", signup);
routerAuth.post("/signin", signin);
export default routerAuth;
