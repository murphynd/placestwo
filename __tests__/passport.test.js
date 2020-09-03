import Passport from "../src/js/Passport.js";

describe("Passport", () => {
  test("Create class passport that will hold an array of locations logged to it", () => {
    let myPassport = new Passport();
    expect(myPassport).toEqual([]);
  });
});
