import mysql from "mysql2/promise.js";

const poolconn  =  mysql.createPool(
    {
    host: "localhost",
    user: "root",
    password: "root123",
    database: "HungryHop",

    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
})
async function getconnection() {
    try{
        await poolconn.getConnection();
        console.log("DataBase Connected");
    }
    catch(err){
        console.error("Error => ", err);
    }
}
getconnection();

export default poolconn;
// import mysql from "mysql2";

// const connection = mysql.createConnection(
//     {
//         host: "localhost",
//         user: "root",
//         password: "root123",
//         database: "HungryHop",
//     }
// )
// connection.connect((err) => {
//     if(err){
//         console.log("Connection Failed");
//     }
//     else {
//         console.log("DataBase Connected")
//     }
// })
// export default connection;