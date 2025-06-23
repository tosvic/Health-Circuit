import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { body, validationResult } from "express-validator";

dotenv.config();

export const protectedAction = (req, res, next) => {
  // console.log("Error is here")
  const { authorization } = req.headers;

  // console.log("Authorization:", authorization)
  if (!authorization) {
    return res.status(401).json({
      status: false,
      message: "Unauthorized",
      data: [],
    });
  }

  const token = authorization.split(" ")[1];

  const decoded = jwt.verify(token, process.env.JWT_SECRET)
    if (!decoded) {
      res.status(401).json({
        status: false,
        message: "Unauthorized",
        data: [],
      });
    }

    req.user = decoded.payload;;

  next();
};

export const createArticleValidation = [
  body("title")
    .escape()
    .isLength({ min: 3 })
    .withMessage("Title should be minimum of two letters")
    .notEmpty()
    .withMessage("Title is required"),
  body("category").escape().notEmpty().withMessage("Category is required"),
  body("author")
    .escape()
    .notEmpty()
    .withMessage("Required")
    .isLength({ min: 3 })
    .withMessage("should be more than two letters"),
  body("images").isEmpty().withMessage(),
  body("content").escape().notEmpty().withMessage("Required"),
];

export const categoryMiddleware = [
  body("categoryName").escape().notEmpty().withMessage(' Field cannot be empty'),
  body("description").escape().notEmpty().withMessage('Description is required')
];

export const validateArticleMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      message: "article creation failed",
      errors: errors.array(),
    });
  }
  next();
};
