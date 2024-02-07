const mongoose = require('mongoose');
const transactionSchema = mongoose.Schema(
    {
        From_upi_id:{
            required :true,
            type:String,
            trim:true,
        },
        To_upi_id:{
            required:true,
            type:String,
        },
        From_name:{
            required :true,
            type:String,
            trim:true,
        },
        To_name:{
            required :true,
            type:String,
            trim:true,
        },
        Amt_detail:{
            required :true,
            type:String,
            trim:true,
        },
        Remarks:{
            required :true,
            type:String,
            trim:true,
        },
        Labels:{
            required :true,
            enum: ["Groceries", "Shopping","Electronics","Entertainment","Others"], 
            type:String,
            trim:true,
        },
        Labels_type:{
            required :true,
            enum: ["Personal", "Contri"], 
            type:String,
            trim:true,
        },
        contri_id:{
            type:String,
            trim:true,
        },
       
    },
{ timestamps: true });
const transaction_db = mongoose.model('transactions',transactionSchema);
module.exports = transaction_db;