// Iteration 1: Names and Input

const hacker1 = "Mike";
console.log(`The driver's name is ${hacker1}`);

const hacker2 = "Milly";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops

for (let i = 0; i < hacker1.length; i++) {}

let hackerToUpper = hacker1.toUpperCase();
console.log(hackerToUpper);

let hackerNew = hackerToUpper.split("").join(" ");
console.log(hackerNew);

// Reversed name
let nameReversed = "";
for (let j = hacker2.length - 1; j >= 0; j--) {
  nameReversed += hacker2[j];
}

console.log(nameReversed);

// localeCompare() method: The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.

if (hacker1.localeCompare(hacker2)) {
  console.log(`The driver's name: "${hacker1}" goes first.`);
} else if (hacker2.localeCompare(hacker1)) {
  console.log(`Yo, the navigator: '${hacker2}' goes first, definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1

let longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mi mi, suscipit id bibendum non, pharetra ut augue. Vivamus elit est, consectetur ac velit id, vestibulum ultricies nisi. Pellentesque eget mauris nec massa egestas placerat. Maecenas neque massa, sagittis ac risus in, accumsan scelerisque eros. Nam vulputate, dolor at dictum tempus, lectus enim tempor metus, ut aliquam ipsum dui ac libero. Nunc molestie purus ac nisl lacinia, non eleifend velit tempus. Nunc non ullamcorper dui. Nunc rutrum odio sed enim accumsan volutpat. Integer eget tortor et ex scelerisque malesuada laoreet non mi. Etiam quis magna condimentum, maximus metus ut, congue velit. Pellentesque vehicula tortor non purus cursus luctus. Praesent ultrices, lorem non laoreet consequat, purus nisl accumsan diam, in scelerisque sem ipsum et lacus. Praesent ipsum magna, lacinia a diam quis, mollis finibus tortor. Aliquam quis blandit erat. Maecenas euismod eleifend mollis.Praesent sed suscipit tortor, maximus vulputate quam. Aliquam vel sapien nec orci auctor elementum. Aenean lorem elit, malesuada ut massa nec, convallis mattis tellus. Donec auctor tortor in sagittis rhoncus. Duis in nibh viverra ligula placerat vestibulum. Vestibulum et egestas eros. Vestibulum vitae sapien non nisl vehicula ultrices et quis dolor. Proin efficitur est sit amet suscipit porttitor. Nam convallis urna id metus efficitur, vel dapibus tellus sagittis. Nunc iaculis ante in velit ultrices aliquam.Proin quis lacus sed neque convallis aliquet at ut sem. Integer at nisi elementum, laoreet tortor sit amet, elementum urna. Aliquam ipsum lacus, viverra vel laoreet cursus, pulvinar consequat diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque lobortis ac libero at euismod. Proin a risus vitae neque auctor finibus nec at turpis. Aenean varius tempus nisl et ornare. In ut posuere dolor, vel viverra urna. Nunc id tristique turpis.";

let words = 0;
for (let i = 0; i <= longText.length; i++) {
  if (longText[i] === " ") {
    words++;
  }
}
console.log(words + 1);

let wordEt = 0;
for (let i = 0; i <= longText.length; i++) {
  let word = longText[i] + longText[i + 1];
  if (word === "et") {
    wordEt++;
  }
}
console.log(wordEt);

// Bonus 2

let phraseToCheck = "A nut for a jar of tuna";
let phrase1 = "";
for (let i = 0; i < phraseToCheck.length; i++) {
  if (phraseToCheck[i] === " ") {
    continue;
  }
  phrase1 += phraseToCheck[i];
}
console.log(phrase1);

let phrase1Final = phrase1.toLowerCase();
// console.log(phrase1Final);

let phrase2 = "";
for (let j = phraseToCheck.length - 1; j >= 0; j--) {
  if (phraseToCheck[j] === " ") {
    continue;
  }
  phrase2 += phraseToCheck[j];
}
console.log(phrase2);
let phrase2Final = phrase2.toLowerCase();

// console.log(phrase2Final);

if (phrase1Final === phrase2Final) {
  console.log(`The phrase "${phraseToCheck}" is a Palindrome`);
} else {
  console.log(`The phrase "${phraseToCheck}" is not a Palindrome`);
}
