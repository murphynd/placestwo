import Place from "../src/js/Place.js";

describe("Place", () => {
  let reusablePlace;

  beforeEach(() => {
    reusablePlace = new Place("England", "big ben", "summer", "I liked the fish and chips.");
  });

  test("should create object that will handle input for location", () => {
    expect(reusablePlace.location).toEqual("England");
  });
  test("should create object that will handle input for landmarks, time of year, notes", () => {
    expect(reusablePlace.landmarks).toEqual("big ben");
    expect(reusablePlace.timeOfYear).toEqual("summer");
    expect(reusablePlace.notes).toEqual("I liked the fish and chips.");
  });
  test("create method to showDetails from Places with a sentence", () => {
    reusablePlace.showDetails();
    expect(reusablePlace.showDetails()).toEqual(
      "I went to England in the summer, while I was here I went to big ben."
    );
  });
});
