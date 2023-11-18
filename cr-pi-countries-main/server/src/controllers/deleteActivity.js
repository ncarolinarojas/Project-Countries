const { Activity } = require('../db');

const deleteActivity = async (req, res) => {
    const { id } = req.params;
  
    try {
      await Activity.destroy({ where: { id } });
      const allActivities = await Activity.findAll();
  
      res.status(200).json(allActivities);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

module.exports = {
    deleteActivity
}