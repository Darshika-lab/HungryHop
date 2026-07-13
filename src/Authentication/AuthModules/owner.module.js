import poolconn from "../../Connectivity/config.js";
// create User
export async function createUser(name, email, hpassword, contact){
    
    const [result] = await poolconn.query(
        "INSERT INTO owner (name, email, password, contact) VALUES (?, ?, ?, ?)",
        [name, email, hpassword, contact]
    );

    const [user] = await poolconn.query(
        "SELECT * FROM owner WHERE id = ?",
        [result.insertId]
    )

    return user[0];
}

//Login user
export async function getUser( email, password ) {
    
    const [checkuser] = await poolconn.query(
        "SELECT * FROM owner WHERE email = ? AND password = ? ",
        [email,password]
    )
    console.log("checkuser => ", checkuser);
    return checkuser[0];
}

export async function findUserByEmail( email ) {
    
    const [userFound] = await poolconn.query(
        "SELECT * FROM owner WHERE email = ? ",
        [email]
    )
    return userFound[0];
}