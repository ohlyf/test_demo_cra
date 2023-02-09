import React from "react";

test("错误抛出", () => {
  const throwError = () => {
    const err = new Error("console err：this is a test error");
    throw err;
  };

  expect(throwError).toThrow();
  expect(throwError).toThrowError();

  const catchError = () => {
    try {
      const err = new Error("console err：this is a test error");
      throw err;
    } catch (err) {
      console.log(err);
    }
  };
  expect(catchError).not.toThrow();
  expect(catchError).not.toThrowError();
});
