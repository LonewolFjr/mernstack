const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateBatchRegisterInput(data) {
  let errors = {};
  // Convert empty fields to an empty string so we can use validator functions
  data.batchname = !isEmpty(data.batchname) ? data.batchname : "";
  data.ref_branchid = !isEmpty(data.ref_branchid) ? data.ref_branchid : "";
  data.coachid = !isEmpty(data.coachid) ? data.coachid : "";
  data.standardfee = !isEmpty(data.standardfee) ? data.standardfee : "";

  // Name checks
  if (Validator.isEmpty(data.batchname)) {
    errors.batchname = "batch name is required";
  }

  // Email checks
  if (Validator.isEmpty(data.ref_branchid)) {
    errors.ref_branchid = "Please select a valid branch name";
  } 

  // Password checks
  if (Validator.isEmpty(data.coachid)) {
    errors.coachid = "Please set a coach to batch";
  }
  // Password checks
  if (Validator.isEmpty(data.standardfee)) {
    errors.standardfee = "Please set fee amount";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
