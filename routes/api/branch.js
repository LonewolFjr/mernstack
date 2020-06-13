const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateBranchRegisterInput = require("../../validation/createbranch");
const validateBatchRegisterInput = require("../../validation/createbatch");
const succeserretvalidator = require("../../validation/successer");

// Load User model
const User = require("../../models/User");
const BranchModel = require("../../models/Branch");
const BatchModel = require("../../models/Batch");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/createbranch", (req, res) => {
  // Form validation

  const { errors, isValid } = validateBranchRegisterInput(req.body);
  const { succeserret, isValidsuc } = succeserretvalidator(req.body);
  var flag = true;
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  } /* else {
    // return res.status(400).json({ email: "checking create branch api" });
  } */
  //save new data
  const newBranchModel = new BranchModel({
    branchname: req.body.branchname,
    branchaddress: req.body.branchaddress,
    branchincharge: req.body.branchincharge,
    activestatus: "0",
    branchcontact: req.body.branchcontact,
  });

  newBranchModel
    .save()
    .then(/* user => res.json(user) */)
    .catch(err => console.log(err));
  return res.status(400).json(succeserret)
  /* return res.status(200).json({a : "No errors"}); */
});

router.post("/viewbranch", (req, res) => {
  // Form validation
  // Check User right validation
  BranchModel.find({}).then(user => res.json(user))
    .catch(err => console.log(err));
});

router.post("/branchfetcher", (req, res) => {
  const id = req.body.id
  var userdoc = {};
  var newdoc = {}
  // Check User right validation
  /*   BranchModel.find({branchincharge : id}).then(user => res.json(user))
      .catch(err => console.log(err)); */
  /* newdoc = BatchModel.distinct("ref_branchid",function(error, results){
            console.log(results,userdoc)
          }), */
          BranchModel.find({}).then(user => res.json(user))
          .catch(err => console.log(err));
  /* BatchModel.distinct("ref_branchid",{_id : id}).then(console.log("it works")) */
});
// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/createbatch", (req, res) => {
  // Form validation

  const { errors, isValid } = validateBatchRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  } else {
    // return res.status(400).json({ message: "checking create batch api" });
  }

  /* batchname
ref_branchid
coachid
standardfee */
  //save new data
  const newBatchModel = new BatchModel({
    batchname: req.body.batchname,
    ref_branchid: req.body.ref_branchid,
    coachid: req.body.coachid,
    batchactivestatus: false,
    standardfee: req.body.standardfee,
  });
  //updating branch in user colelction forcoach array 
  var lastid = '';
  newBatchModel
    .save()
    .then(function () {

      //Add branch and batch to coach
      const batchid = lastid
      const coachid = req.body.coachid

      User
        .findOneAndUpdate(
          { _id: coachid },
          {
            $push: {
              userbatches: batchid
            }
          })
        .then(function () {

          User.findOne({
            _id: coachid,
            "userbranches": req.body.ref_branchid
          }).then(doc => {
            if (!doc) {

              //add branch here 
              User
                .findOneAndUpdate(
                  { _id: coachid },
                  {
                    $push: {
                      userbranches: req.body.ref_branchid
                    }
                  })
                .then(res.json("Added branch"))
            } else {
              //dont add any branch 
              res.json("Not added branch")
            }
          }
          )
        })
        .catch(err => console.log(err));

    })
    .catch(err => console.log(err))
    ;
  newBatchModel
    .on('save', function (lastinsert) {
      console.log("Darth Vader's ID: " + lastinsert._id);
      lastid = lastinsert._id;
      //return res.status(400).json({ message: "Batch created successfully" });

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

// @route POST api/coach/seeall
// @desc Login user and return JWT token
// @access Public
router.post("/addbatchtocoach", (req, res) => {
  // Form validation
  // Check User right validation
  const batchid = req.body.batchid
  const coachid = req.body.coachid

  User
    .findOneAndUpdate(
      { _id: coachid },
      {
        $push: {
          userbatches: batchid
        }
      })
    .then(res.json(batchid + " added to coach id " + coachid))
    .catch(err => console.log(err));
  // return res.json(userbatches);
});
// @route POST api/coach/seeall
// @desc Login user and return JWT token
// @access Public
router.post("/deletecoach", (req, res) => {
  // Form validation
  // Check User right validation
  const coachid = req.body.coachid

  User
    .remove({ "_id": coachid })
    .then(user => res.json(user))
    .catch(err => console.log(err));
  // return res.json(coachid);
});
// @route POST api/coach/seeall
// @desc Login user and return JWT token
// @access Public
router.post("/deletebranch", (req, res) => {
  /* return res.json("a"); */
  // Form validation
  // Check User right validation
  const branchid = req.body.branchid
  console.log("i reached till here");/* return res.json(branchid); */

  BranchModel
    .remove({ "_id": branchid })
    .then(user => res.json(user))
    .catch(err => console.log(err));
  // return res.json(coachid);
});
module.exports = router;