import { render, screen } from "@testing-library/react";

import { App } from ".";

describe("test", () => {
  it("renders an App", () => {
    render(<App />);
    screen.getByText(/count: 0/);
  });
});
