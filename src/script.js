console.log("Hello array thuesday");

// // 1.1 Skapa och Manipulera Arrayer
// // Exempel 1: Skapa en Array
// let fruits = ["apple", "mango", "banana"];

// // console.log("fruits: ", fruits);

// // Exempel 2: Åtkomst till Array-element
// // console.log("fruit at index 0: ", fruits[0]);
// // console.log("fruit at index 1: ", fruits[1]);
// // console.log("fruit at index 2: ", fruits[2]);

// // Exempel 3: Ändra ett Array-element
// fruits[1] = "mandarin";
// // console.log("fruit at index 1 from line 15 and not from line 5: ", fruits[1]);
// // console.log("fruits from line 15 and not from line 5: ", fruits);

// // 1.2 Array-metoder
// // Exempel 4: push() och pop()
// fruits.push("kiwi");
// // console.log("fruits: line 21", fruits);

// let removedFruit = fruits.pop();

// // console.log("fruits line 24: ", fruits);
// // console.log("removedFruit line 24: ", typeof removedFruit);

// //
// // Exempel 5: unshift() och shift()

// let lenghtOfFruitsArray = fruits.unshift("strawberry");
// // console.log("fruits: line 32", fruits);
// // console.log("lenghtOfFruitsArray: line 32", lenghtOfFruitsArray);

// let strawberry = fruits.shift();
// console.log("fruits: line 36", fruits);
// // console.log("strawberry: line 36", strawberry);

// //
// // Exempel 6: splice()
// // Lägg till element med splice()
// fruits.splice(1, 0, "lime", "watermelon");

// // console.log("fruits: line 43", fruits);

// // Ta bort element med splice()
// fruits.splice(2, 1);
// // console.log("fruits: line 48", fruits);
// fruits.splice(3, 1);
// console.log("fruits: line 50", fruits);

// // 1.3 Iterera över Arrayer
// // Exempel 7: For-loop
// for (let i = 0; i < fruits.length; i++) {
//   console.log("fruit at index...", fruits[i]);
// }
// // Exempel 8: For-of-loop
// for (const fruit of fruits) {
//   console.log(
//     "Each fruit from the fruits array inside the for-of-looop:  ",
//     fruit
//   );
// }
// // Exempel 9: forEach()

// fruits.forEach(function (fruit, index) {
//   console.log("fruit: ", fruit);
// });

// High order functions: map(), filter(), reduce()

// let persons = [
//   { firstName: "Anna", age: 28 },
//   { firstName: "Jon", age: 18 },
//   { firstName: "Greta", age: 68 },
// ];

// console.log("persons: ", persons);

// // map() för skapa en Ny array

// let nameList = persons.map(function (person) {
//   return person.firstName;
// });

// console.log("nameList: ", nameList);

// //  använda filter() för att få fram särskilda Object

// let ageOverRetirement = persons.filter(function (person) {
//   return person.age >= 65;
// });

// console.log("ageOverRetirement: ", ageOverRetirement);

// //  reduce() den används för reducera en array till ett enda värde, genom att utföra en funktion på varje element i arrayen

// let reduceResult = persons.reduce(function (ackumulator, person) {
//   return ackumulator + person.age;
// }, 0);

// console.log("reduceResult: ", reduceResult);

// objects:

// // Skapa ett object:

// let family = {
//   personsFamily: "Mandus",
//   spouse: "Denada",
//   pets: [
//     { type: "cat", catName: "Fhizer", catAge: 4, isFemale: false },
//     { type: "cat", catName: "Bella", catAge: 3, isFemale: true },
//     { type: "cat", catName: "Simba", catAge: 1.5, isFemale: false },
//     { type: "cat", catName: "Milla", catAge: 1.5, isFemale: true },
//     { type: "cat", catName: "Chatti", catAge: 1.5, isFemale: true },
//   ],
//   siblings: 2,
//   parents: 2,
// };

// // console.log("Mandus family:", family.siblings);
// console.log("Mandus family:", family);
// console.log("Mandus family country:", family.country);

// // åtkomst av data från ett object:

// // Mandus rekomenderar att använda denna:
// let wife1 = family.spouse;
// // inte denna:
// let wife = family["spouse"];

// // console.log("wife1: ", wife1);
// // console.log("wife: ", wife);

// // Ändra och lägga till egenskaper:

// family.siblings = 3;
// console.log("family is growing?: ", family);

// family.country = "Sverige";
// console.log("family is is getting a new key/value pair?: ", family);

// // object metoder/function
// // lägg till en metod/function:
// family.greeting = function () {
//   console.log(
//     `Hej Mandus fru heter ${this.spouse} och dom har ${this.pets.length} katter i sitt hem`
//   );
// };

// // console.log("family down here with a function?: ", family);

// // family.greeting();

// let reduceResult = family.pets.reduce(function (ackumulator, pet) {
//   return ackumulator + pet.catAge;
// }, 0);

// console.log("reduceResult: ", reduceResult);

// // ## Bibblan

// // 1. Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är `title`, `author`, `numPages`.
// let book1 = {
//   title: "Harry Potter and the Philosopher's Stone",
//   author: "J.K. Rowling",
//   numPages: 223
// };

// let book2 = {
//   title: "The Hobbit",
//   author: "J.R.R. Tolkien",
//   numPages: 310
// };

// let book3 = {
//   title: "1984",
//   author: "George Orwell",
//   numPages: 328
// };

// // 2. Skapa en array av objekt med flera stycken böcker
// let books = [book1, book2, book3];

// // 3. Skapa en funktion som söker efter en titel i arrayen, om den hittar en så returneras objektet annars `null`. Låt funktionen ta emot arrayen med bok-objekt och söktermen som parametrar.
// function findBookByTitle(booksArray, title) {
//   for (let book of booksArray) {
//       if (book.title === title) {
//           return book;
//       }
//   }
//   return null; // 見つからなかった場合
// }
// let result = findBookByTitle(books, "The Hobbit");
// console.log(result);
// // 出力: { title: 'The Hobbit', author: 'J.R.R. Tolkien', numPages: 310 }

// let notFound = findBookByTitle(books, "Unknown Book");
// console.log(notFound);
// // 出力: null





// // ## Letter Frequency
// function letterFrequency(str) {
//   // 結果を格納するオブジェクトを初期化
//   let frequency = {};

//   // 文字列の各文字を1つずつ確認
//   for (let char of str) {
//       // すでにその文字がオブジェクトに存在するかを確認
//       if (frequency[char]) {
//           // 存在する場合は出現回数を1増やす
//           frequency[char]++;
//       } else {
//           // 存在しない場合は出現回数を1で初期化
//           frequency[char] = 1;
//       }
//   }

//   return frequency; // 出現頻度のオブジェクトを返す
// }

// // テストケース
// console.log(letterFrequency("kale")); 
// // 出力: { "k": 1, "a": 1, "l": 1, "e": 1 }

// console.log(letterFrequency("aaaa")); 
// // 出力: { "a": 4 }  // 修正点: "y"ではなく"a"が4回出現

// console.log(letterFrequency("ni talar bra latin")); 
// // 出力: { "n": 2, "i": 2, " ": 3, "t": 2, "a": 4, "l": 2, "r": 2, "b": 1 } // 不要なカンマを削除

