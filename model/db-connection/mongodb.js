/** Packages */

const mongoose = require("mongoose");
const config = require("config");

const mongodbInfo = config.get("db-connections.mongodb")

// User: rest_api_user
// Connection string: mongodb+srv://rest_api_user:<password>@cluster0.ko7quag.mongodb.net/?retryWrites=true&w=majority

const connStr = `mongodb+srv://${mongodbInfo.user}:${mongodbInfo.password}@${mongodbInfo.host}/${mongodbInfo.dbname}?retryWrites=true&w=majority`;
console.log(connStr);
module.exports = () => {
    mongoose.connect(connStr);
    mongoose.connection.on("connected", () => {
        console.log("Server Connected")
    })
    mongoose.connection.on("disconnected", () => {
        console.log("Server Disconnected")
    })
    mongoose.connection.on("error", (e) => {
        console.log("Server Connection Error")
        console.log(e)
    })
    mongoose.connection.on("SIGINT", () => {
        console.log("Server Connection Shutting Down")
    })
}