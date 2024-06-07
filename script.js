//Declaring variables, arrays, and assigning inputs
const colors = require("colors");
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
const words = phrase.split(" ");
let wordLetters = [];
let wordLettersEncrypted = [];
const wordsEncrypted = [];
let phraseEncrypted = [];

// Functions
const shiftPhrase = function () {
  for (let j = 0; j < words.length; j++) {
    wordLetters = words[j].split("");
    for (let i = 0; i < wordLetters.length; i++) {
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
        default:
          console.log(`          ${"Encryption isn't possible;".bgRed}
          one of the characters wasn't an English alphabetic character.
          Caesar Cipher encryption is only valid for ${
            "English alphabetic characters.".green
          }
          Please use the following format: ${
            'node scriptName.js "Lorem ipsum dolor sit" 3'.green
          }`);
          return;
      }
    }

    wordsEncrypted.push(wordLettersEncrypted.join(""));
    wordLettersEncrypted = [];
  }
  phraseEncrypted = wordsEncrypted.join(" ");
  return console.log("The encryption is: ".green, phraseEncrypted.bgGreen);
};

//Positive  Shift
if (shiftingPosition > 0 && shiftingPosition <= 25) {
  cipherShifter = cipherShifterAtZero
    .slice(shiftingPosition, 26)
    .concat(cipherShifterAtZero.slice(0, shiftingPosition));
  shiftPhrase();

  //Negative Shift
} else if (shiftingPosition < 0 && shiftingPosition >= -25) {
  indexCalculator = 26 + shiftingPosition;
  cipherShifter = cipherShifterAtZero
    .slice(indexCalculator, 26)
    .concat(cipherShifterAtZero.slice(0, indexCalculator));
  shiftPhrase();
} else if (shiftingPosition === 0) {
  console.log(
    " At position zero, there is no encryption; the text remains unchanged.\n"
      .red,
    phrase.bgGreen
  );
} else {
  console.log(`  ${
    "The shift number is either not numeric or out of range.".bgRed
  }
  Please re-enter the shift number in the following format:
  ${'node scriptName.js "Lorem ipsum dolor sit" 3'.green}

  The shift number range is from ${"0".green} to ${"25".green}.
  Use a ${"positive".green} number to shift to the ${"right".green} 
  and a ${"negative".red} number to shift to the ${"left".red}.`);
}
