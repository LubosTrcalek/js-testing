class Stack {
    constructor() {
        this.top = -1;
        this.items = {};
    }

    get peek() {
        if (this.items) {
            return this.items[this.top];
        }
    }

    push(value) {
        this.top += 1;
        this.items[this.top] = value;
    }

    pop() {
        if (this.items) {
            delete this.items[this.top];
            this.top -= 1;
        }
    }
}

describe("My Stack", () => {
    let stack;
    /**
     * Before every new test, create new Stack instance.
     * Better than initiating new Stack in every test.
     */
    beforeEach(() => {
        stack = new Stack();
    });

    it("is created empty", () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toStrictEqual({});
    });

    it("can push to the top", () => {
        stack.push("🥑");
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe("🥑");

        stack.push("🌽");
        expect(stack.top).toBe(1);
        expect(stack.peek).toBe("🌽");
    });

    it("can pop off", () => {
        stack.push("🥑");
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe("🥑");

        stack.push("🌽");
        expect(stack.top).toBe(1);
        expect(stack.peek).toBe("🌽");

        stack.pop();
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe("🥑");

        stack.pop();
        expect(stack.top).toBe(-1);
        expect(stack.items).toStrictEqual({});
    });
});
