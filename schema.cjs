const mongoose = require('mongoose')

const restaurantsSchema = new mongoose.Schema({
    areaName : {
        type : String
    },
    avgRating : {
        type : Number
    },
    costForTwo : {
        type : String
    },
    cuisines : {
        type : Array
    },
    imageLink:{
        type : String
    },
    name : {
        type : String
    }  
})
const Restaurant = mongoose.model('restaurantList', restaurantsSchema)

module.exports = {Restaurant}