const user_model = require("../models/user.model");
const transaction_model = require("../models/transaction.model");
const contri_model = require("../models/contri.model");

async function createUser(req,resp){
    try {
        // const body = {
        //     user_name: req.body.name,
        //     upi_id: req.body.upi_id,
        //     phone_no: req.body.phone_no,
            
        // };
        const user = await user_model.create(req.body);
        return resp.status(200).json({msg:"Successfully registered", data: user});

    } catch (error) {
        return resp.status(500).json(error);
    }
}

async function createTransaction(req, resp){
    try {
      
        const transaction = await transaction_model.create(req.body);
        

        if(req.body.contri_id){
            const contri = await contri_model.findOne(req.body.contri_id);
            const member = contri.member.map(upi_id => {return upi_id.upi_id == req.body.From_upi_id}) 
            member.amt += req.body.Amt;
            contri.save();
        }
        return resp.status(200).json({msg:"Successfully registered", data:transaction});

    } catch (error) {
        return resp.status(500).json(error);
    }
}

async function getTransactionByMemberUpiId(req, resp){
    const upi_id = req.params.upi_id;
    console.log(upi_id);
try {
    const transaction = await transaction_model.find({From_upi_id:upi_id});
    return resp.status(200).json({transaction: transaction});
    
} catch (error) {
    return resp.status(500).json(error);
    
}

}

module.exports = {
    createUser,
    createTransaction,
    getTransactionByMemberUpiId,
};
