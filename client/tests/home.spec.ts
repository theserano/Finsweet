// @ts-check
import { expect, test } from "@playwright/test";

const baseURL = "http://localhost:5173";

test("has title", async ({page}) => {
    await page.goto(`${baseURL}/`);

    // Expect the page to contain this header
    await expect(page.getByText("save the environment today for a better tomorrow")).toBeVisible();
})

test("what we do link", async ({page}) => {
    await page.goto(`${baseURL}/`);

    // click on the what to do button
    await page.getByRole("button", {name: "What we do"}).click();

    // wait for the page to navigate
    await page.waitForURL(`${baseURL}/what`);

    // verify that the page is the required page
    expect(page.url()).toBe(`${baseURL}/what`);

    // check if that page has the required header
    await expect(page.getByRole("heading", {name: /we are working worldwide/i})).toBeVisible();
})

test("form check", async ({page}) => {
    await page.goto(`${baseURL}/contact`);

    // Fill out the form before the button is clicked
    await page.getByTestId("firstName").fill("Zoe");
    await page.getByTestId("lastName").fill("Serano");
    await page.getByTestId("email").fill("edwardserano@gmail.com");
    await page.getByTestId("subject").fill("testing purpose");
    await page.getByTestId("message").fill("a journey to full stack engineering");

    // wait on a response ahead
    const requestResponse = page.waitForResponse(`${baseURL}/api/contact/reach-out`);

    // click the button
    await page.getByRole("button", {name: "send message"}).click();

    // await the response from the server
    const response = await requestResponse;
    console.log(response.status);

});