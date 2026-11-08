"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a = "apple";
// a = 100;
// console.log(a)
// datatype
let name = "htinkyaw";
let age = 23;
let isStudent = true;
let hobbies = ["football", "coding", "reading"];
let numberArr = [1, 2, 3, 4, 5];
let numberOrStringArr = [1, 2, 3, "a", "b", "c"];
let tupleArr = ["htinkyaw", 23];
let anyArr = [1, 2, 3, "a", "b", "c"];
let person = { name: "htinkyaw", age: 23, isStudent: true };
let anything = "anything";
anything = 100;
anything = true;
anything = [1, 2, 3];
anything = { name: "htinkyaw", age: 23, isStudent: true };
let unknown = "anything";
// unknown = 100;
// unknown = true;
// unknown = [1,2,3];
// unknown = {name:"htinkyaw",age:23,isStudent:true};
// console.log(unknown)
if (typeof unknown === "string") {
    // console.log(unknown.toUpperCase())
}
const user1 = {
    name: "htinkyaw",
    age: 23,
    hobbies: ["football", "coding", "reading"],
    gender: "female",
    zipcode: "1234567",
    role: "admin"
};
const user2 = {
    name: "Shwe Zin",
    age: 22,
    hobbies: ["reading", "travelling"],
    gender: "female",
    zipcode: "1234567"
};
console.log(user1);
console.log(user2);
