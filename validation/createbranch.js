const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateBranchRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  
  
  
  
  data.branchname = !isEmpty(data.branchname) ? data.branchname : "";
  data.branchaddress = !isEmpty(data.branchaddress) ? data.branchaddress : "";
  data.branchincharge = !isEmpty(data.branchincharge) ? data.branchincharge : "";
  data.branchdate = !isEmpty(data.branchdate) ? data.branchdate : "";
  data.branchcontact = !isEmpty(data.branchcontact) ? data.branchcontact : "";

  // Name checks
  if (Validator.isEmpty(data.branchname)) {
    errors.branchname = "Branch name is required";
  }

  // Email checks
  if (Validator.isEmpty(data.branchaddress)) {
    errors.branchaddress = "Branch address is required";
  } 

  // Password checks
  if (Validator.isEmpty(data.branchincharge)) {
    errors.branchincharge = "Please set an incharge to branch";
  }
/* 
  if (Validator.isEmpty(data.branchdate)) {
    errors.branchdate = "Please provide opening date of branch";
  } */
  if (Validator.isEmpty(data.branchcontact)) {
    errors.branchcontact = "Please provide branch contact number";
  }


  return {
    errors,
    isValid: isEmpty(errors)
  };
};
