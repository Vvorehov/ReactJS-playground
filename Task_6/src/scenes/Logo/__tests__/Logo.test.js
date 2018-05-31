import React from "react";
import { render } from "enzyme";
import { Logo } from "../Logo";

it("renders correctly Logo", () => {
  const test = render(<Logo siteName='Logo' />);
  expect(test).toMatchSnapshot();
});