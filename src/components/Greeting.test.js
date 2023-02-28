import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders Hello World as a text", () => {
    // Arrange
    render(<Greeting />);

    // act
    // ... nothing

    // Assert
    // exact:false -> 느낌표때문에.. 좀 더 포괄전인?
    const helloWorldElement = screen.getByText("Hello World", { exact: false });
    //   const helloWorldElement = screen.getByText("Hello World");

    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'good to see you' if the button was NOT clicked", () => {
    // Arrange
    render(<Greeting />);

    // act
    // ... nothing

    // Assert
    const outputElement = screen.getByText("It's good to see you!");

    expect(outputElement).toBeInTheDocument();
  });

  test("renders 'Changed!' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // act
    // 버튼을 클릭했을때!
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does not render 'good to see you' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // act
    // 버튼을 클릭했을때!
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    // queryByText -> 엘리먼트가 찾아지지 않는다면 null을 반환함.
    const outputElement = screen.queryByText("good to see you", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
