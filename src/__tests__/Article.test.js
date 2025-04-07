import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Article from "../components/Article";
test("displays the text 'please pass this test'", () => {
  render(<Article />);

  // add this line
  screen.debug();

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});