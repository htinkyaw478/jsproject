//functions

// function shopping(product) {
//     console.log("go to shop");
//     console.log(`buy a ${product}`)
//     console.log("go back home")
// }
// shopping("pencil");
// shopping("pen");
// function add(x,y) {
//     return x+y;
// }
// console.log(add(5,6));
// let result = 0;
// function birth(year){
//     return 2026 - year;
// }
// let result = birth(1992)
// console.log(`your ${result} years old.`)

// function statement

// function myName() {
//     console.log("htin kyaw");
// }
// myName();

// function expression
// let fun = function (){console.log("hello")};
// fun();
//  callback function

// function greet(name,fun){
//     fun(name);
// }
// greet("htin kyaw",function(name){console.log(`hello ${name}`)});

// function twice(num,fun2) {
//     let result = fun2(num)*2;
//     console.log(result);
// }
// twice(5,function(num){return num+6});

// arrow function
// let greet =n=>console.log(n);
// greet("htin");

// array map method

// let nums = [1,2,3,4,5,6]

// let newNums = nums.map((num)=>num+100)

// // filter method

// let num2 = nums.filter((num)=> num%2===0)
// console.log(num2)

// // reduce method
// let result = nums.reduce((a,b)=>a+b)
// console.log(result)

// for (x in nums){
//     console.log(nums[x])
// }

// let x=20
// function text(){
//     x+=1
//     console.log(x)
// }
// // text();
// console.log(x)

class Human{
    constructor(name,age,address) {
        this.Name = name
        this.age = age
        this.address = address
    }
    eat() {
        console.log(`${this.Name} is ${this.age} years old. ${this.Name} lives in ${this.address}`)
    }

}

let person = new Human("htinkyaw",32,"bago")
person.eat()
console.log(person.Name)
