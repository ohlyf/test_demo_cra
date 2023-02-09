import React from "react";

test("数字符号", () => {
  // >
  expect(3).toBeGreaterThan(2);
  // <
  expect(3).toBeLessThan(4);
  // >=
  expect(3).toBeGreaterThanOrEqual(3);
  // <=
  expect(3).toBeLessThanOrEqual(3);
});
