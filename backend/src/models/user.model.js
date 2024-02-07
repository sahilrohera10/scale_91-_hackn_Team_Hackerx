const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
    {
        name :{
            required :true,
            type:String,
            trim:true,
        },
        upi_id:{
            required:true,
            type:String,
            trim:true,
            unique:true,
        },
        phone_no:{
            required :true,
            type:String,
            trim:true,
        },
       
    },
{ timestamps: true });
const user_db = mongoose.model('users',userSchema);
module.exports = user_db;