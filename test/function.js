function greet() {
  console.log("hello");
}
function mySelf() {
  let res = "My name is Htin Kyaw !";
  console.log("res=", res);
  return res;
}
// greet();
// mySelf();

function lightTheme() {
  document.body.style.backgroundColor = "#fff";
  document.body.style.color = "#000";
}

function darkTheme() {
  document.body.style.backgroundColor = "#000";
  document.body.style.color = "#fff";
}

function mySelf2(name, age, address) {
  return `My name is ${name}.I'm ${age} olds.I live in ${address}.`;
}

// console.log(mySelf2("htinkyaw", 34, "Bago"));

function mySelf3(name = "Htin Kyaw", age = 34, address = "Bago") {
  if (typeof name !== "string") return "Name is must be String!";
  if (typeof age !== "number") return "Age is must be Number!";
  return `My name is ${name}.I'm ${age} olds.I live in ${address}.`;
}

// console.log(mySelf3("Tharling", 30, "Yangon"));
// console.log(mySelf3(32, "Lwin Maung", "Bago"));

// function expression

// const sayHi = function () {
//   console.log("hi");
// };
// sayHi();

// const addTwoNumber = (a = 0, b = 0) => a + b;
// console.log(addTwoNumber(30 + 40));
// console.log(addTwoNumber());

// Anonymous function

// setTimeout(() => {
//   console.log("hello");
// }, 3000);

// setInterval(()=>{
//   console.log("hi")
// },5000);

//IIfe
// (() => console.log("hello"))();

// Generator function
function* countStep() {
  yield "step 1";
  yield "step 2";
  yield "step 3";
  return "done";
}

const genFun = countStep();
// console.log(genFun);
// console.log(genFun.next().value);
// console.log(genFun.next().value);
// console.log(genFun.next().value);
// console.log(genFun.next().value);

function* geneId() {
  let id = 1;
  while (true) {
    yield id++;
  }
}
const generatorID = geneId();
const generatorID2 = geneId();
// console.log(generatorID.next().value);
// console.log(generatorID.next().value);
// console.log(generatorID2.next().value);
// console.log(generatorID2.next().value);
// console.log(generatorID2.next().value);

function* gameQuest() {
  yield "1.Train to shoot gun.";
  yield "2.Go to war.";
  yield "3.Kill the enemy.";
  yield "4.Destroy to enemy base";
  return "Victory!";
}
// const gamePlay1 = gameQuest();
// console.log(gamePlay1.next());
// console.log(gamePlay1.next());
// console.log(gamePlay1.next());
// console.log(gamePlay1.next());
// console.log(gamePlay1.next());

// const gamePlay2 = gameQuest();
// console.log(gamePlay2.next().value);
// console.log(gamePlay2.next().value);
// console.log(gamePlay2.next().value);
// console.log(gamePlay2.next().value);
// console.log(gamePlay2.next().value);

// first class citizen higher order function (Same map,filter,reduce)
const add = (a, b) => a + b;
const mutiply = (a, b) => a * b;
const calculate = (a, b, fun = add) => {
  return fun(a, b);
};
// console.log(calculate(10, 20));
// console.log(calculate(10, 20, mutiply));

const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const square = (x) => x * x;
const cube = (x) => x * x * x;
const calculate2 = (arr, fun) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fun(arr[i]));
  }
  return result;
};
// console.log(calculate2(numberArr, square));
// console.log(calculate2(numberArr, cube));

let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const square1 = newArr.map((x) => x * x);
// console.log(square1);
const even = newArr.filter((x) => x % 2 === 0);
// console.log(even);

// closure function

function outerFunction(outer) {
  return function innerFunction(inner) {
    console.log("outer", outer);
    console.log("inner", inner);
    console.log(outer + inner);
  };
}
const result = outerFunction(40);
// console.log(reult);
// result(90);
// outerFunction(100)(500);

function counter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => count--,
    getCount: () => count,
    reset: () => (count = 0),
  };
}
const counters = counter();
// console.log(counters);
// console.log(counters.increment());
// console.log(counters.increment());
// console.log(counters.increment());
// console.log(counters.decrement());
// console.log(counters.getCount());
// console.log(counters.reset());

// Recursive Function

const factorial = (n) => {
  if (n === 1) return 1;
  return n * factorial(n - 1);
};
// console.log(factorial(1));
// console.log(factorial(2));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));

const countStep2 = (step) => {
  if (step <= 0) {
    console.log("you are ground floor.");
    return 0;
  }
  console.log(step);
  countStep2(step - 1);
};
// countStep2(10);

// console.log(new Date(1061057477933).getUTCFullYear());
// console.log(Date.now());
const calculateAge = (dob) => {
  const dobDate = new Date(dob).getTime();
  console.log(dobDate);
  const diffMs = Date.now() - dobDate;
  console.log(diffMs);
  const ageDate = new Date(diffMs);
  console.log(ageDate);
  const getAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  console.log(getAge);
  return getAge;
};
// console.log(calculateAge("11/14/1992"));
// console.log(calculateAge("1990-12-27"));

const employees = [
  { id: 1, name: "bobo", sallery: 900000, department: "IT", DOB: "01/30/1990" },
  {
    id: 2,
    name: "mgmg",
    sallery: 850000,
    department: "Account",
    DOB: "10/15/1992",
  },
  {
    id: 3,
    name: "nono",
    sallery: 700000,
    department: "Finance",
    DOB: "04/9/2001",
  },
  {
    id: 4,
    name: "popo",
    sallery: 700000,
    department: "Design",
    DOB: "04/9/2007",
  },
  {
    id: 4,
    name: "koko aumg",
    sallery: 1706000,
    department: "IT",
    DOB: "04/9/2001",
  },
  {
    id: 5,
    name: "koko",
    sallery: 850000,
    department: "Finance",
    DOB: "09/25/1991",
  },
  {
    id: 6,
    name: "aungaung",
    sallery: 850000,
    department: "Finance",
    DOB: "09/25/1981",
  },
  {
    id: 7,
    name: "rose",
    sallery: 2850000,
    department: "Account",
    DOB: "09/25/1995",
  },
  {
    id: 8,
    name: "rose merry",
    sallery: 890000,
    department: "IT",
    DOB: "09/25/1979",
  },
  {
    id: 9,
    name: "pp smith",
    sallery: 890000,
    department: "IT",
    DOB: "09/25/2000",
  },
  {
    id: 10,
    name: "rr smith",
    sallery: 890000,
    department: "IT",
    DOB: "09/25/1995",
  },
  {
    id: 11,
    name: "popo",
    sallery: 900000,
    department: "Account",
    DOB: "09/25/1997",
  },
  {
    id: 12,
    name: "willim",
    sallery: 900000,
    department: "Design",
    DOB: "09/25/1997",
  },
  {
    id: 13,
    name: "ko bo",
    sallery: 1706000,
    department: "IT",
    DOB: "04/9/1960",
  },
  {
    id: 14,
    name: "ko nyo",
    sallery: 200200,
    department: "IT",
    DOB: "04/9/1990",
  },
  {
    id: 15,
    name: "ko james",
    sallery: 200400,
    department: "IT",
    DOB: "04/9/1990",
  },
];

const oldestEmployee = employees.reduce((pre, curr) => {
  const preDate = calculateAge(pre.DOB);
  console.log("preDate", preDate);
  const currDate = calculateAge(curr.DOB);
  console.log("currDate", currDate);
  return preDate > currDate ? pre : curr;
});
console.log(oldestEmployee);
