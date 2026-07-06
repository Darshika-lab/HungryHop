import poolconn from "../../Connectivity/config.js";
// create User
export async function createUser(userName, email, password, contact){
    
    const [result] = await poolconn.query(
        "INSERT INTO users (userName, email, password, contact) VALUES (?, ?, ?, ?)",
        [userName, email, password, contact]
    );

    const [user] = await poolconn.query(
        "SELECT * FROM users WHERE id = ?",
        [result.insertId]
    )

    return user[0];
}

//Login user
export async function getUser( email, password) {
    
    const [checkuser] = await poolconn.query(
        "SELECT * FROM users WHERE email = ? AND password = ? ",
        [email,password]
    )
    console.log("checkuser => ", checkuser);
    return checkuser[0];
}