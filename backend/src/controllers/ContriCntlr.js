const contri_model = require("../models/contri.model");

async function createContri(req, resp) {
  try {
    console.log("cdffd");
    const data = req.body;
    console.log("data=>", data);
    const newContri = await contri_model.create({
      contri_name: data.contri_name,
    });
    // const upi_id_list = data.upi_id_list;
    const members = data.member.map((upi_id) => {
      return {
        upi_id: upi_id.upi_id,
        amt: 0,
        name: upi_id.name,
      };
    });

    newContri.member = members;
    newContri.save();
    console.log("done contri");
    return resp
      .status(200)
      .json({ msg: "Contri created successfully", data: newContri });
  } catch (error) {
    return resp.status(500).json(error);
  }
}

async function getContri(req, resp) {
  const status = req.params.status;
  try {
    const contri = await contri_model.find({ status: status });
    
    return resp.status(200).json({ data: contri });
  } catch (error) {
    return resp.status(500).json(error);
  }
}

async function getMembersByContriId(req, resp) {
  const contriId = req.params.contriId;
  console.log(contriId);
  try {
    const contriExists = await contri_model.findById(contriId);
    console.log(contriExists);
    if (!contriExists) {
      return resp.status(404).json({ msg: "Contri not found" });
    }
    const members = contriExists.member;
    return resp.status(200).json({ members: members });
  } catch (error) {
    return resp.status(500).json(error);
  }
}

module.exports = {
  createContri,
  getContri,
  getMembersByContriId,
};
