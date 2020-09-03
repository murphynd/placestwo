import Passport from "../src/js/Passport.js";
import Place from "../src/js/Place.js";
describe("Passport", () => {
  let reusablePlace;
  let reusablePassport;

  beforeEach(() => {
    reusablePlace = new Place("England", "big ben", "summer", "I liked the fish and chips.");
    reusablePassport = new Passport();
  });
  test("Create class passport that will hold an array of locations logged to it", () => {
    expect(reusablePassport.places).toEqual([]);
  });
  test("create method for class passport to add places to constructor", () => {
    reusablePassport.addPlace(reusablePlace);
    expect(reusablePassport.places).toEqual([reusablePlace]);
  });
});
