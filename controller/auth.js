import jwt from "jsonwebtoken";
import User from "../model/auth.js";
import { userValid } from "../valid/auth.js";
import bcryptjs from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const { error } = await userValid.validate(req.body);
    if (error) {
      return res.status(400).json({ messages: error.details[0].message });
    }
    const email = await User.findOne({ email: req.body.email });
    if (email) {
      return res.status(400).json({ messages: "Email da ton tai" });
    } else {
      req.body.password = await bcryptjs.hash(req.body.password, 10);
      const user = await new User(req.body).save();
      return res
        .status(200)
        .json({ messages: "Dang ki thanh cong", data: user });
    }
  } catch (error) {
    return res.status(400).json({ messages: "dang ki that bai" });
  }
};

export const signin = async (req, res) => {
  try {
    const { error } = await userValid.validate(req.body);
    if (error) {
      return res.status(400).json({ messages: error.details[0].message });
    }
    const user = await User.findOne({ email: req.body.email });
    if (user !== null) {
      const pass = await bcryptjs.compare(req.body.password, user.password);
      if (pass) {
        const token = await jwt.sign({ uid: req.body._id }, "123456");
        return res
          .status(200)
          .json({ messages: "Dang nhap thanh cong", token: token });
      } else {
        return res.status(400).json({ messages: "sai email hoac mat khau" });
      }
    } else {
      return res.status(400).json({ messages: "email ko ton tai" });
    }
  } catch (error) {
    return res.status(400).json({ messages: "Dang ki that bai" });
  }
};
