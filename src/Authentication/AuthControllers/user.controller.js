// export const signup = async(req,res) => {

// }
// export async function signup(req,res) {
    
// }

import { createUser, getUser } from '../AuthModules/user.module.js';

export async function signup(req,res) {
    try{
    const {userName, email, password, contact } = req.body;
    const user = await createUser(userName, email, password, contact);

    return res.status(200).json({
        success: true,
        message: "User Created Successfully",
        user: {
            id:         "         "+user.id,
            userName:   "   "+user.userName,
            email:      "      "+user.email,
            contact:    "    "+user.contact    
        }
    })
}
    catch(err){
        console.error("Error => ", err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message
        })
    }
}


export async function login(req,res) {
    try{
        const { email, password } = req.body;
        const user = await getUser(email, password)
        if(!user){
            return res.status(200).json({
            success:false,
            message: "Invalid Email or Password"
        })
    }
        else{
        return res.status(200).json({
            success:true,
            message: "User Logged in Successfully",
             user: {
            id:         "         "+user.id,
            userName:   "   "+user.userName,
            email:      "      "+user.email,
            contact:    "    "+user.contact    
        }
        })
    }
}
    catch(err){
           console.error("Error => ", err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message
        }) 
    }
}
