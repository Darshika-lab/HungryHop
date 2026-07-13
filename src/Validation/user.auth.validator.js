import { body } from 'express-validator';

export const signupValidation = 
[
    body("userName")
    .notEmpty()
    .withMessage("UserName Cannot Be Empty")
    .isLength({min: 2, max: 10})
    .withMessage("UserName Must be u > 2 && u < 8")
,
    body("email")
    .notEmpty()
    .withMessage("UserName Cannot Be Empty")
    .isEmail()
    .withMessage("Must Be an Valid Email formate: mail@example.com")
,
    body("password")
    .notEmpty()
    .withMessage("Password Cannot Be Empty")
    .isLength({min: 8, max: 12})
    .withMessage("Password Must be p > 8 && p < 12")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/)
    .withMessage(
      "Password must contain uppercase, lowercase, number, and special character [@$!%*?&]"
    )
,      
]

export const loginValidation = 
[
    body ("email")
    .notEmpty()
    .withMessage("UserName Cannot Be Empty")
    .isEmail()
    .withMessage("Must Be an Valid Email formate: mail@example.com")
,

    body("password")
    .notEmpty()
    .withMessage("Password Cannot Be Empty")      
]