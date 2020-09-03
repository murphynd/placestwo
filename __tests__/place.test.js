import Place from "../src/js/Place.js";

describe("Place", () => {
  test("should create object that will handle input for location", () => {
    let London = new Place("England");
    expect(London.location).toEqual("England");
  });
  test("should create object that will handle input for landmarks, time of year, notes", () => {
    let London = new Place("England", "big ben", "summer", "I liked the fish and chips.");
    expect(London.landmarks).toEqual("big ben");
    expect(London.timeOfYear).toEqual("summer");
    expect(London.notes).toEqual("I liked the fish and chips.");
  });
  test("create method to showDetails from Places with a sentence", () => {
    let London = new Place("England", "big ben", "summer", "I liked the fish and chips.");
    London.showDetails();
    expect(London.showDetails()).toEqual(
      "I went to England in the summer, while I was here I went to big ben."
    );
  });
});
