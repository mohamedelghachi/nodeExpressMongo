const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EquipeSchema = new Schema({
    id:{
        type:Number,
        required:[true,'id field is required']
    },
    name:{
        type:String,
        required:[true,'name field is required']
    },
    country:{
        type:String,
        required:[true,'country field is required']
    }
})

const Equipe = mongoose.model('equipe',EquipeSchema)
module.exports = Equipe