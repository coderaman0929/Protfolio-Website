import { describe, it, expect } from "vitest";
import { cn } from "@/lib/utils";

describe("Utility Functions", () => {
  describe("cn() - Tailwind class merger", () => {
    it("combines class names correctly", () => {
      expect(cn("bg-red-500", "text-white")).toBe("bg-red-500 text-white");
    });

    it("handles conditional classes", () => {
      expect(cn("base", true && "active", false && "hidden")).toBe("base active");
    });

    it("resolves tailwind conflicts", () => {
      expect(cn("px-2 py-1", "p-4")).toBe("p-4");
    });

    it("handles empty / undefined / null inputs", () => {
      expect(cn("base", undefined, null, "")).toBe("base");
    });
  });

  describe("Email Validation Pattern", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    it("validates legitimate email addresses", () => {
      expect(emailRegex.test("soniaman0018@gmail.com")).toBe(true);
      expect(emailRegex.test("user.name+tag@domain.co.in")).toBe(true);
    });

    it("rejects invalid email addresses", () => {
      expect(emailRegex.test("invalid-email")).toBe(false);
      expect(emailRegex.test("user@")).toBe(false);
      expect(emailRegex.test("@domain.com")).toBe(false);
      expect(emailRegex.test("")).toBe(false);
    });
  });
});
