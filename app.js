/** packages */
const express = require('express');
const config = require('config');
const bodyParser = require('body-parser');
const db = require('./model/db-connection/mongodb')

/** app configuration */
const app = express();
const port = config.get('server-port');
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true }
);

app.use(jsonParser);
app.use(urlEncodedParser);


const ipFn = require('./middleware/getIpAddress')
app.use("*", ipFn);

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Bienvenido a mascota y raza rest api");
});

// Pets Routes Loading
const petRoutes = require("./routes/pet.routes");
petRoutes(app);

// Races Routes Loading
const raceRoutes = require("./routes/race.routes");
raceRoutes(app);

app.listen(port, () => {
    console.log("Server is running...");
    db();
});
