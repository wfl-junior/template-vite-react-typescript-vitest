import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("App", () => {
  it("should render hello world", () => {
    render(<App />);
    expect(screen.getByText(/Hello World/i)).toBeInTheDocument();
  });
});
