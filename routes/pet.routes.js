const controller = require("../controller/logic/pet.controller");

module.exports = (app) => {
    app.get("/pet", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/pet/bycode/:code", (req, res, next) => {
        controller.getByCode(req, res, next);
    });

    app.post("/pet", (req, res, next) => {
        controller.createPet(req, res, next);
    });

    app.put("/pet", (req, res, next) => {
        controller.updatePet(req, res, next);
    });

    app.delete("/pet", (req, res, next) => {
        controller.deletePet(req, res, next);
    });
};
