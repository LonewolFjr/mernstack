const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateBranchRegisterInput = require("../../validation/createbranch");
const validateBatchRegisterInput = require("../../validation/createbatch");

// Load User model
const User = require("../../models/User");
const BranchModel = require("../../models/Branch");
const BatchModel = require("../../models/Batch");
const ttModel = require("../../models/timetable");




// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/creattt", (req, res) => {
  // Form validation

  
  return res.status(400).json({ message: "TIme table creation API" });
  //save new data
  const newBatchModel = new BatchModel({
    batchname: req.body.batchname,
    ref_branchid: req.body.ref_branchid,
    coachid: req.body.coachid,
    batchactivestatus: false,
    standardfee: req.body.standardfee,
  });
  

});
router.post("/viewbatch", (req, res) => {
  // Form validation
  // Check User right validation

  BatchModel
    .find({})
    .then(user => res.json(user))
    .catch(err => console.log(err));
});

module.exports = router;