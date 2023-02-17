import React from "react";
import { render, screen } from "@testing-library/react";
import { DomExpect } from "../components/DomExpect";
import exp from "constants";

describe("test for DOM断言", () => {
  test("visible validation", () => {
    render(<DomExpect />);
    const emptyNote = screen.getByRole("generic", { name: "empty_note" });
    const [hiddenNote] = screen.getAllByRole("note", { hidden: true });
    const normalNote = screen.getByRole("note");
    expect(emptyNote).toBeEmptyDOMElement();
    expect(hiddenNote).not.toBeVisible();
    expect(normalNote).toHaveTextContent(/1/i);
    expect(emptyNote).toBeInTheDocument();
    expect(hiddenNote).toBeInTheDocument();
    expect(normalNote).toBeInTheDocument();
  });
});
