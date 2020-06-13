const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema

const ttSchema = new Schema({
  ref_batchid: {
    type: String,
    required: true
  },
  tt: {
    d1 : [{time1 : Date,time2 : Date}],
    d2 : [{time1 : Date,time2 : Date}],
    d3 : [{time1 : Date,time2 : Date}],
    d4 : [{time1 : Date,time2 : Date}],
    d5 : [{time1 : Date,time2 : Date}],
    d6 : [{time1 : Date,time2 : Date}],
    d7 : [{time1 : Date,time2 : Date}]
  },
  coachid: {
    type: String,
    required: true
  },
  createdtt: {
    type: Date,
    default: Date.now
  },
  effecttt: {
    type: Date,
    required : true
  },
  ttactivestatus: {
    type: Boolean,
    required : true,
    default : true
  }
});

module.exports = tt = mongoose.model("tt", ttSchema);
