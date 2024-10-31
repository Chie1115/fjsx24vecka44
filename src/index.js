// // 1.1 Skapa och Manipulera Arrayer
// // Exempel 1: Skapa en Array

// let frukter = ["Äpple", "Banana", "Apelsin"];
// console.log(frukter);
// //
// // Exempel 2: Åtkomst till Array-element

// console.log(frukter[0]); // "Äpple"
// console.log(frukter[1]); // "Banana"
// //
// // Exempel 3: Ändra ett Array-element

// frukter[1] = "Mango";
// console.log(frukter); // ["Äpple", "Mango", "Apelsin"]

// // 1.2 Array-metoder
// // Exempel 4: push() och pop()

// frukter.push("Kiwi");
// console.log(frukter); // ["Äpple", "Mango", "Apelsin", "Kiwi"]

// let borttagenFrukt = frukter.pop();
// console.log(frukter); // ["Äpple", "Mango", "Apelsin"]
// console.log(borttagenFrukt); // "Kiwi"
// //
// // Exempel 5: unshift() och shift()

// frukter.unshift("Jordgubbe");
// console.log(frukter); // ["Jordgubbe", "Äpple", "Mango", "Apelsin"]

// let förstaFrukt = frukter.shift();
// console.log(frukter); // ["Äpple", "Mango", "Apelsin"]
// console.log(förstaFrukt); // "Jordgubbe"
// //
// // Exempel 6: splice()

// // Lägg till element med splice()
// frukter.splice(1, 0, "Citron", "Lime");
// console.log(frukter); // ["Äpple", "Citron", "Lime", "Mango", "Apelsin"]

// // Ta bort element med splice()
// frukter.splice(2, 1); // Tar bort "Lime"
// console.log(frukter); // ["Äpple", "Citron", "Mango", "Apelsin"]

// // 1.3 Iterera över Arrayer
// // Exempel 7: For-loop

// for (let i = 0; i < frukter.length; i++) {
//   console.log(frukter[i]);
// }
// //
// // Exempel 8: For-of-loop

// for (let frukt of frukter) {
//   console.log(frukt);
// }
// //
// // Exempel 9: forEach()

// frukter.forEach(function (frukt, index) {
//   console.log(`${index}: ${frukt}`);
// });

// -----------------------------------------
// High order functions: map(), filter(), reduce()

// let personer = [
//   { namn: "Anna", ålder: 28 },
//   { namn: "Björn", ålder: 35 },
//   { namn: "Cecilia", ålder: 42 },
// ];

// //   Exempel 2: Använda map() för att Skapa en Ny Array

// let namnLista = personer.map(function (person) {
//   return person.namn;
// });

// console.log(namnLista); // ["Anna", "Björn", "Cecilia"]

// //   Exempel 3: Använda filter() för att Få Fram Särskilda Objekt

// let äldreÄn30 = personer.filter(function (person) {
//   return person.ålder > 30;
// });

// console.log(äldreÄn30);

// //   xempel 4: Introduktion till reduce()

// // Förklaring:
// // reduce() används för att reducera en array till ett enda värde genom att utföra en funktion på varje element i arrayen i ordning.

// // Syntax:

// array.reduce(function (ackumulator, nuvarandeVärde) {
//   // kodblock
// }, initieringsvärde);

// // -----------------------------------------
// // Objects:
// // Exempel 1: Skapa ett Objekt

// let person = {
//   förnamn: "Anna",
//   efternamn: "Svensson",
//   ålder: 28,
//   stad: "Stockholm",
// };
// console.log(person);

// // Exempel 2: Åtkomst till Objektets Egenskaper

// console.log(person.förnamn); // "Anna"
// console.log(person["efternamn"]); // "Svensson"

// // Exempel 3: Ändra och Lägg till Egenskaper

// person.ålder = 29;
// person.land = "Sverige";
// console.log(person);

// // Objektmetoder
// // Exempel 4: Lägg till en Metod till Objektet

// person.hälsa = function () {
//   console.log(`Hej, jag heter ${this.förnamn} ${this.efternamn}.`);
// };

// person.hälsa();

// // Exempel 5: this Nyckelordet
// // this refererar till det aktuella objektet.

// // 2.3 Objekt i Arrayer
// // Exempel 6: Array av Objekt

// let böcker = [
//   { titel: "Mästaren och Margarita", författare: "Mikhail Bulgakov" },
//   { titel: "Brott och Straff", författare: "Fjodor Dostojevskij" },
// ];

// for (let bok of böcker) {
//   console.log(`${bok.titel} av ${bok.författare}`);
// }
