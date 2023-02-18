/** Dto */

const raceDto = require("../../model/dto/race.dto");


exports.createRace = (req, res, next) => {
    let race = {
        code: race.code,
        common_name: race.common_name,
        scientific_name: race.scientific_name,
        characteristics: race.characteristics,
        origin: race.origin,
        size: race.size,
        character: race.character

    };
    raceDto.create(race, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }

    });
};

exports.updateRace = (req, res, next) => {
    let race = {
        code: race.code,
        common_name: race.common_name,
        scientific_name: race.scientific_name,
        characteristics: race.characteristics,
        origin: race.origin,
        size: race.size,
        character: race.character
    };
    raceDto.update({ _id: req.body.id }, race, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }

    });
};

exports.getAll = (req, res, next) => {
    raceDto.getAll({}, (err, data) => {
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

exports.deleteRace = () => {
    raceDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.status(204).json();
    });
};
