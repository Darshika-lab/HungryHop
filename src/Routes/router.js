import { Router } from "express";
import userRoutes from "../Authentication/AuthRouters/user.router.js";
import ownerRoutes from "../Authentication/AuthRouters/owner.router.js";
import restaurant from "../Restaurants/Routes/restaurants.register.js";
const Routes = Router();

Routes.use('/user', userRoutes);
Routes.use('/owner',ownerRoutes);
Routes.use('/restaurants',restaurant)
export default Routes;