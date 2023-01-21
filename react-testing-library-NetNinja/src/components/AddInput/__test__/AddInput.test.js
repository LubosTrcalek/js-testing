import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

const mockedSetTodo = jest.fn();

describe("AddInput", () => {
    it("should render input element", () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
        const inputElement = screen.getByPlaceholderText(/add a new task here.../i); // regex syntax
        expect(inputElement).toBeInTheDocument();
    });

    it("if we type something into input, the value should change", () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
        const inputElement = screen.getByPlaceholderText("Add a new task here...");
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } });
        expect(inputElement.value).toBe("Go Grocery Shopping");
    });

    it("should have empty input when add button is clicked", () => {
        render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
        const inputElement = screen.getByPlaceholderText("Add a new task here...");
        const buttonElement = screen.getByRole("button", { name: /Add/i });
        fireEvent.change(inputElement, { target: { value: "Go Grocery Shopping" } }); // Change input target text value to String
        fireEvent.click(buttonElement); // Click the button
        expect(inputElement.value).toBe(""); // When the button is clicked, value of input should be ("")
    });
});
