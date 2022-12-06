const moment = require("moment");

function checkCardValidity(exp) {
  const re = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
  if (exp == "" || exp == undefined, exp == null) {
    return "please provide a expiry date.";
  } else if (!re.test(exp)) {
    return "please provide a valid expiry date format."
  } else {
    const expDate = moment(exp, "MMYY").endOf("month");
    const currentDate = moment();
    return currentDate.isSameOrBefore(expDate);
  }
}

module.exports = checkCardValidity