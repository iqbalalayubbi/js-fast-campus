import { test, expect } from "@jest/globals";
import { sumTwoValues, average, sayHello } from "./main";

test("should sum two values correctly", () => {
  expect(sumTwoValues(2, 3)).toBe(5);
  expect(sumTwoValues(-1, 1)).toBe(0);
});

test("should calculate average correctly", () => {
  expect(average([1, 2, 3, 4, 5])).toBe(3);
  expect(average([5, 10, 15])).toBe(10);
  expect(average([])).toBe(NaN);
});

test("should greet a user with their name", () => {
  expect(sayHello("Alice")).toBe("Hello, Alice!");
  expect(sayHello("Bob")).toBe("Hello, Bob!");
});

test("not empty string", () => {
  expect(() => sayHello("")).toThrow("Name is required");
});
