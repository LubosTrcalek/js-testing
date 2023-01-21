import { screen, render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowerList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    );
};

describe("FollowersList.js component", () => {
    beforeEach(() => {
        console.log("RUNNING BEFORE EACH TEST");
    });

    beforeAll(() => {
        console.log("RUNNING ONCE BEFORE ALL TESTS");
    });

    afterEach(() => {
        console.log("RUNNING AFTER EACH TEST");
    });

    afterAll(() => {
        console.log("RUNNING ONCE AFTER ALL TESTS");
    });

    it("should render first follower element", async () => {
        render(<MockFollowerList />);
        const followerDivElement = await screen.findByTestId("follower-item-0"); // Async functions -- findBy..
        // screen.debug(); // Console log the data..

        expect(followerDivElement).toBeInTheDocument();
    });

    it("should render first follower", async () => {
        render(<MockFollowerList />);
        const followerDivElement = await screen.findByTestId("follower-item-0"); // Async functions -- findBy..
        // screen.debug(); // Console log the data..
        expect(followerDivElement).toBeInTheDocument();
    });

    it("should render first follower", async () => {
        render(<MockFollowerList />);
        const followerDivElement = await screen.findByTestId("follower-item-0"); // Async functions -- findBy..
        // screen.debug(); // Console log the data..
        expect(followerDivElement).toBeInTheDocument();
    });

    // it("should render 5 followers", async () => {
    //     render(<MockFollowerList />);
    //     const followerDivElement = await screen.findAllByTestId(/follower-item/i); // Regex for follower-item-0,1,2...
    //     expect(followerDivElement.length).toBe(5);
    // });
});
