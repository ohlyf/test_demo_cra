import React from "react";
import { render, screen } from "@testing-library/react";
import { DomExpect } from "../components/DomExpect";

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

  test("form validation without semi", () => {
    render(<DomExpect />);
    const form = screen.getByRole("form");
    const username = screen.getByRole("textbox");
    const age = screen.getByRole("spinbutton");
    const manCheckbox = screen.getByRole("radio", { checked: true });
    const womanCHeckbox = screen.getByRole("radio", { checked: false });
    expect(username).toBeDisabled();
    expect(age).toBeEnabled();
    expect(age).toBeRequired();
    age.focus();
    expect(age).toHaveFocus();
    expect(manCheckbox).toBeChecked();
    expect(womanCHeckbox).not.toBeChecked();
    expect(form).toHaveFormValues({
      username: "alien",
      age: 23,
      sex: "man",
    });
    expect(age).toHaveValue(23);
  });
});
