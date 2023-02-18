/** Packages */
const mongoose = require("mongoose");

/** Schema Creation */
const petSchema = new mongoose.Schema({
    race_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_race",
        required: true
    },
    code:{
        type: "String",
        required: true,
        unique: true
    },
    name:{
        type: "String",
        required: true
    },
    sex:{
        type: "String",
        required: true
    },
    birth_date:{
        type: "String",
        required: true
    },
    colour:{
        type: "String",
        required: true
    },
    type:{
        type: "String",
        required: true
    },
    weight:{
        type: "Number",
        required: true
    },
    sterilized:{
        type: "Boolean",
        required: true
    },
    specie:{
        type: "String",
        required: true
    }
});

module.exports = petSchema;