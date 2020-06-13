const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function succeserretvalidator(data) {
  let succeserret = {};

    succeserret.sucstring = "Data Updated Successfully !";
  


  return {
    succeserret,
    isValidsuc: isEmpty(succeserret)
  };
};
