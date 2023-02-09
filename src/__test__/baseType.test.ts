import exp from "constants";
import React from "react";

describe("基础类型的比较", () => {
  it("tobe", () => {
    // tobe
    expect(1 + 1).toBe(2);
  });

  it("notToBe", () => {
    // not
    expect(1 + 1).not.toBe(3);
  });

  it("boolean", () => {
    // boolean
    expect(true).toBe(true);
    expect(true).toBeTruthy();
    expect(false).toBeFalsy();
  });

  it("undefined", () => {
    // undefined
    expect(undefined).toBe(undefined);
    expect(undefined).not.toBeDefined();
    expect(undefined).toBeUndefined();
  });

  it("function", () => {
    const test = () => {
      console.log("11");
      return;
    };

    expect(test()).toBeUndefined();
  });

  it("double", () => {
    // expect(0.2 + 0.1).toBe(0.3);
    // 表示足够精确
    expect(0.2 + 0.1).toBeCloseTo(0.3);
  });

  it("NaN", () => {
    expect(NaN).toBe(NaN);
    expect(NaN).toBeNaN();
  });

  it("+0 -0", () => {
    expect(+0).not.toBe(-0);
  });
});
