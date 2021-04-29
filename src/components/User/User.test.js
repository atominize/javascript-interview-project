import React from "react";
import App from "../../App";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

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
});
