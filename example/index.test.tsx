import { render, screen } from "@testing-library/react";

import { App } from ".";

describe.only("test", () => {
  test("renders an App", () => {
    render(<App />);
    screen.getByText(/count: 0/);
  });
});
