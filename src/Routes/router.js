import { Router } from "express";
import  Auth  from "../Authentication/AuthRouters/auth.router.js";
const Routes = Router();

Routes.use('/auth', Auth);

export default Routes;