import { Router } from "express";
import  Auth  from "../Authentication/AuthRouters/auth.router.js";
const Routes = Router();
import { signupValidation } from "../../Validation/user.auth.validator.js";
import validate from "../Middleware/uservalidator.middelware.js";

Routes.use('/authsignin', signupValidation, validate, Auth);
Routes.use('/authLogin', Auth);

export default Routes;