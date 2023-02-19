/** Packages */
const mongoose = require("mongoose");

/** Schema Creation */
const raceSchema = new mongoose.Schema({
    code:{
        type: "String",
        required: true
    },
    common_name:{
        type: "String",
        required: true
    },
    scientific_name:{
        type: "String",
        required: true
    },
    characteristics:{
        type: "String",
        required: true
    },
    origin:{
        type: "String",
        required: true
    },
    size:{
        type: "String",
        required: true
    },
    character:{
        type: "String",
        required: true
    }
});

module.exports = raceSchema;
