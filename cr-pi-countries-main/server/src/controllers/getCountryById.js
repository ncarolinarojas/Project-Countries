const { Country, Activity } = require("../db");


const getCountryById = async (req, res) => {
  const { id } = req.params;

  try {
    const idResponse = await Country.findOne({
      where: { id: id },
      include: Activity,
    });

    if (!idResponse) {
      res.status(404).send({ msg: "Id country not found" });
    } else {
      res.status(200).send(idResponse);
    }
  } catch (err) {
    res.status(500).send({ msg: "Error getting data" });
  }
};


module.exports = {
  getCountryById
};