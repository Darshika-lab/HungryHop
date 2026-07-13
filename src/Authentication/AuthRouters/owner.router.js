import { Router } from "express";
import { signup , login } from "../AuthControllers/owner.controller.js";
import { signupValidation, loginValidation } from "../../Validation/owner.auth.validator.js";
import validate from "../../Middleware/validator.middelware.js";


const ownerRoutes = Router();

ownerRoutes.use('/authsignin', signupValidation, validate, signup);
ownerRoutes.use('/authLogin', loginValidation, login);

export default ownerRoutes;