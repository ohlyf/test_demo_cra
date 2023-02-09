import React from "react";

test("引用类型的比较", () => {
  // toBe指向同一指针  toEqual深度比较   toEqual同样可以用于基础类型比较
  const a = { obj1: { name: "obj1", obj2: { name: "obj2" } } };
  const b = Object.assign(a);
  const c = JSON.parse(JSON.stringify(a));

  expect(a).toBe(b);
  expect(a).not.toBe(b);
  expect(a).toEqual(b);
  expect(a).toEqual(c);
});
