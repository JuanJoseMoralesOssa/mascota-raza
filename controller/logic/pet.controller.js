/** Dto */

const petDto = require("../../model/dto/pet.dto");


exports.createPet = (req, res, next) => {
    let pet = {
        race_id: pet.race_id,
        code: pet.code,
        name: pet.name,
        sex: pet.sex,
        characteristics: pet.birth_date,
        colour: pet.colour,
        type: pet.type,
        weight: pet.weigth,
        sterilized: pet.sterilized,
        specie: pet.specie

        

    };
    petDto.create(pet, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }

    });
};

exports.updatePet = (req, res, next) => {
    let pet = {
        race_id: pet.race_id,
        code: pet.code,
        name: pet.name,
        sex: pet.sex,
        characteristics: pet.birth_date,
        colour: pet.colour,
        type: pet.type,
        weight: pet.weigth,
        sterilized: pet.sterilized,
        specie: pet.specie
    };
    petDto.update({ _id: req.body.id }, pet, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }

    });
};

exports.getAll = (req, res, next) => {
    petDto.getAll({}, (err, data) => {
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
    petDto.getByCode({ code: req.params.code }, (err, data) => {
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

exports.deletePet = () => {
    petDto.delete({ _id: req.body.id }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.status(204).json();
    });
};
