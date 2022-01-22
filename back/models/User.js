const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    password__orgin: {
      type: String,
      require: true,
    },
    
    monney:{
      type: Number,
    },
    admin: {
      type: Boolean,
      defaul: false,
    },
  },
  { timestamp: true }
);
module.exports =  mongoose.model("User",userSchema)