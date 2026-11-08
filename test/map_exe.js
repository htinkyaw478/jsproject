function bookShop(bookName, author) {
  this.bookName = bookName;
  this.author = author;
  this.getInfo = function () {
    return this.bookName + " by " + this.author;
  };
}
const library = new Map();

function addBook(book) {
  library.set(book, true);
  console.log(`${book.getInfo()} added to library`);
}
addBook(new bookShop("python", "Htun Htun"));
addBook(new bookShop("js", "Kyi Pyar"));
addBook(new bookShop("java", "Aung Gyi"));
addBook(new bookShop("database", "Ko Zayar"));
console.log(library);
