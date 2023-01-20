# js-testing
Jest, Cypress, Puppeteer.

# Testing

**PROJECTS:**

1. *JSTesting\test-demo*
    1. [Test-Driven Development // Fun TDD Introduction with JavaScript -- Fireship](https://www.youtube.com/watch?v=Jv2uxzhPFl4)
2. *JSTesting\jest-testing*
    1. [Introduction To Testing In JavaScript With Jest -- Web Dev Simplified](https://www.youtube.com/watch?v=FgnxcUQ5vho) 
3. *JSTesting\js-testing-introduction*
    1. [JavaScript Testing Introduction Tutorial - Unit Tests, Integration Tests & e2e Tests](https://www.youtube.com/watch?v=r9HdJ8P6GQI)

## **Why Test?**

1. Get an error if we break code
2. save time
3. think about possible bugs and issues
4. integrate into build workflow
5. break up complex dependencies - modular code, testing is easier
6. **improve our code**
7. Testovanie je dobré v prípade, keď meníme svoj kód a vedeli sme, že všetko funguje aj po zmene ako má. 
    1. Keď testy prejdú tak je všetko v poriadku
    2. Ak testy neprejdú niečo sa pokazilo a vieme, kde to máme opraviť
8. **Automatické testovanie nám uľahčuje prácu** s tým, že nemusíme manuálne kontrolovať všetky funkcie pred deploynutím do production appky

## Jest

[https://jestjs.io/](https://jestjs.io/)

[https://docs.expo.dev/guides/testing-with-jest/](https://docs.expo.dev/guides/testing-with-jest/)

- Jest is **extremely popular** and ****************powerful**************** testing framework for javascript
    - because it is also **test runner (e.g. Mocha)** and has assertation libary **(e.g. Chai) in ONE testing framework**
    - really powerful and fun to work with

### **Test-Driven Development (TDD)**

You write your **test first** before implementing a code.

RED → GREEN → REFACTOR

Error → Passed → Refactor/optimize

### Functional testing - Tests that test actual code

**Unit Tests** - easy - write thousands of these

- A unit test is used to check the **smallest unit of code**, usually a function.
- Short and simple
- We want to check one single thing at a time (mostly a function)
- e.g. techs: **Jest,** Mocha

**Integration Tests** - medium - write a good couple of these

- with dependencies
- result of a function depends on another function
- e.g. techs: **Jest,** Chai

**End-to-End Testing (best one probably)** - complex - write a few of these

- full flow
    - validating the DOM after a click
- simulate actual user behaviour
- Complex integrations
- e.g. techs: **Puppeteer, Cypress**

### Non-functional testing

- Performance
- Usability
- Security
- Stress testing

### Question: Implement a STACK without using a JS array

- Tech: **Vitejs, Cypress, Jest**

**Vite** 

- is a build tool that aims to provide a faster and leaner development experience for modern web projects.

```jsx
npm create vite@latest
...
npm install --save-dev jest // only in development dependencies of our project
```

**Jest**

- watchwatchAll
    - Watch files for changes and rerun all tests when something changes
- watch
    - If you want to re-run only the tests that depend on the changed files
- verbose
    - Display individual test results with the test suite hierarchy.
- coverage
    - Indicates that test coverage information should be collected and reported in the output.

```jsx
// package.json
"scripts": {
	...,
	"test": "jest --watchAll --verbose --coverage"
}
```

To **enable** Intelissense autocomplete of jest:

```jsx
npm install @types/jest --save-dev

// jsconfig.json
{
  "typeAcquisition": {
    "include": [
      "jest"
    ]
  }
}
```

Actual test:

```jsx
// stack.test.js
class Stack(){
	constructor() {
		// ...
	}
}

// Alternative
test('creates empty stack', () => {
	epexct(stack.top).toBe(-1);
});

// Test suite
describe('My Stack', () => { 
	// Global variable for all tests.
	let stack;

	/**
   * Before every new test, create new Stack instance.
   * Better than initiating in every test.
   */
	beforeEach(() => {
		stack = new Stack();
	});

	it('is created empty', () => { // Individual unit tests
		expect(stack.top).toBe(-1); // Expectation.
		expect(stack.items).toEqual({});
	});
	// ...
});
```

```jsx
// Run JEST test
npm test
```

**************Cypress**************

- End-to-End visual testing
- Behaves like an end user.

**Puppeteer**

- e2e testing
- headless version of chrome browser

```jsx
npm install --save-dev puppeteer
```

```jsx
test("should create an element with text and correct class", async () => {
    const browser = await puppeteer.launch({
        headless: false,
        // slowMo: 80,
        // args: ["--window-size=1920,1080"],
    }); // returns Promise-- alternative to async/await is then()/catch()
    const page = await browser.newPage();
    await page.goto("http://127.0.0.1:5500/index.html");
    await page.click("input#name");
    await page.type("input#name", "Anna");
    await page.click("input#age");
    await page.type("input#age", "29");
    await page.click("#btnAddUser");
    const finalText = await page.$eval(".user-item", (el) => el.textContent);
    expect(finalText).toBe("Anna (29 years old)");
}, 15000); // 15seconds timeout, so it can finish the test.
```

<aside>
💡 **Async/await** and **then()** are very similar. The difference is that in an async function, JavaScript will pause the function execution until the promise settles. With then() , the rest of the function will continue to execute but JavaScript won't execute the . then() callback until the promise settles

</aside>
