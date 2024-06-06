const phrase = process.argv[2].toLowerCase();
const shiftingPosition = Number(process.argv[3]);
let cipherShifterAtZero = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let cipherShifter;
let indexCalculator;
// if (shiftingPosition > 0 && shiftingPosition <= 25) {
// } else if (shiftingPosition < 0 && shiftingPosition >= -25) {
//   console.log(" down to -25");
// } else if (shiftingPosition === 0) {
//   console.log(" its a zero");
// }

//Positive  Shift
cipherShifter = cipherShifterAtZero
  .slice(shiftingPosition, 26)
  .concat(cipherShifterAtZero.slice(0, shiftingPosition));

//Negative Shift
indexCalculator = 26 + shiftingPosition;
cipherShifter = cipherShifterAtZero
  .slice(indexCalculator, 26)
  .concat(cipherShifterAtZero.slice(0, indexCalculator));
