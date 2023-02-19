/** Dto */

const raceDto = require("../../model/dto/race.dto");

exports.createRace = (req, res, next) => {
    let race = {
        code: req.body.code,
        common_name: req.body.common_name,
        scientific_name: req.body.scientific_name,
        characteristics: req.body.characteristics,
        origin: req.body.origin,
        size: req.body.size,
        character: req.body.character,
    };
    raceDto.create(race, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err
                }
            );
        };
        res.status(201).json(
            {
                info: data,
            }
        );
    });
};

exports.updateRace = (req, res, next) => {
    let race = {
        code: req.body.code,
        common_name: req.body.common_name,
        scientific_name: req.body.scientific_name,
        characteristics: req.body.characteristics,
        origin: req.body.origin,
        size: req.body.size,
        character: req.body.character
    };
    raceDto.updateOne({ _id: req.body.id }, race, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        };
        res.status(201).json(
            {
                info: data,
            }
        );
    });
};

exports.getAll = (req, res, next) => {
    raceDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        };
        res.status(200).json({
            info: data,
        });
    });
};

exports.getByCode = (req, res, next) => {
    raceDto.getByCode({ code: req.params.code }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.status(200).json({
            info: data,
        });
    });
};

exports.deleteRace = (req, res, next) => {
    raceDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err,
                }
            );
        }
        res.status(204).json();
    });
};
