import { fireEvent, render, screen } from "@testing-library/react";
import TransactionCreateStepTwo from "components/TransactionCreateStepTwo";
import userEvent from "@testing-library/user-event";

// Unit tests.
describe("TransactionCreateStepTwo UNIT TESTS", () => {
    it("on initial render, tha pay button is disabled", async () => {
        render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "8" }} />);
        expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled(); // Assertion

        // screen.debug(); // Console.log the HTML document and everything
        // screen.getByRole('') // Throws error, but shows us possible roles and better structured way of debugging
    });

    it("if the amount and note is enteret, the button should be enabled", async () => {
        render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "8" }} />);

        // Two ways of firing event.
        fireEvent.change(screen.getByPlaceholderText(/amount/i), { target: { value: "50" } });
        fireEvent.change(screen.getByPlaceholderText(/add a note/i), {
            target: { value: "Dinner" },
        });
        // userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
        // userEvent.type(screen.getByPlaceholderText(/add a note/i), "Dinner");

        expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
    });
});

// Integration test
describe("TransactionCreateStepTwo INTEGRATION TEST", () => {
    it("integration test: StepTwo integration flow", async () => {
        render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "8" }} />);
        expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled(); // Assertion

        userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
        userEvent.type(screen.getByPlaceholderText(/add a note/i), "Dinner");

        expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
    });
});

/**
 * End-to-end test. E2E test
 * Fun to write. Simluation is happenin on a screen.
 * Tets that really matter. High value features.
 * Tech: Cypress
 */
