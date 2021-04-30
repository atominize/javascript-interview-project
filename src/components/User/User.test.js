import React from "react";
import App from "../../App";
import {
  getByTestId,
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";

describe("#User", () => {
  describe("#AppBar", () => {
    test("should have github project as title", () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <App />
        </Router>
      );

      expect(screen.getByText(/Github Project/i)).toBeInTheDocument();
    });
  });

  describe("#Welcome Message", () => {
    test("should have welcome as welcome message", () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <App />
        </Router>
      );

      expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    });
  });

  describe("#Input Label", () => {
    test("should ask users to enter github username", () => {
      const history = createMemoryHistory();
      render(
        <Router history={history}>
          <App />
        </Router>
      );

      expect(
        screen.getByText(/Please Enter Your Github Username/i)
      ).toBeInTheDocument();
    });
  });

  describe("#Error Message", () => {
    test("should display error message if user click user on submit without entering github username", () => {
      const history = createMemoryHistory();
      const { getByTestId } = render(
        <Router history={history}>
          <App />
        </Router>
      );

      const submitBtn = getByTestId("submit-btn");
      const inputUsername = getByTestId("input-username");
      expect(inputUsername.parentElement.parentElement.childElementCount).toBe(
        2
      );
      act(() => {
        fireEvent.click(submitBtn);
      });
      expect(inputUsername.parentElement.parentElement.childElementCount).toBe(
        3
      );
    });

    test("should display error message if user input an invalid github username", async () => {
      const history = createMemoryHistory();
      const { getByTestId } = render(
        <Router history={history}>
          <App />
        </Router>
      );
      const inputUsername = getByTestId("input-username");
      const submitBtn = getByTestId("submit-btn");
      act(() => {
        fireEvent.input(inputUsername, {
          target: {
            value: "atominiz",
          },
        });
      });

      expect(inputUsername.parentElement.parentElement.childElementCount).toBe(
        2
      );
      act(() => {
        fireEvent.click(submitBtn);
      });
      await waitFor(() => {
        expect(
          inputUsername.parentElement.parentElement.childElementCount
        ).toBe(3);
      });
    });
  });
});
