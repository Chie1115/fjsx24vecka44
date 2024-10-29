// 1.1 Skapa och Manipulera Arrayer
// Exempel 1: Skapa en Array

let frukter = ["Äpple", "Banana", "Apelsin"];
console.log(frukter);
//
// Exempel 2: Åtkomst till Array-element

console.log(frukter[0]); // "Äpple"
console.log(frukter[1]); // "Banana"
//
// Exempel 3: Ändra ett Array-element

frukter[1] = "Mango";
console.log(frukter); // ["Äpple", "Mango", "Apelsin"]

// 1.2 Array-metoder
// Exempel 4: push() och pop()

frukter.push("Kiwi");
console.log(frukter); // ["Äpple", "Mango", "Apelsin", "Kiwi"]

let borttagenFrukt = frukter.pop();
console.log(frukter); // ["Äpple", "Mango", "Apelsin"]
console.log(borttagenFrukt); // "Kiwi"
//
// Exempel 5: unshift() och shift()

frukter.unshift("Jordgubbe");
console.log(frukter); // ["Jordgubbe", "Äpple", "Mango", "Apelsin"]

let förstaFrukt = frukter.shift();
console.log(frukter); // ["Äpple", "Mango", "Apelsin"]
console.log(förstaFrukt); // "Jordgubbe"
//
// Exempel 6: splice()

// Lägg till element med splice()
frukter.splice(1, 0, "Citron", "Lime");
console.log(frukter); // ["Äpple", "Citron", "Lime", "Mango", "Apelsin"]

// Ta bort element med splice()
frukter.splice(2, 1); // Tar bort "Lime"
console.log(frukter); // ["Äpple", "Citron", "Mango", "Apelsin"]

// 1.3 Iterera över Arrayer
// Exempel 7: For-loop

for (let i = 0; i < frukter.length; i++) {
  console.log(frukter[i]);
}
//
// Exempel 8: For-of-loop

for (let frukt of frukter) {
  console.log(frukt);
}
//
// Exempel 9: forEach()

frukter.forEach(function (frukt, index) {
  console.log(`${index}: ${frukt}`);
});
