const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Userinfo = new Schema({
  ref_userid: {
    type: String,
    required: true
  },
  parentname: {
    type: String,
  },
  parentcontact: {
    type: String,
  },
  useraddress: {
    type: String,
  },
  parentid: {
    type: String,
  },
  dob: {
    type: String,
  },
  blood: {
    type: String,
  }
});

module.exports = Userinfo = mongoose.model("userinfo", UserinfoSchema);
