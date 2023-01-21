import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

// Mock todo with browser router fixes the problem with the Link
const MockTodo = () => {
    return (
        <BrowserRouter>
            <Todo />
        </BrowserRouter>
    );
};

const addTask = (tasks) => {
    const inputElement = screen.getByPlaceholderText(/add a new task here.../i); // Input for todo item
    const buttonElement = screen.getByRole("button", { name: /Add/i }); // Buton to add todo to list

    tasks.forEach((task) => {
        fireEvent.change(inputElement, { target: { value: task } }); // Change input value to task value
        fireEvent.click(buttonElement); // Click on the button and add the todo to list
    });
};

describe("Todo Component", () => {
    it("should render same text passed into the title prop", () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping"]);
        const divElement = screen.getByText(/go grocery shopping/i); // Get the div element of added todo
        expect(divElement).toBeInTheDocument(); // If it passes, our todo item exists, and everything is alright
    });

    it("should render multiple todo items", () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping", "Pet my cat", "Wash my hands"]);
        const divElements = screen.getAllByTestId("task-container"); // Get all todo elements by test id
        expect(divElements.length).toBe(3); // If the length of the list is 3, then everything went correctly
    });

    it("task should not have completed class when initially rendered", () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping"]);
        const divElement = screen.getByText(/go grocery shopping/i);
        expect(divElement).not.toHaveClass("todo-item-active");
    });

    it("task should have completed class when clicked", () => {
        render(<MockTodo />);
        addTask(["Go Grocery Shopping"]);
        const divElement = screen.getByText(/Go Grocery Shopping/i);
        fireEvent.click(divElement);
        expect(divElement).toHaveClass("todo-item-active");
    });
});
