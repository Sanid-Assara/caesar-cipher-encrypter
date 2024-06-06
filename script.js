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

if (shiftingPosition > 0 && shiftingPosition <= 25) {
  console.log(" up to 25");
} else if (shiftingPosition < 0 && shiftingPosition >= -25) {
  console.log(" down to -25");
} else if (shiftingPosition === 0) {
  console.log(" its a zero");
}

let cipherShifter = cipherShifterAtZero.slice(0, -2);
