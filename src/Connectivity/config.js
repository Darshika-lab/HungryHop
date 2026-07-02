import mysql from "mysql2";

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "root123",
        database: "HungryHop",
    }
)
connection.connect((err) => {
    if(err){
        console.log("Connection Failed");
    }
    else {
        console.log("DataBase Connected")
    }
})
export default connection;