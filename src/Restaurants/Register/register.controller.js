import {
    registerquery,
    getMyRestaurants
} from "../Register/register.module.js";
import { verifyToken } from "../../Authentication/AuthServices/jwt.js";
import restaurant from "../Routes/restaurants.register.js";

export async function register(req, res) {
    try{
        const {name, description, email, contact, res_type } = req.body;
        const owner_id = req.user.id;

        console.log("owner_id => ", owner_id);

        const user = await registerquery( owner_id, name, description,  contact, email, res_type) 
        console.log("user => ", user);
        
        return res.status(200).json({
        success: true,
        message: "Register Successfully",
        user: {
            id:         "         "+user.id,
            name:       "       "+user.name,
            email:      "      "+user.email,
            contact:    "    "+user.contact, 
        }
    })
    }
    catch(err){
        console.error("ERROR => ",err)
    }
}

export async function getMyRestaurant(req,res) {
    try{
        const owner_id = req.user.id;
        
        const result = await getMyRestaurants(owner_id);
        if(!result){
            return res.status(401).json(
                {
                    success:false,
                    message: "No Restaurant Found! Register Now!"
                }
            )
        }

        return res.status(200).json({
            success:true,
            message:"Registered Restaurants :",
            result:{
                ResturantName:  result.name,
                Description:    result.description,
                Email:          result.email,
                contact:        result.contact,
                Type:           result.res_type
            }
        })
        
    } catch(err){
    console.err("Error => ", err);
}
}