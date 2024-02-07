const transaction_model = require('../models/transaction.model');
const contri_model = require('../models/contri.model');


async function settleTransaction(req,resp){
    console.log('settleTransaction')
    try {
        const contri_id = req.params.contri_id; 
        console.log(contri_id)
        const contri = await contri_model.findById(contri_id);
        console.log(contri);
    //    
        if (!contri) {
            return resp.status(404).json({ message: 'Contribution not found.' });
        }

        const total_members = contri.member.length;
        const totalAmount = contri.member.reduce((acc, member) => acc + member.amt, 0);
        const avgAmount = totalAmount/total_members
        

        
        // console.log(totalAmount/total_members)

        return resp.status(200).json({ totalAmount: totalAmount, averageAmount: avgAmount, members: contri.member}) 
    } catch (error) {
        return resp.status(500).json(error);
    }
}


async function pay_now(req, resp) {
    const data = req.body;
    try {
        const { from_upi_id, amount_to_pay, countri_id, avgAmount } = data;
        const countri = await contri_model.findById(countri_id);

        const member = countri.member;

        for (let i = 0; i < member.length; i++) {
            const currentMember = member[i];
            
            if (currentMember.upi_id !== from_upi_id && currentMember.amt > avgAmount) {
                const balanceAmt = currentMember.amt - avgAmount;
                const remainingAmt = amount_to_pay - balanceAmt;

                if (remainingAmt >= 0) {
                    await contri_model.findOneAndUpdate(
                        { "member.upi_id": currentMember.upi_id },
                        {
                            $set: {
                                "member.$.amt": avgAmount,
                            },
                        }
                    );
                } else {
                    await contri_model.findOneAndUpdate(
                        { "member.upi_id": currentMember.upi_id },
                        {
                            $set: {
                                "member.$.amt": currentMember.amt - amount_to_pay,
                            },
                        }
                    );
                }

                if (remainingAmt === 0) {
                    break;
                }
            }
        }
    } catch (error) {
        console.error(error);
        return resp.status(500).json(error);
    }
}



module.exports = {
    settleTransaction,
};