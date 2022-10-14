"use strict";

function solveEquation(a, b, c) {
  let arr;
  let disc = Math.pow(b, 2) - 4 * a * c;
  if (disc < 0) {
    arr = [];
  } else if (disc === 0) {
    arr = [Number(-b / (2 * a).toFixed(2))];
  } else if (disc > 0) {
    let subArr = [];
    subArr.push(Number(((-b + Math.sqrt(disc)) / (2 * a)).toFixed(2)));
    subArr.push(Number(((-b - Math.sqrt(disc)) / (2 * a)).toFixed(2)));
    arr = subArr;
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
