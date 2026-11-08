const name = "htinkyaw";
const age = 34;
const displayInfo = () => `Name: ${name}, Age: ${age}`;
const arr = [1, 2, 3, 4, 5];
const address = { city: "YGN", country: "MM" };
// console.log(module.exports);
// module.exports = { name, age, displayInfo, arr, address };
export default { name, age, displayInfo, arr, address };
