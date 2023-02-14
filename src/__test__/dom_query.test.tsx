import React from "react";
import { render, screen } from "@testing-library/react";
import { DomQuery } from "../components/DomQuery";

describe("tests for DOM查询", () => {
  test("get & query & find", () => {
    render(<DomQuery />);
    const getElement = screen.getByText("test1");
    const getAllElement = screen.getAllByText(/test/i);
    const queryElement = screen.queryByText("test3");
    const queryAllElement = screen.queryAllByText("test3");
    // debugger;
  });
  test("default role", () => {
    render(<DomQuery />);
    const button = screen.getByRole("button", { pressed: true });
    const btn = screen.getByRole("tab");
    const btn1 = screen.getByRole("button", {
      description: "自定义aria按钮",
    });
  });
  test("aria-label", () => {
    render(<DomQuery />);
    const note = screen.getByRole("generic", { name: "test_note" });
  });
});
