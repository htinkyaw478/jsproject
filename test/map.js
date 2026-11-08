// const myMap = new Map();
// myMap.set("name", "htinkyaw");
// myMap.set("age", 21);
// myMap.set("gender", "male");
// myMap.set("address", "Mandalay");
// myMap.set("job", "developer");
// myMap.set("salary", 1000000);

// console.log(myMap);
// console.log(myMap.get("name"));
// console.log(myMap.has("name"));
// console.log(myMap.delete("name"));
// console.log(myMap.values());
// console.log(myMap.keys());
// console.log(myMap.entries());
// console.log(myMap.size);
// // myMap.clear();
// console.log("--------------------Using ForEach Loop--------------------");
// myMap.forEach((value, key) => {
//   console.log(key + ":" + value);
// });
// console.log("--------------------Using For of Loop--------------------");
// for (let [key, value] of myMap) {
//   console.log(key + ":" + value);
// }

// console.log(
//   "--------------------Using for of loop with Keys(), Values() and Entries()--------------------",
// );
// for (let key of myMap.keys()) {
//   console.log(key);
// }
// for (let value of myMap.values()) {
//   console.log(value);
// }
// for (let [key, value] of myMap.entries()) {
//   console.log(key + ":" + value);
// }

function bookShop(book, author) {
  this.book = book;
  this.author = author;
  this.getBookInfo = function () {
    return this.book + " by " + this.author;
  };
}
const book1 = new bookShop("book1", "author1");
// console.log(book1);
const book2 = new bookShop("book2", "author2");
const book3 = new bookShop("book3", "author3");
const book4 = new bookShop("book4", "author4");
const book5 = new bookShop("book5", "author5");

const library = new Map();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);
library.set(book4, false);
library.set(book5, true);

// console.log(library);
// console.log(library.get(book1));
// console.log(library.has(book1));
// for (let [book, available] of library) {
//   console.log(
//     book.getBookInfo() + " is " + (available ? "available" : "not available"),
//   );
// }

function bookCheckOut(library, book) {
  if (library.has(book) && library.get(book)) {
    library.set(book, false);
    console.log(`${book.getBookInfo()} checked out successfully`);
  } else {
    console.log(`${book.getBookInfo()} is not available`);
  }
}
// bookCheckOut(library, book1);
// bookCheckOut(library, book1);

function bookReturn(library, book) {
  if (library.has(book) && library.get(book)) {
    console.log(`${book.getBookInfo()} is already available`);
  } else {
    library.set(book, true);
    console.log(`${book.getBookInfo()} returned successfully`);
  }
}
bookCheckOut(library, book3);
bookCheckOut(library, book3);
bookReturn(library, book3);
bookReturn(library, book3);
