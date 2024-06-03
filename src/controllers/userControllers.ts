import { Response, Request, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import {
  createUser,
  getAllUser,
  getUserByEmail,
  getUserById,
  updateUsers,
  deleteUser,
} from "../services/userService";
import { encryptPassword, checkPassword, createToken } from "../../middlewares/authPassword";
const SALT = 10;

export const registerUser = async (req: Request, res: Response) => {
  const email = req.body.email.toLowerCase();
  const encryptedPassword = await encryptPassword(req.body.password);
  const name = req.body.name;
  const role = "user"
  console.log(req.body)
  try {
    const user = await createUser({ email, password: encryptedPassword,name ,role });
    
    res.status(201).json({
      id: user.id,
      email: user.email,
      password: user.password,  
      name: user.name,
      role: user.role
    });
  } catch (error) {
    res.status(404).json({ message: "Data can't be inserted",error: error });
  }
};

//Login User
export const loginUser = async (req: Request, res: Response) => {
  const email = req.body.email.toLowerCase();
  const password = req.body.password;

  const user = await getUserByEmail(email);

  if (!user) {
    res.status(404).json({ message: "Email can't be found" });
    return;
  }

  console.log(user.email);
  console.log(user.password);

  const isPasswordCorrect = await checkPassword(user.password, password);

  if (!isPasswordCorrect) {
    res.status(404).json({ message: "Wrong password" });
    return;
  }

  const token = await createToken({
    id: user.id,
    email: user.email,
  });

  res.status(201).json({
    id: user.id,
    email: user.email,
    token: token
  });
};


//GetAllData User
export const getUser = async (req:Request, res:Response) =>{
  const user = await getAllUser();


  res.status(200).json({
    message:"Data is succesfully found",
    user: user,
  })
}