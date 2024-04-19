import jwt from "jsonwebtoken";

export const permission = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    token = token.split(" ")[1];
    const verify = jwt.verify(token, "123456");
    next();
  } catch (error) {
    res.status(400).json({ messages: "Ban ko co quyen truy cap" });
  }
};
