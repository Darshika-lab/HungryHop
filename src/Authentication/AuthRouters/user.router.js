import { Router } from "express";
import { signup , login } from "../AuthControllers/user.controller.js";
import { signupValidation, loginValidation } from "../../Validation/user.auth.validator.js";
import validate from "../../Middleware/validator.middelware.js";

const userRoutes = Router();

userRoutes.use('/authsignin', signupValidation, validate, signup);
userRoutes.use('/authLogin', loginValidation, validate, login);

export default userRoutes;