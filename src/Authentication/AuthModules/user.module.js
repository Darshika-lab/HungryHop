import poolconn from "../../Connectivity/config.js";
// create User
export async function createUser(userName, email, hpassword, contact){
    
    const [result] = await poolconn.query(
        "INSERT INTO users (userName, email, password, contact) VALUES (?, ?, ?, ?)",
        [userName, email, hpassword, contact]
    );

    const [user] = await poolconn.query(
        "SELECT * FROM users WHERE id = ?",
        [result.insertId]
    )

    return user[0];
}

//Login user
export async function getUser( email, password ) {
    
    const [checkuser] = await poolconn.query(
        "SELECT * FROM users WHERE email = ? AND password = ? ",
        [email,password]
    )
    console.log("checkuser => ", checkuser);
    return checkuser[0];
}

export async function findUserByEmail( email ) {
    
    const [userFound] = await poolconn.query(
        "SELECT * FROM users WHERE email = ? ",
        [email]
    )
    return userFound[0];
}