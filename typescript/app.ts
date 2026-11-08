// const a = "apple";
// // a = 100;
// // console.log(a)
// // datatype
// let name:string = "htinkyaw";
// let age:number = 23;
// let isStudent:boolean = true;
// let hobbies:string[] = ["football","coding","reading"];
// let numberArr:number[] = [1,2,3,4,5];
// let numberOrStringArr:(number|string)[] = [1,2,3,"a","b","c"];
// let tupleArr:[string,number] = ["htinkyaw",23];
// let anyArr:any[] = [1,2,3,"a","b","c"];

// let person:object = {name:"htinkyaw",age:23,isStudent:true};
// let anything:any = "anything";
// anything = 100;
// anything = true;
// anything = [1,2,3];
// anything = {name:"htinkyaw",age:23,isStudent:true};

// let unknown:unknown = "anything";
// // unknown = 100;
// // unknown = true;
// // unknown = [1,2,3];
// // unknown = {name:"htinkyaw",age:23,isStudent:true};
// // console.log(unknown)
// if(typeof unknown === "string"){
//     // console.log(unknown.toUpperCase())
// }

// type Usertype = {
//     name: string,
//     age:number,
//     hobbies:string[],
//     gender: "male" | "female",
//     zipcode: string | number,
//     role?:string
    
// }
// const user1:Usertype = {
//     name: "htinkyaw",
//     age: 23,
//     hobbies: ["football","coding","reading"],
//     gender: "female",
//     zipcode: "1234567",
//     role: "admin"
// }

// const user2:Usertype = {
//     name:"Shwe Zin",
//     age:22,
//     hobbies:["reading","travelling"],
//     gender:"female",
//     zipcode:"1234567"
// }

// // console.log(user1)
// // console.log(user2)

// let cat : {name:string,age:number}={
//     name:"mimi",
//     age:2
// }

// function greeting(name:string,age:number):string{
//     return `Hello, my name is ${name} and I am ${age} years old.`;
// }

// let addNumbers = (num1:number,num2:number):number => num1 + num2;
// let addNumberAndString = (num1:number,num2:number):number | string => num1 + num2+"ks";
// let sayHello = (name:string):void=>{
//     console.log("Hello",name)
// }
// let showError = ():never=>{
//     throw new Error("Something went wrong");
// }
// // console.log(greeting("htinkyaw",23))
// // console.log(addNumbers(1,2))
// // console.log(addNumberAndString(5,2))
// // sayHello("htinkyaw")

// // interface pre-define object type or class
// interface Usertypee{
//     readonly id:number,
//     name:string,
//     age:number,
//     isStudent:boolean,
//     hobbies?:string[],
//     gender: "male" | "female",
//     role?: string,
//     [key: string]: any
// }
// // enum is define read-only variable
// enum role{
//     ADMIN = "admin",
//     USER = "user",
//     VIEWER = "viewer"
// }

// let user3:Usertypee = {
//     id: 3,
//     name: "htinkyaw",
//     age: 23,
//     isStudent: true,
//     hobbies: ["football","coding","reading"],
//     gender: "female",
//     role: role.ADMIN,
//     phonenumber:"1234567",
//     email:"user@gmail.com"
// }
// user3.name = "Shwe Zin";
// // console.log(user3)

// interface Userprofile{
//     name:string,
//     age:number
// }

// interface Student extends Userprofile{
//     studenId:number,
//     grade:string
// }

// const student1:Student = {
//     name: "htinkyaw",
//     age: 23,
//     studenId: 1,
//     grade: "A"
// }

// // console.log(student1)

// interface CompanyProfile extends Userprofile{
//     companyName:string,
//     companyAddress:string
// }

// const company1:CompanyProfile = {
//     name: "htinkyaw",
//     age: 23,
//     companyName: "HK company ltd.",
//     companyAddress: "Yangon"
// }

// // console.log(company1)

// interface uniStudent extends Student{
//     university:string,
    
// }
 
// const uniStudent1:uniStudent = {
//     name: "htinkyaw",
//     age: 23,
//     studenId: 1,
//     grade: "A",
//     university: "University of Yangon"
// }

// // console.log(uniStudent1)

// interface StudentsAndCompanyProfile extends Student,CompanyProfile{
//     companyPhone?:number
// }

// const studentAndCompany1:StudentsAndCompanyProfile = {
//     name: "htinkyaw",
//     age: 23,
//     studenId: 1,
//     grade: "A",
//     companyName: "HK company ltd.",
//     companyAddress: "Yangon",
//     companyPhone: 1234567
// }

// // console.log(studentAndCompany1)

// // Type Alias
// type StudentType = {
//     name:string,
//     age:number
// }
// type CompanyType = {
//     companyName:string,
//     companyAddress:string
// }
// type StudentAndCompanyType = StudentType & CompanyType

// const studentAndCompany2:StudentAndCompanyType = {
//     name: "htinkyaw",
//     age: 23,
//     companyName: "HK company ltd.",
//     companyAddress: "Yangon"
// }

// interface Calculator{
//     add(a:number,b:number):number,
//     substract(a:number,b:number):number,
//     multiply(a:number,b:number):number,
//     divide(a:number,b:number):number
// }

// const MyCalculator:Calculator = {
//     add(a,b){
//         return a + b;
//     },
//     substract(a,b){
//         return a - b;
//     },
//     multiply(a,b){
//         return a * b;
//     },
//     divide(a,b){
//         return a / b;
//     }
// }

// console.log(MyCalculator.add(1,2))
// console.log(MyCalculator.substract(1,2))
// console.log(MyCalculator.multiply(1,2))
// console.log(MyCalculator.divide(1,2))

// // Class
// class Calculator {
//     add(a:number,b:number):number{
//         return a + b;
//     }
//     substract(a:number,b:number):number{
//         return a - b;
//     }
//     multiply(a:number,b:number):number{
//         return a * b;
//     }
//     divide(a:number,b:number):number{
//         return a / b;
//     }
// }

// const myCalculator = new Calculator()
// console.log(myCalculator.add(1,2))
// console.log(myCalculator.substract(1,2))
// console.log(myCalculator.multiply(1,2))
// console.log(myCalculator.divide(1,2))

// interface Userprofile{
//     name:string
    
// }
// interface Userprofile{
//     age:number
// }

// const user1:Userprofile = {
//     name:"htinkyaw",
//     age:34
// }
// console.log(user1)

// enum

// enum Direction{
//     UP,
//     DOWN,
//     LEFT,
//     RIGHT
// }

// console.log(Direction.UP)

// enum Day {
//     Sunday,
//     Monday,
//     Tuesday,
//     Wednesday,
//     Thursday,
//     Friday,
//     Saturday
// }
// function isItWeekEnd(day:Day):boolean{
//     let isItWeekEnd:boolean;
//     switch(day){
//         case Day.Friday:
//         case Day.Saturday:
//             isItWeekEnd = true;
//             break;
//         default:
//             isItWeekEnd = false;
//     }
//     return isItWeekEnd;
// }

// let res = isItWeekEnd(Day.Monday);
// // res? console.log("it is week end") : console.log("it is not week end")
// type userId = string | number;

// function printId(id:userId):void{
//     console.log(`User ID is ${id}`)
// }
// printId(1)
// printId("string")

// type status = "pending" | "processing" | "completed" | "failed";

// function updateStatus(status:status):void{
//     console.log(`Status is ${status}`)
// }
// updateStatus("pending")
// // updateStatus("error")

// type tupleType = [string,number,boolean];
// let tuple:tupleType = ["htinkyaw",23,true]
// // console.log(tuple)
// let [name,age,isStudent]= tuple;
// console.log(name)
// console.log(age)
// console.log(isStudent)

// type arrType = string[];
// let arr:arrType = ["htinkyaw","23","true"];
// let [name1,age1,isStudent1]= arr;
// console.log(name1)
// console.log(age1)
// console.log(isStudent1)

// type Calculator = (a:number,b:number)=>number;

// const add:Calculator = (a,b)=>a+b;
// const substract:Calculator = (a,b)=>a-b;
// const multiply:Calculator = (a,b)=>a*b;
// const divide:Calculator = (a,b)=>a/b;
// console.log(add(1,2))
// console.log(substract(1,2))
// console.log(multiply(1,2))
// console.log(divide(1,2))

// type TypeA = {
//     propA:string
// }
// type TypeB = {
//     propB:number
// }
// type TypeC = TypeA & TypeB & {hobbies:string[]}

// const typeC:TypeC = {
//     propA:"hello",
//     propB:23,
//     hobbies:["football","coding","reading"]
// }
// console.log(typeC)

// as const

// let user1 = {
//     name:"htinkyaw",
//     age:23
// }
// user1.age = 25
// // console.log(user1)

// let user2 = {
//     name:"htinkyaw",
//     age:23
// } as const
// // user2.age = 25 // error because of as const
// // console.log(user2)

// const fruits = ["apple","banana","orange"]
// fruits.push("grape")
// // console.log(fruits);

// const seaAnimals = ["fish","shark","whale"] as const;
// // seaAnimals.push("dolphin"); // error because of as const
// // console.log(seaAnimals)

// function logIn(username:string){
//     return {
//         type : "success",
//         payload: username
//     }
// }

// console.log(logIn("htinkyaw"));
// let action = logIn("htinkyaw");
// action.type = "failed";
// console.log(action);

// function logIn2(userId:number){
//     return {
//         type: "success",
//         payload: userId
//     } as const
// }

// let action2 = logIn2(1);
// // action2.type = "failed"; // error because of as const
// console.log(action2);

// generic function

// function genericFun<type>(arg:type):type{
//     return arg
// }

// console.log(genericFun(1))
// console.log(genericFun("hello"))
// console.log(genericFun([1,2,3]))

// function calculator<T , U>(arg1: T, arg2: U): string | number {
//     return `${arg1} + ${arg2}`
// }

// console.log(calculator(10, 20));

// type Usertype<T>={
//     name:T,
//     hobbies:T[]
// } 

// let userOne:Usertype<string> = {
//     name:"htinkyaw",
//     hobbies:["football","coding","reading"]
// }

// console.log(userOne)

// type apiResponse<T> = {
//     data:T[],
//     status:number,
//     success:boolean
// }

// type User = {id:string,name:string};
// type Order = {orderId:number,user:User,amount:number};
// type Product = {id:number,name:string,price:number};

// function apiCall<T>(url:string):apiResponse<T>{
//     return {
//         data:[],
//         status:200,
//         success:true
//     }
// }

// const userApi = apiCall<User>("http://localhost:3000/data");
// const orderApi = apiCall<Order>("http://localhost:3000/data");
// const productApi = apiCall<Product>("http://localhost:3000/data");

// console.log(userApi.data)
// console.log(orderApi)
// console.log(productApi)

// interface apiResponse<T=number | string> {
//     success:boolean,
//     data:T[],
//     statusCode:number
// }

// type User = {id:string,name:string};
// type Order = {orderId:number,user:User,amount:number};
// type Product = {id:number,name:string,price:number};

// function apiCall<T>(url:string):apiResponse<T>{
//     return {
//         data:[],
//         statusCode:200,
//         success:true
//     }
// }

// const userApi = apiCall<User>("http://localhost:3000/data");
// const orderApi = apiCall<Order>("http://localhost:3000/data");
// const productApi = apiCall<Product>("http://localhost:3000/data");

// // console.log(userApi.data)
// // console.log(orderApi)
// // console.log(productApi)

// let a:apiResponse<User> = {
//     data:[{id:"1",name:"htinkyaw"}],
//     statusCode:200,
//     success:true
// }
// console.log(a)

// let b:apiResponse = {
//     data:[100,"hello"],
//     statusCode:200,
//     success:true
// }
// console.log(b)
    

// type People = {
//     name:string,
//     age:number,
// }
// type AdminRole = {
//     role:"admin"
// }
// type Admin = People & AdminRole;

// const admin1:Admin = {
//     name :"htinkyaw",
//     age:34,
//     role:"admin"
// }
// // console.log(admin1)
// const user5:keyof Admin = "role"
// console.log(user5)

// const user8 = {
//     name:"htinkyae",
//     age:23
// }

// type userType = typeof user8;
// // type keyuser = keyof userType;
// type keyoftypeofuser8 = keyof typeof user8;
// // const user9:keyuser = "age"
// const user10:userType = {
//     name:"shwe",
//     age:25
// }
// // console.log(user9)
// console.log(user10)

// type NumberObj = {
// //     [index:string]:boolean,
// }
// const productList:NumberObj = {
//     "apple":true,
//     "samsung":false,
//     "xiaomi":false
// }
// console.log(productList)
// productList.samsung = true
// console.log(productList)
// for(let i=0;i<Object.keys(productList).length;i++){
//     let values:boolean = productList[Object.keys(productList)[i]]
//     // console.log(values  )
// }
// const successResponse = <T>(value:T):{success:"true",data:T} => {
//     return {
//         success:"true",
//         data:value
//     }
// };

// console.log(successResponse("hello"));
// console.log(successResponse({id:1,name:"htinkyaw",age:34}));

// built in utility types

interface User1{
    name:string,
    age:number,
    email:string
}

type UpdateUser = {
    readonly name?:string,
    readonly age?:number
}

function updateUser1(user:User1,updateData:UpdateUser):User1{
    return {
        ...user,
        ...updateData
    }
}


const user:User1 = {
    name:"htinkyaw",
    age: 23,
    email:"[EMAIL_ADDRESS]"
}

const updateData:UpdateUser = {
    name:"shwe",
    age:25
}

const updatedUser = updateUser1(user,updateData)

console.log(updatedUser)

// partial types

type PartialUser = Partial<User1>

const user2:PartialUser = {
    name:"shwe",
    // age:25
}

console.log(user2)

// required
interface User2 {
    name:string,
    age?:number,
    email?:string
}
type RequiredUser = Required<User2>

const requiredUser:RequiredUser = {
    name:"shwe",
    age:25,
    email:"[EMAIL_ADDRESS]"
}

// pick

interface User3 {
    name:string,
    age:number,
    email:string,
    hobbies:string[]
}

type PickUser = Pick<User3,"name" | "email">

const user4:PickUser = {
    name:"shwe",
    email:"[EMAIL_ADDRESS]",
}

console.log(user4)

    // omit

type OmitUser = Omit<User3,"age" | "hobbies">

const omitUser:OmitUser = {
    name:"shwe",
    email:"[EMAIL_ADDRESS]"
}
console.log(omitUser)

// Record

type Role = "admin" | "user" | "guest"
type Permission = Record<Role,string[]>

const permission:Permission = {
    "admin" : ["read","write","delete"],
    "user" : ["read","write"],
    "guest" : ["read"]
}

console.log(permission)

// exclude & extract

type nameType = "shwe" | "htinkyaw" | "aung"
type excludeName = Exclude<nameType , "shwe" | "htinkyaw">  // user will be only "aung"
type extractName = Extract<nameType , "shwe" | "htinkyaw">  // user will be "shwe" | "htinkyaw" 

const userOne:nameType = "aung"
const userTwo:excludeName = "aung"
const userThree:extractName = "shwe" 

console.log(userOne)
console.log(userTwo)
console.log(userThree)

// nonnullable
type NonNullableType = NonNullable<nameType | null | undefined>  // return nameType (remove null and undefined)
const userFour:NonNullableType = "htinkyaw"
console.log(userFour)

// ReadOnly 
type ReadOnlyUser = Readonly<User1>
const readOnlyUser:ReadOnlyUser = {
    name:"shwe",
    age:23,
    email:"[EMAIL_ADDRESS]"
}
// readOnlyUser.name = "aung" // error because of readonly
console.log(readOnlyUser)

// ReturnType
function getUser(){
    return {name:"htinkyaw",age:34,role:"Software Engineer"}
}

type ReturnUser = ReturnType<typeof getUser>

const userfive:ReturnUser = {
    name:"shwe",
    age:25,
    role:"Software Engineer"
}

console.log(userfive)

// parameters

function getSum(num1:number , num2:number){
    return num1 + num2
}

type ParametersUser = Parameters<typeof getSum> 

const parametersUser:ParametersUser = [10,20]
console.log(parametersUser)
