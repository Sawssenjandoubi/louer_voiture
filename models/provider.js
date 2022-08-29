const mongoose = require('mongoose');
const schema = mongoose.Schema;
const providerSchema = new schema ({
    nom :{
        type : String,
        required : true ,
    },
    prenom :{
        type : String,
        required:true,
    },
    cin:{
        type:Number,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    tel:{
        type:Number,
        required:true,
    },
    ville:{
        type:String,
        required:true,
    },
    dateNaissance:{
        type:String,
        required:true,
    },
   
    nomAgence:{
        type:String,
        required:true,
    },
    fax:{
        type:Number,
        required:true,
    },
    isBanned:{
        type:Boolean,
        default:false,
       
    },
    motPass:{
        type:String,
        required:true,
    },
},{timestamps:true});
module.exports = mongoose.model('providers',providerSchema);