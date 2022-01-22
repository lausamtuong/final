const User = require("../models/User");
const bcrypt = require("bcryptjs");
const authController = {
  register: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);
      // new user
      const newUser = await new User({
        username: req.body.username,
        password: hash,
        email: req.body.email,
        password__orgin:req.body.password,
        monney: 10000,
        // save
      });
      const user = await newUser.save();
      res.status(200).json("Save to db success");
    } catch (error) {
      res.status(401).json(error);
    }
  },
  login: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username });
      if (!user) res.status(401).json("Wrong username");
      const validatePassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validatePassword) res.status(404).json("Wrong password");
      if (user && validatePassword) {
        const { password, ...others } = user._doc;
        res.status(200).json({ others });
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = authController;
