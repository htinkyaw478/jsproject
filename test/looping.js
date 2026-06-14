const usersList = [
  {
    id: 1,
    name: "bobo",
    email: "bobo@gmail.com",
    address: "mandalay",
    age: 20,
    gender: "male",
  },
  {
    id: 2,
    name: "koko",
    email: "koko@gmail.com",
    address: "mandalay",
    age: 22,
    gender: "male",
  },
  {
    id: 3,
    name: "rose",
    email: "rose@gmail.com",
    address: "yangon",
    age: 23,
    gender: "female",
  },
  {
    id: 4,
    name: "popo",
    email: "popo@gmail.com",
    address: "bago",
    age: 24,
    gender: "male",
  },
  {
    id: 5,
    name: "aungaung",
    email: "aungaung@gmail.com",
    address: "bago",
    age: 25,
    gender: "female",
  },
  {
    id: 6,
    name: "nono",
    email: "nono@gmail.com",
    address: "bago",
    age: 25,
    gender: "female",
  },
  {
    id: 7,
    name: "aungaung",
    email: "aungaung@gmail.com",
    address: "yangon",
    age: 25,
    gender: "male",
  },
  {
    id: 8,
    name: "naungaung",
    email: "naungaung@gmail.com",
    address: "mandalay",
    age: 25,
    gender: "male",
  },
  {
    id: 9,
    name: "nana",
    email: "nana@gmail.com",
    address: "yangon",
    age: 25,
    gender: "female",
  },
];

// for (let i = 0; i < usersList.length; i++) {
//   const user = usersList[i];
//   const { name, email, address, age, gender } = user;
//   if (address !== "mandalay" && gender === "female") {
//     console.log(
//       `Name: ${name}, Email: ${email}, Address: ${address}, Age: ${age}, Gender: ${gender}`,
//     );
//   }
// }

let users = [];
usersList.forEach((user, index) => {
  const { name, email, address, age, gender } = user;
  if (index > 1) {
    user["index"] = index;
    users.push(user);
  }
});
// console.log(users);
let admin = {
  name: "admin",
  email: "admin@gmail.com",
  address: "yangon",
  age: 30,
};
// for (const key in admin) {
//   console.log(`${key} => ${admin[key]}`);
// }

// for (const key in usersList) {
//   const { name, email, address } = usersList[key];
//   if (address === "yangon") {
//     console.log(
//       `Name => ${name.toUpperCase()}, Email => ${email.trim().toLowerCase()}`,
//     );
//   }
// }

for (const user of usersList) {
  // console.log(user);
  // console.log(user.name, user.email);
}

// for (const { name, email, address } of usersList) {
//   if (address === "yangon") {
//     console.log(
//       `Name => ${name.toUpperCase()}, Email => ${email.trim().toLowerCase()}`,
//     );
//   }
// }

// const userNames = usersList.map((user) => user.name);
// console.log(userNames);

// const userAddresses = usersList
//   .filter((user) => user.address === "yangon")
//   .map((user) => user.name);
// console.log(userAddresses);

const numberArrays = [1, 2, 3, 4, 5];
const total = numberArrays.reduce((acc, i) => acc + i, 0);
console.log(total);
