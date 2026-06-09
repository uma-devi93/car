import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    //  Check header exists
    if (!authHeader) {
      return res.status(401).json({ msg: "Token missing" });
    }

    //  Remove "Bearer "
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ msg: "Token missing" });
    }

    //  Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    //  Attach user
    req.user = decoded.user;

    next();
  } catch (error) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};
