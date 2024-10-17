const request = require("supertest");
const app = require("../src/app");

describe("path /hello", () => {
  beforeEach(() => {
    console.log("beforeEach");
  });

  afterEach(() => {
    console.log("afterEach");
  });

  it("should always pass", () => {
    expect(1).toEqual(1);
  });
});
