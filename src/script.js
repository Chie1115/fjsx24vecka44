console.log("Hello array thuesday");

<<<<<<< HEAD
// //1. Gör en array som innehåller 5 st olika frukter av datatypen `string`.
// // let fruits = ["apple", "banana", "orange", "mango", "pear"];


// //2. gör en array som innehåller 3 olika datatyper, ex. `string`, `number`, `array`.
// let mixedArray = ["hello", 42, [1, 2, 3]]; // string, number, array


// //3. `console.log()` hur många objekt arrayen ovan innehåller.
// let animals = ["cat", "hamster", "parrot", "funky chihuahua"];
// console.log(animals.length); // Output: 4


// //4. I arrayen ovan, hämta _cat_.
// console.log(animals[0]); // Output: "cat"


// //5. I arrayen ovan, hämta _funky chihuahua_.
// console.log(animals[3]); // Output: "funky chihuahua"


//6. I arrayen ovan, byt ut _hamster_ mot _tiger_. 要素を置き換え
// animals[1] = "tiger";
// console.log(animals); // Output: ["cat", "tiger", "parrot", "funky chihuahua"]


// //7. Lägg ihop ovanstående arrayer. 配列 a と b を結合
// let a = [1, 2, 3];
// let b = [4, 5, 6];
// let combined = a.concat(b);
// console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

//8. Merga ner array `b` på index `3` array `a`.
// let a = [1, 2, 3, 7, 8, 9];
// let b = [4, 5, 6];
// a.splice(3, 0, ...b); // Lägger till b i a på index 3. 配列 a のインデックス 3 に b を挿入
// console.log(a); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

/*splice() メソッドを使って、配列 a の内容を変更しています。
最初の引数 3 は挿入を開始するインデックスを指定します（ここではインデックス 3）。
2番目の引数 0 は削除する要素の数を指定します（ここでは削除しません）。
...b は配列 b の要素をスプレッドして a に挿入します。
結果として、配列 a の指定した位置に配列 b の要素が追加されます。*/


//9. _Klona_ ovanstående array. 配列 arr をクローン
// let arr = ["a", "b", "c"];
// let clonedArr = [...arr]; // Klonar arrayen
// console.log(clonedArr); // Output: ["a", "b", "c"]


//## Methods

// // 10. Lägg till en frukt i _slutet_ av arrayen ovan. 配列の末尾にフルーツを追加
// let fruits = ["kiwi", "apple", "pear"];
// fruits.push("banana");
// console.log(fruits); // Output: ["kiwi", "apple", "pear", "banana"]


// // 11. Lägg till en frukt i _början_ av arrayen ovan. 配列の先頭にフルーツを追加
// fruits.unshift("orange");
// console.log(fruits); // Output: ["orange", "kiwi", "apple", "pear", "banana"]


// // 12. I arrayen ovan, ta bort _sista_ frukten i arrayen. 配列の最後のフルーツを削除
// fruits.pop();
// console.log(fruits); // Output: ["orange", "kiwi", "apple", "pear"]


// // 13. I arrayen ovan, ta bort _första_ frukten i arrayen. 配列の最初のフルーツを削除
// fruits.shift();
// console.log(fruits); // Output: ["kiwi", "apple", "pear"]


// // 14. Sätt in _en_ frukt i arrayen ovan på `index 1`. 配列のインデックス 1 にフルーツを挿入
// fruits.splice(1, 0, "grape");
// console.log(fruits); // Output: ["kiwi", "grape", "apple", "pear"]


// // 15. Sätt in _tre_ frukter i arrayen ovan på `index 2`. 配列のインデックス 2 に3つのフルーツを挿入
// fruits.splice(2, 0, "mango", "peach", "plum");
// console.log(fruits); // Output: ["kiwi", "grape", "mango", "peach", "plum", "apple", "pear"]


// // 16. I arrayen ovan, ta bort _Christoffer_ och _Johan_.配列から Christoffer と Johan を削除
// let names = ["David", "Christoffer", "Johan", "Maja"];
// names.splice(1, 2); // インデックス1から2つの要素を削除
// console.log(names); // Output: ["David", "Maja"]


// 17. Spegelvänd på arrayen ovan.

// 18. Kika om strängen ovan innehåller bokstaven `n`.

// 19. Kika om strängen ovan innehåller bokstaven `x`.

// 20. I ovanstående array, hitta vilket _position_ första förekomsten av `p` har.

// 21. I strängen ovan, plocka fram de `5` _första_ tecknena.

// 22. I strängen ovan, plocka fram de `7` _sista_ tecknena.



//## Loop array

// 34. Loopa ut följande array med en `forEach()`-loop. `console.log()` varje ord. forEach() ループを使用して配列をループ
let fruits = ["apelsin", "päron", "äpple", "kiwi"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});
// Output:
// apelsin
// päron
// äpple
// kiwi


// 35. Loopa ut följande array med en `for of`-loop. `console.log()` varje ord. for of ループを使用して配列をループ
for (let fruit of fruits) {
    console.log(fruit);
}
// Output:
// apelsin
// päron
// äpple
// kiwi


// 36. Loopa ut följande array med en `for`-loop. `console.log()` varje ord.
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
// Output:
// apelsin
// päron
// äpple
// kiwi


// 37. Loopa ut följande array. För varje varv i loopen ska du också skriva ut index. ex:
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i} - ${fruits[i]}`);
}
// Output:
// 0 - apelsin
// 1 - päron
// 2 - äpple
// 3 - kiwi

=======
// 1.1 Skapa och Manipulera Arrayer
// Exempel 1: Skapa en Array
let fruits = ["apple", "mango", "banana"];

// console.log("fruits: ", fruits);

// Exempel 2: Åtkomst till Array-element
// console.log("fruit at index 0: ", fruits[0]);
// console.log("fruit at index 1: ", fruits[1]);
// console.log("fruit at index 2: ", fruits[2]);

// Exempel 3: Ändra ett Array-element
fruits[1] = "mandarin";
// console.log("fruit at index 1 from line 15 and not from line 5: ", fruits[1]);
// console.log("fruits from line 15 and not from line 5: ", fruits);

// 1.2 Array-metoder
// Exempel 4: push() och pop()
fruits.push("kiwi");
// console.log("fruits: line 21", fruits);

let removedFruit = fruits.pop();

// console.log("fruits line 24: ", fruits);
// console.log("removedFruit line 24: ", typeof removedFruit);

//
// Exempel 5: unshift() och shift()

let lenghtOfFruitsArray = fruits.unshift("strawberry");
// console.log("fruits: line 32", fruits);
// console.log("lenghtOfFruitsArray: line 32", lenghtOfFruitsArray);

let strawberry = fruits.shift();
console.log("fruits: line 36", fruits);
// console.log("strawberry: line 36", strawberry);

//
// Exempel 6: splice()
// Lägg till element med splice()
fruits.splice(1, 0, "lime", "watermelon");

// console.log("fruits: line 43", fruits);

// Ta bort element med splice()
fruits.splice(2, 1);
// console.log("fruits: line 48", fruits);
fruits.splice(3, 1);
console.log("fruits: line 50", fruits);

// 1.3 Iterera över Arrayer
// Exempel 7: For-loop
for (let i = 0; i < fruits.length; i++) {
  console.log("fruit at index...", fruits[i]);
}
// Exempel 8: For-of-loop
for (const fruit of fruits) {
  console.log(
    "Each fruit from the fruits array inside the for-of-looop:  ",
    fruit
  );
}
// Exempel 9: forEach()

fruits.forEach(function (fruit, index) {
  console.log("fruit: ", fruit);
});
>>>>>>> c463aa6bc6b6eea7d2debdaf1ccb46e4e765e684
