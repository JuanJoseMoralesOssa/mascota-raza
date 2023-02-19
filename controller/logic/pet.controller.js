/** Dto */

const petDto = require("../../model/dto/pet.dto");


exports.createPet = (req, res, next) => {
    let pet = {
        race_id: req.body.race_id,
        code: req.body.code,
        name: req.body.name,
        sex: req.body.sex,
        birth_date: req.body.birth_date,
        color: req.body.color,
        type: req.body.type,
        weight: req.body.weight,
        sterilized: req.body.sterilized,
        specie: req.body.specie,
    };
    petDto.create(pet, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err,
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

exports.updatePet = (req, res, next) => {
    let pet = {
        code: pet.code,
        common_name: pet.lastname,
        scientific_name: pet.document,
        characteristics: pet.characteristics,
        origin: pet.origin,
        size: pet.size,
        character: pet.character
    };
    petDto.updateOne({ _id: req.body.id }, pet, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err,
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

exports.getAll = (req, res, next) => {
    petDto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err,
                }
            );
        }
        res.status(200).json(
            {
                info: data,
            }
        );
    });
};

exports.getByCode = (req, res, next) => {
    petDto.getByCode({ code: req.params.code }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err,
                }
            );
        };
        res.status(200).json(
            {
                info: data,
            }
        );
    });
};

exports.deletePet = (req, res, next) => {
    petDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json(
                {
                    error: err,
                }
            );
        };
        res.status(204).json();
    });
};
