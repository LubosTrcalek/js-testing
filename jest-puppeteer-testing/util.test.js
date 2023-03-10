const puppeteer = require("puppeteer");
const { generateText, checkAndGenerate } = require("./util");

test("should output name and age", () => {
    const text = generateText("Max", 29);
    expect(text).toBe("Max (29 years old)");
});

test("should generate a valid text ouput", () => {
    const text = checkAndGenerate("Max", 29);
    expect(text).toBe("Max (29 years old)");
});

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
}, 15000);
