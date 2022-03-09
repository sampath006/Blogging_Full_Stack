const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    photo:{
        type:String,
        required:false
    },
    description:{
        type:String,
        required:true
    },
    prize:{
        type:String,
        required:false
    }
},{timestamps:true});

module.exports = mongoose.model("Event",EventSchema);