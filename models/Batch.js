const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const Batchschema = new Schema({
  batchname: {
    type: String,
    required: true
  },
  ref_branchid: {
    type: String,
    required: true
  },
  arrstudent: [String],
  coachid: {
    type: String,
    required: true
  },
  batchcreatedon: {
    type: Date,
    default: Date.now
  },
  batchactivestatus : {
    type : Boolean
  }
});

module.exports = Batch = mongoose.model("batch", Batchschema);
