import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import ModalPage from "../ModalPage";
import { MemoryRouter } from "react-router-dom";

// afterEach function runs after each test suite is executed
afterEach(() => {
  cleanup(); // Resets the DOM after each test suite
});

describe("Modal page", () => {
  // Test 1
  test("Open Modal", async () => {
    render(
      <MemoryRouter>
        <ModalPage />
      </MemoryRouter>
    );
    const modal = screen.getByTestId("modal");
    const openButton = screen.getByTestId("openButton");
    fireEvent.click(openButton);
    expect(modal).toBeVisible();
  });

  // Test 2
  test("Close Modal with backdrop", async () => {
    render(
      <MemoryRouter>
        <ModalPage />
      </MemoryRouter>
    );
    const backdrop = screen.getByTestId("backdrop");
    const modal = screen.getByTestId("modal");
    const openButton = screen.getByTestId("openButton");
    fireEvent.click(openButton);
    fireEvent.click(backdrop);
    expect(modal.style.visibility).toBe("hidden");
  });

  // Test 3
  test("Close Modal with button", async () => {
    render(
      <MemoryRouter>
        <ModalPage />
      </MemoryRouter>
    );
    const closeButton = screen.getByTestId("closeButton");
    const modal = screen.getByTestId("modal");
    const openButton = screen.getByTestId("openButton");
    fireEvent.click(openButton);
    fireEvent.click(closeButton);
    expect(modal.style.visibility).toBe("hidden");
  });

  // Test 4
  test("Close Modal with Escape", async () => {
    render(
      <MemoryRouter>
        <ModalPage />
      </MemoryRouter>
    );
    const modal = screen.getByTestId("modal");
    const openButton = screen.getByTestId("openButton");
    fireEvent.click(openButton);
    fireEvent.keyDown(document, { key: "Escape" });
    expect(modal.style.visibility).toBe("hidden");
  });

  // Test 5
  test("Content rendering", async () => {
    render(
      <MemoryRouter>
        <ModalPage />
      </MemoryRouter>
    );
    const openButton = screen.getByTestId("openButton");
    const content = screen.getByTestId("content");
    fireEvent.click(openButton);
    expect(content).toBeInTheDocument();
  });
});
