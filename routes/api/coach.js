const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/coachregister", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ contact: req.body.contact }).then(user => {
    if (user) {
      return res.status(400).json({ contact: "Contact already exists" });
    } else {
      const newUser = new User({
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        activestatus: '0',
        usertype: 'coach',
        contact: req.body.contact
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});


// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/adminregister", (req, res) => {
  // Form validation

  const { errors, isValid } = validateRegisterInput(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        activestatus: '0',
        usertype: 'admin',
        contact: req.body.contact
      });
      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/coach/seeall
// @desc Login user and return JWT token
// @access Public
router.post("/viewcoach", (req, res) => {
  // Form validation
  // Check User right validation
  User.find({usertype : "coach" , activestatus : {$ne : "deactivated"}}).then(user => res.json(user))
    .catch(err => console.log(err));
});

// @route POST api/coach/seeall
// @desc Login user and return JWT token
// @access Public
router.post("/addbranchtocoach", (req, res) => {
  // Form validation
  // Check User right validation
  const userbatches = req.body.branchid

  User
    .findOneAndUpdate(
      { _id: "5ed3690b7266f131347f4be6" },
      {
        $push: {
          userbranches: "userbatches"
        }
      })
    .then(user => res.json(user))
    .catch(err => console.log(err));
  return res.json(userbatches);
});


// @route POST api/coach/seeall
// @desc Login user and return JWT token
// @access Public
router.post("/deletecoach", (req, res) => {
  // Form validation
  // Check User right validation
  const coachid = req.body.coachid

  User
    .remove({ "_id": coachid})
    .then(user => res.json(user))
    .catch(err => console.log(err));
 // return res.json(coachid);
});



module.exports = router;
