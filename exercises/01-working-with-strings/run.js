workingOldSchool = function () {
  const yourUniversity = "Warwick";
  return "This is how students at " + yourUniversity + " used to do it";
};

workingWithFancyInterpolation = function () {
  const yourUniversity = "Warwick";
  /* eslint-disable quotes */
  return `This is how we at ${yourUniversity} do it now`;
};

module.exports = {
  workingOldSchool,
  workingWithFancyInterpolation
};
