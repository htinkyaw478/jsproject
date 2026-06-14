// let x = 5;
// console.log(x);
// const sampleObject = {
//   name: "John",
//   age: 30,
//   isStudent: false,
//   hobbies: ["reading", "gaming", "coding"],
//   address: {
//     street: "Maharmying",
//     city: "Mandalay",
//     country: "Myanmar",
//   },
//   info() {
//     return `${this.name} is ${this.age} years old and lives in ${this.address.city}.`;
//     console.log(this);
//   },
// };

// console.log(sampleObject.info());
// // console.log(this);
// // sampleObject.name = "Jane";
// // console.log(sampleObject.name);
// // sampleObject.hobbies.push("traveling");
// // console.log(sampleObject.hobbies);
// // sampleObject.phone = "123-456-7890";
// // console.log(sampleObject);
// // delete sampleObject.isStudent;
// // console.log(sampleObject);
// // console.log(Object.keys(sampleObject));
// // console.log(Object.values(sampleObject));
// // console.log(Object.entries(sampleObject));
// const {
//   name,
//   age,
//   address: { street },
//   hobbies: [firstHobby, secondHobby],
// } = sampleObject;
// // console.log(name);
// // console.log(age);
// // console.log(street);
// // console.log(secondHobby);
// const userLists = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 35 },
// ];
// // console.log(userLists);
// console.log(userLists[1].id);
// const toString = JSON.stringify(sampleObject);
// console.log(toString);
// const toObject = JSON.parse(toString);
// console.log(toObject);

let randomValue = Math.floor(Math.random() * 100);
if (randomValue < 10) {
  randomValue = "0" + randomValue;
} else if (randomValue > 100) {
  randomValue = "00" + randomValue;
}
// console.log(randomValue);
let date = new Date().toLocaleDateString();
[day, month, year] = date.split("/");
if (day < 10) {
  day = "0" + day;
}
if (month < 10) {
  month = "0" + month;
}
let mdy = `${month}/${day}/${year}`;
console.log(mdy);
let ymd = `${year}/${month}/${day}`;
console.log(ymd);
let dmy = `${day}/${month}/${year}`;
console.log(dmy);
