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
// indexCalculator = 26 + shiftingPosition;
// cipherShifter = cipherShifterAtZero
//   .slice(indexCalculator, 26)
//   .concat(cipherShifterAtZero.slice(0, indexCalculator));

const words = phrase.split(" ");
let wordLetters = [];
let wordLettersEncrypted = [];
const wordsEncrypted = [];
let phraseEncrypted = [];

for (j = 0; j < words.length; j++) {
  wordLetters = words[j].split("");
  for (i = 0; i < wordLetters.length; i++) {
    switch (wordLetters[i]) {
      case "a":
        wordLetters[i] = cipherShifter[0];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "b":
        wordLetters[i] = cipherShifter[1];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "c":
        wordLetters[i] = cipherShifter[2];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "d":
        wordLetters[i] = cipherShifter[3];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "e":
        wordLetters[i] = cipherShifter[4];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "f":
        wordLetters[i] = cipherShifter[5];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "g":
        wordLetters[i] = cipherShifter[6];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "h":
        wordLetters[i] = cipherShifter[7];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "i":
        wordLetters[i] = cipherShifter[8];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "j":
        wordLetters[i] = cipherShifter[9];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "k":
        wordLetters[i] = cipherShifter[10];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "l":
        wordLetters[i] = cipherShifter[11];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "m":
        wordLetters[i] = cipherShifter[12];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "n":
        wordLetters[i] = cipherShifter[13];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "o":
        wordLetters[i] = cipherShifter[14];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "p":
        wordLetters[i] = cipherShifter[15];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "q":
        wordLetters[i] = cipherShifter[16];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "r":
        wordLetters[i] = cipherShifter[17];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "s":
        wordLetters[i] = cipherShifter[18];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "t":
        wordLetters[i] = cipherShifter[19];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "u":
        wordLetters[i] = cipherShifter[20];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "v":
        wordLetters[i] = cipherShifter[21];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "w":
        wordLetters[i] = cipherShifter[22];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "x":
        wordLetters[i] = cipherShifter[23];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "y":
        wordLetters[i] = cipherShifter[24];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
      case "z":
        wordLetters[i] = cipherShifter[25];
        wordLettersEncrypted.push(wordLetters[i]);
        break;
    }
  }
  wordsEncrypted.push(wordLettersEncrypted.join(""));
  wordLettersEncrypted = [];
}
phraseEncrypted = wordsEncrypted.join(" ");
console.log(phraseEncrypted);
