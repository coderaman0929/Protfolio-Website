import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactSection } from "@/components/sections/ContactSection";

describe("ContactSection Component", () => {
  it("renders form headings and input fields", () => {
    render(<ContactSection />);
    expect(screen.getByPlaceholderText("Your name")).toBeDefined();
    expect(screen.getByPlaceholderText("your@email.com")).toBeDefined();
    expect(screen.getByPlaceholderText("Tell me about your project or idea…")).toBeDefined();
  });

  it("shows validation error on empty submit", async () => {
    render(<ContactSection />);
    const submitBtn = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText("Name is required")).toBeDefined();
      expect(screen.getByText("Email is required")).toBeDefined();
      expect(screen.getByText("Message is required")).toBeDefined();
    });
  });

  it("validates empty and invalid input states", async () => {
    render(<ContactSection />);
    const submitBtn = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText("Name is required")).toBeDefined();
      expect(screen.getByText("Email is required")).toBeDefined();
      expect(screen.getByText("Message is required")).toBeDefined();
    });
  });
});
