import fetchTest from "./fetchTest.js";

describe("App", () => {
  test("return fetch data", async () => {
    const result = await fetchTest();
    console.log(result);
    expect(result).toBe(
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
  });
});
