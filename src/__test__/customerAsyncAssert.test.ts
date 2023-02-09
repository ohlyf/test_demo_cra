import React from "react";

test("异步自定义匹配器", async () => {
  debugger;
  const toBeBetweenZeroAndTen = async (num: number) => {
    const res = await new Promise<{ message: () => string; pass: boolean }>(
      (resolve) => {
        setTimeout(() => {
          if (num >= 0 && num <= 10) {
            resolve({
              message: () => "",
              pass: true,
            });
          } else {
            resolve({
              message: () => "expected num to be a number between zero and ten",
              pass: true,
            });
          }
        }, 1000);
      }
    );
    return (
      res || {
        message: () => "expected num to be a number between zero and ten",
        pass: false,
      }
    );
  };
  expect.extend({
    toBeBetweenZeroAndTen,
  });

  await expect(8).toBeBetweenZeroAndTen();
  await expect(11).not.toBeBetweenZeroAndTen();
});
