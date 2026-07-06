import { Router } from "express";
import { signup , login } from "../AuthControllers/user.controller.js";
const Auth = Router();

Auth.post('/signup', signup); 

Auth.post('/login', login);

export default Auth;