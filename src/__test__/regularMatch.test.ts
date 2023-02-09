import React from "react";

test("正则匹配", () => {
  // toMatch(regexp)：匹配字符串是否能够满足正则的验证
  //  toMatchObj(value)：验证对象是否包含value的全部属性
  expect("this is a regexp validation").toMatch(/validation/);
  const obj = { prop1: "test", prop2: "regexp validation" };
  const childObj = { prop1: "test" };
  expect(obj).toMatchObject(childObj);
});
