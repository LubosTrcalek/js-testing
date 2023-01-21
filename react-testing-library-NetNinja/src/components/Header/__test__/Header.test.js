import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
    it("should render same text as passed into title prop", () => {
        render(<Header title={"My Header"} />);
        const headingElement = screen.getByText(/my header/i);
        expect(headingElement).toBeInTheDocument(); // Assertions
    });
});

/**
 * findAllBy
 * findBy
 * getAllBy
 * getBy
 * */

// it("should render same text as passed into title prop", () => {
//     render(<Header title={"My Header"} />);
//     // this fails, because it returns 2 headings, which leads to ERROR in getBy method
//     const headingElement = screen.getByRole("heading");
//     expect(headingElement).toBeInTheDocument();
// });

// it("should render same text as passed into title prop", () => {
//     render(<Header title={"My Header"} />);
//     const headingElement = screen.getByRole("heading", { name: "My Header" });
//     expect(headingElement).toBeInTheDocument();
// });

// it("should render same text as passed into title prop", () => {
//     render(<Header title={"My Header"} />);
//     const headingElement = screen.getByTitle("Header");
//     expect(headingElement).toBeInTheDocument();
// });

// it("should render same text as passed into title prop", () => {
//     render(<Header title={"My Header"} />);
//     const headingElement = screen.getByTestId("header-1");
//     expect(headingElement).toBeInTheDocument();
// });

// // FIND BY over GET BY when we need something async
// it("should render same text as passed into title prop", async () => {
//     render(<Header title={"My Header"} />);
//     const headingElement = await screen.findByText(/my header/i);
//     expect(headingElement).toBeInTheDocument();
// });

// // QUERY BY
// it("should render same text as passed into title prop", async () => {
//     render(<Header title={"My Header"} />);
//     const headingElement = screen.queryByText(/my hesader/i);
//     expect(headingElement).not.toBeInTheDocument();
// });

// // GET ALL BY
// it("should render same text as passed into title prop", async () => {
//     render(<Header title={"My Header"} />);
//     const headingElements = screen.getAllByRole("heading");
//     expect(headingElements.length).toBe(2);
// });
