import { render, screen } from "@testing-library/react";
import App from "./App";
import { checkRego, checkLicence } from "./utils";

test("renders main page", () => {
  render(<App />);
  const linkElement = screen.getByText(/Turners Car Insurance/i);
  expect(linkElement).toBeInTheDocument();
});

test("check Rego", () => {
  const rego = "ABC13$";
  expect(checkRego(rego)).toEqual(false);
});

test("check Licence", () => {
  // more than 8 character
  const licence = "ABC133424";
  expect(checkLicence(licence)).toEqual(false);
});
