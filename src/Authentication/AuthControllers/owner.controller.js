import { createUser, getUser, findUserByEmail } from "../AuthModules/owner.module.js";
import { passwordHashing, compareHashing } from '../AuthServices/password.hashing.js';
import { createToken } from '../AuthServices/jwt.js';

export async function signup(req,res) {
    try{
    const {name, email, password, contact} = req.body;

        // password --> hashed password
       const hashedpassword = await passwordHashing(password);

        const user = await createUser(name, email, hashedpassword, contact);

    return res.status(200).json({
        success: true,
        message: "User Created Successfully",
        user: {
            id:         "         "+user.id,
            name:       "       "+user.name,
            email:      "      "+user.email,
            contact:    "    "+user.contact, 
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

        //input from user
        const { email, password } = req.body;

        //find user 
        const user = await findUserByEmail( email );

        if(!user){
            return res.status(401).json({
                success: false,
                message: "No User Found!"
            })
        }

        //compare password
        const isPasswordMatch = await compareHashing(password, user.password)

        //wrong Password check
        if(!isPasswordMatch){
            return res.status(200).json({
            success:false,
            message: "Invalid Email or Password"
        })
    }

        //success
        else{
        //gen token
        const token = createToken(user.id, user.email);
        console.log("token passed =>", token);
        return res.status(200).json({
            success:true,
            message: "User Logged in Successfully",
             user: {
            id:         "         "+user.id,
            name:       "        "+user.name,
            email:      "      "+user.email,
            contact:    "    "+user.contact,
            token:      "      "+token
        }
        })
    }
}
    //Internal Server Error
    catch(err){
           console.error("Error => ", err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
            error: err.message
        }) 
    }
}
