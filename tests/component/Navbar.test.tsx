import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Navbar } from "@/components/layout/Navbar";

describe("Navbar Component", () => {
  it("renders the logo and brand name", () => {
    render(<Navbar />);
    expect(screen.getByText("Aman")).toBeDefined();
  });

  it("renders navigation items", () => {
    render(<Navbar />);
    expect(screen.getByText("Home")).toBeDefined();
    expect(screen.getByText("About")).toBeDefined();
    expect(screen.getByText("Projects")).toBeDefined();
    expect(screen.getByText("Skills")).toBeDefined();
    expect(screen.getByText("Contact")).toBeDefined();
  });

  it("renders the resume CTA download button", () => {
    render(<Navbar />);
    const resumeBtn = screen.getByText("Resume");
    expect(resumeBtn).toBeDefined();
  });
});
