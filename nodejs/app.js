// const { name, age, displayInfo, arr, address } = require("./data");

// console.log(name, age, displayInfo(), arr, address);
import data from "./data.js";
// console.log(data);
const { name, age, displayInfo, arr, address } = data;
// console.log(data.name, data.age, data.displayInfo(), data.arr, data.address);
console.log(name, age, displayInfo(), arr, address);
// Destructuring Object with renaming

// const {name:fName, age:old,displayInfo:show,arr:myArr,address:myAddress} = data;
