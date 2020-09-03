export default class Place {
  constructor(location, landmarks, timeOfYear, notes) {
    this.location = location;
    this.landmarks = landmarks;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
  }
  showDetails() {
    return (
      "I went to " +
      this.location +
      " in the " +
      this.timeOfYear +
      ", while I was here I went to " +
      this.landmarks +
      "."
    );
  }
}
