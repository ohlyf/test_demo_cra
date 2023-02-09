import React from "react";

test("表单测试", () => {
  // 数组单元验证
  // toContain(value)：判断某个值是否存在在数组中
  expect([1, 2, 3]).toContain(1);
  // arrayContaining(value)：匹配接收到的数组，与toEqual结合使用可以用于判断某个数组是否是另一个数组的子集
  expect([1, 2, 3]).toEqual(expect.arrayContaining([1, 2]));
  // toContainEqual(value)：判断某个对象元素是否在数组中
  expect([{ a: 1, b: 2 }]).toContainEqual({ a: 1, b: 2 });
  // toHaveLength(value)：断言数组的长度
  expect([1, 2, 3]).toHaveLength(3);
  // toHaveProperty(value)：断言对象中是否包含某个属性，针对多层级的对象可以通过xx.yy的方式进行传参断言
  const testObj = {
    prop1: 1,
    prop2: {
      child1: 2,
      child2: "test",
    },
  };
  expect(testObj).toHaveProperty("props1");
  expect(testObj).toHaveProperty("props2.child1");
});
