workingWithIntegers = function () {
  const myNumber = 42;
  return myNumber;
};

workingWithIntegersArithmetic = function () {

  const numberOne = 10;
  const numberTwo = 10;

  return numberOne + numberTwo;
};

workingWithIntegersMultiplication = function () {

  const numberOne = 10;
  const numberTwo = 10;

  return numberOne * numberTwo;
};

workingWithStrings = function () {
  const myString = "I love potatoes";
  return myString;
};

/**
 * Pure integer arrays
 */
workingWithIntArrays = function () {
  const myArray = [ 1, 2, 34, 55, 666, 123412415 ];
  return myArray;
};

/**
 * Arrays can have mixed types in them
 */
workingWithMixedArrays = function () {
  const myArray = [ 1, 2, 123412415, "cabbages", 34, 55, 666 ];
  return myArray;
};

/**
 * Javascript objects are cool
 */
workingWithObjects = function () {
  const myObject = {greeting: "Hello", age: 20, "city": "Liverpool"};
  return myObject;
};

module.exports = {
  workingWithIntegers,
  workingWithIntegersArithmetic,
  workingWithIntegersMultiplication,
  workingWithStrings,
  workingWithIntArrays,
  workingWithMixedArrays,
  workingWithObjects
};
