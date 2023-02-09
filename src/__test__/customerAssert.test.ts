import React from "react";

test("同步自定义匹配器", () => {
  const toBeBetweenZeroAndTen = (num: number) => {
    if (num >= 0 && num <= 10) {
      return {
        message: () => "",
        pass: true,
      };
    } else {
      return {
        message: () => "expected num to be a number between zero and ten",
        pass: false,
      };
    }
  };

  expect.extend({
    toBeBetweenZeroAndTen,
  });

  expect(8).toBeBetweenZeroAndTen();
  expect(8).not.toBeBetweenZeroAndTen();
});
