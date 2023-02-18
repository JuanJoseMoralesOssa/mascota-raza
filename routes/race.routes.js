const controller = require("../controller/logic/race.controller");

module.exports = (app) => {
    app.get("/race", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/race/bycode/:code", (req, res, next) => {
        controller.getByCode(req, res, next);
    });

    app.post("/race", (req, res, next) => {
        controller.createRace(req, res, next);
    });

    app.put("/race", (req, res, next) => {
        controller.updateRace(req, res, next);
    });

    app.delete("/race", (req, res, next) => {
        controller.deleteRace(req, res, next);
    });
};
