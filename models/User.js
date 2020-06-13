const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
   
  },
  password: {
    type: String,
    required: true
  },
  datejoin: {
    type: Date,
    default: Date.now
  },
  contact: {
    type: String,
    required: true
  },
  usertype  : {
    type: String,
    default: "parent"
  },
  activestatus: {
    type: String,
    required: true
  },
  photopath: {
    type: String,
  },
  inchargebranches : [],
  userbranches: [],
  userbatches: [],
  studententity : []
});

module.exports = User = mongoose.model("users", UserSchema);
