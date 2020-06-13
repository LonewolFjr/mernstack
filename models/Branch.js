const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BranchSchema = new Schema({
  branchname: {
    type: String,
    required: true
  },
  branchaddress: {
    type: String,
    required: true
  },
  branchincharge: {
    type: String,
    required: true
  },
  activestatus: {
    type: String,
    required: true,
    default: '0'
  },
  branchcontact: {
    type: String,
    required: true
  },
  branchcreatedon: {
    type: Date,
    default: Date.now
  }
});

module.exports = Branch = mongoose.model("branch", BranchSchema);
