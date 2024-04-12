import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  it("should render", () => {
    render(<App />);
    const heading = screen.getByText("What is your Hogwarts House?");
    expect(heading).toBeVisible();
  });

  it("should show the first set of quiz options when the start button is clicked", async () => {
    render(<App />);
    const button = screen.getByRole("button");
    expect(button).toBeVisible();

    //screen.logTestingPlaygroundURL(); note: if you want to see the DOM at any stage of rerendering, use this!

    await userEvent.click(button);

    const question = screen.getByText(
      "You would be most hurt if a person called you..."
    );
    expect(question).toBeVisible();
  });
});
