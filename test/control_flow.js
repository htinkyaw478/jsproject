// falsy ==> false, 0, '', null, undefined, NaN
// truthy ==> true, 1, ' ', [], {}, function(){}

// let value = 0;
// if (value) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }
// if (value === 0) {
//   console.log("Value is zero");
// } else {
//   console.log("Value is not zero");
// }
// if ("") {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }
// if (1 + 1) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }
// if (null) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }
// if (undefined) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }
// if (NaN) {
//   console.log("Truthy");
// } else {
//   console.log("Falsy");
// }
// let day = 1;
// console.log(day);
// switch (day) {
//   case 0:
//     console.log("Sunday");
//     break;
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid day");
// }
// console.log(day);
// switch (day) {
//   case 0:
//   case 6:
//     console.log("Weekend");
//     break;
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log("Weekday");
//     break;
//   default:
//     console.log("Invalid day");
// }
// // for loop
// for (let i = 0; i < 5; i++) {
//   if (i === 2) continue;
//   if (i === 4) continue;
//   if (i === 4) break;
//   console.log(i);
// }
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "banana") continue;
  if (fruits[i] === "elderberry") break;
  console.log(` ${fruits[i]} is delicious!`);
}
