const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ArrDue = new Schema ({
  dateofdue : Date , 
  amountexpected : Integer,
  duestatus : String 
})
const feesschema = new Schema({
  tt_ref_student: {
    type: String,
    required: true
  },
  tt_ref_batchid: {
    type: String,
    required: true
  },
  DiscountOffered: {
    type: Double,
    required: true,
    default: 0
  },
  Discountamt: {
    type: Double,
    required: true,
    default: 0
  },
  Discountcode: {
    type: String,
    required: true
  },
  ArrDuedatesPairedwithAmt: [ArrDue],
  feestatus : {
    type: String,
    default : "pending"
  }
  ,
  ManualCleanranceReason : {
    type: String,
    default : "pending"
  },
  DateOfFeeChaged:{
    type : Date,
    required : true
  },
  PreviousfeeId :{
    type : String 
  }
});

module.exports = fees = mongoose.model("fees", feesschema);
