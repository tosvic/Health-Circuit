import User from "../models/usermodel.js";
import dotenv from "dotenv";
import bcrypt, { compareSync } from "bcrypt";
import jwt from "jsonwebtoken";

// create user profile
export const createUser = async (req, res) => {
  const { fullname, email, phoneNumber, password, confirmPassword } = req.body;

  const checkEmail = await User.findOne({ where: { email } });

  if (checkEmail) {
    return res.status(400).json({
      status: false,
      message: "Email has been used already",
      data: [],
    });
  }
  
  if ( password !== confirmPassword) {
    return res.send('password does not match')
  }

  const hashed_password = await bcrypt.hash(password, 10);
  // console.log({ fullname, email, phoneNumber, password: hashed_password });

  try {
    const signup = await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashed_password,
    });
    if (!signup) {
      return res.status(400).json({
        status: false,
        message: "Unable to signup",
        data: [],
      });
    }

    // sendEmail(email, "Welcome to Health Circuit!");

    return res.status(201).json({
      status: true,
      message: "Sign up successful ",
    });
  } catch (err) {
    // console.error(err); // this will show the real reason Sequelize failed
    return res.status(500).json({
      status: false,
      message: "Internal server error"
      // error: err.message, // include this only during development
    });
  }
};

// Log in an existing user
export const logInUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: {email} });

  if (!user) {
    return res.status(400).json({
      status: false,
      message: "Invalid email or password",
      data: [],
    });
  }

  const comparePassword = await bcrypt.compareSync(password, user.password);

  if (!comparePassword) {
    return res.status(400).json({
      status: false,
      message: "Invalid email or password",
      data: [],
    });
  }

  let payload = {
    id: user.id,
    fullname: user.fullname,
    email: user.email,
  };
  let token = jwt.sign({ payload }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  payload.token = token;

  return res.status(201).json({
    status: true,
    message: "user login successfully",
    data: payload,
  });
};

// // to get a user profile   // it is not part of the feature
// export const userProfile = async (req, res) => {
//   return res.status(200).json({
//     status: true,
//     message: "user profile retrieved successfully",
//     data: req.user,
//   });
// };

// update user profile

// update password
