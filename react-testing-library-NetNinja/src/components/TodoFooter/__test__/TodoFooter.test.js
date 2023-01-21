import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    );
};

describe("TodoFooter", () => {
    describe("Function 1", () => {
        it("should render mock todo footer", () => {
            render(<MockTodoFooter numberOfIncompleteTasks={5} />);
            const paragraphElement = screen.getByText(/5 tasks left/i);
            expect(paragraphElement).toBeInTheDocument(); // Assertion
        });
    });

    describe("Function 2", () => {
        it("should render render mock todo footer with 1 todo left", () => {
            render(<MockTodoFooter numberOfIncompleteTasks={1} />);
            const paragraphElement = screen.getByText(/1 task left/i);
            expect(paragraphElement).toBeInTheDocument(); // Assertion
        });
    });
});

// it("should render render mock todo footer with 1 todo left", () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toBeVisible(); // Assertion
// });

// it("should render render mock todo footer with 1 todo left", () => {
//     render(<MockTodoFooter numberOfIncompleteTasks={1} />);
//     const paragraphElement = screen.getByText(/1 task left/i);
//     expect(paragraphElement).toContainHTML("p"); // Assertion
// });
