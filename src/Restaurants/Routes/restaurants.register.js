import { Router } from "express";
import { 
    register,
    getMyRestaurant,
} from "../Register/register.controller.js";
import { verifyToken } from "../../Authentication/AuthServices/jwt.js";
const restaurant = Router();

restaurant.post('/register', verifyToken, register)
//getMyRestaurant
restaurant.get('/getMyRestaurant', verifyToken, getMyRestaurant)

export default restaurant;