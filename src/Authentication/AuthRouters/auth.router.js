import { Router } from "express";
import { userAuth } from "../AuthControllers/user.controller.js";
const Auth = Router();

Auth.get('/userAuth', userAuth);

export default Auth;