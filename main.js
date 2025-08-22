import { readFileSync } from "node:fs";

/**
 * Calculates the average of an array of numbers.
 * @param {number[]} nums - The array of numbers to average.
 * @returns {number | NaN} The average of the numbers.
 */
function average(nums) {
  if (nums.length === 0) {
    return NaN;
  }

  const total = nums.reduce((acc, curr) => acc + curr, 0);
  return total / nums.length;
}

/**
 * Sums two values.
 * @param {number} a - The first value.
 * @param {number} b - The second value.
 * @returns {number} The sum of the two values.
 */
function sumTwoValues(a, b) {
  return a + b;
}

function sayHello(name) {
  if (!name) {
    throw new Error("Name is required");
  }
  return `Hello, ${name}!`;
}

export { average, sumTwoValues, sayHello };
