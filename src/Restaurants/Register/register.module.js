import poolconn from "../../Connectivity/config.js";
export async function registerquery( owner_id, name, description,  contact, email, res_type ) {
    const [res] = await poolconn.query(
        `INSERT INTO Restaurants (
        owner_id,
        name,
        description,
        contact,
        email, 
        res_type
        )
        VALUES (?,?,?,?,?,?)`,
        [owner_id, name, description, contact, email, res_type]
    );

    const [user] = await poolconn.query(
        "SELECT * FROM Restaurants WHERE id = ?",
        [res.insertId]
    )
    console.log("user => ", user);
    return user[0];
}

export async function getMyRestaurants(owner_id) {
    const [res] = poolconn.query(
        `SELECT * FROM Restaurants WHERE owner_id = ?`
        [owner_id]
    )
    return res[0];
}
