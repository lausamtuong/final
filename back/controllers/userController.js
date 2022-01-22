const User = require("../models/User");

const useController = {
  //GET ALL USER
  
  updateUser: async (req, res) => {
    try {
    var item = {
        monney: req.body.monney
    }
      const user = await User.findByIdAndUpdate(req.params.id,item);
      res.status(200).json("update success");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
module.exports = useController;