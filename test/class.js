class AtmMachine {
  #balance = 0;
  #password = "1234";
  constructor(accName, depositeAmount = 0) {
    this.accName = accName;
    this.#balance = depositeAmount;
  }
  deposit(amount, password) {
    if (password !== this.#password) {
      console.log("Wrong password");
      return;
    }
    if (typeof amount !== "number") {
      console.log("Please enter a valid number");
      return;
    }
    if (amount < 0) {
      console.log("Please enter a positive number");
      return;
    }
    this.#balance += amount;
    console.log("Deposit successful");
    // console.log("Current balance: " + this.dep);
  }
  withdraw(amount, password) {
    if (password !== this.#password) {
      console.log("Wrong password");
      return;
    }
    if (amount > this.#balance) {
      console.log("You don't have enough balance");
      return;
    }
    this.#balance -= amount;
    console.log("Withdrawal successful");
    console.log("Current balance: " + this.#balance);
  }

  getBalance(password) {
    if (password !== this.#password) {
      console.log("Wrong password");
      return "Invalid Password";
    }
    console.log("Current balance: " + this.#balance);
  }
}
const htinkyawAcc = new AtmMachine("htinkyaw", 10000);
// htinkyawAcc.deposit(400, "1234");
// htinkyawAcc.withdraw(200, "1234");
// htinkyawAcc.getBalance("1234");

// Inheritance
// class Animal {
//   constructor(name, sound) {
//     this.name = name;
//     this.sound = sound;
//   }
//   makeSound() {
//     console.log(`${this.name} says ${this.sound}`);
//   }
//   eat(food) {
//     console.log(`${this.name} is eating ${food}`);
//   }
// }
// class dog extends Animal {
//   constructor(name) {
//     super(name, "Woof Woof");
//   }
//   play() {
//     console.log(`${this.name} is playing`);
//   }
//   fighting() {
//     console.log(`${this.name} is fighting with another dog`);
//   }
// }
// class Cat extends Animal {
//   constructor(name) {
//     super(name, "Meow");
//   }
//   play() {
//     console.log(`${this.name} is playing`);
//   }
// }
// const AungNet = new dog("Aung Net");
// const pussyCat = new Cat("Pussy Cat");
// AungNet.eat("Fish");
// AungNet.makeSound();
// AungNet.play();
// AungNet.eat("Bone");
// AungNet.fighting();
// pussyCat.eat("Fish");
// pussyCat.makeSound();

// Polymorphism
// class Animal {
//   makeSound() {
//     return "Some generic animal sound";
//   }
// }
// class dog extends Animal {
//   makeSound() {
//     return "Woof Woof";
//   }
// }
// class Cat extends Animal {
//   makeSound() {
//     return "Meow";
//   }
// }
// class Duck extends Animal {
//   makeSound() {
//     return "Quack Quack";
//   }
// }
// const zoo = [new dog(), new Cat(), new Duck()];
// // zoo.forEach((a) => console.log(a.makeSound()));

// class Payment {
//   processPayment(amount) {
//     console.log(`Processing payment of ${amount}`);
//   }
// }
// class Kpay extends Payment {
//   processPayment(amount) {
//     console.log(`Processing payment of ${amount} using Kpay`);
//   }
// }
// class Wavepay extends Payment {
//   processPayment(amount) {
//     console.log(`Processing payment of ${amount} using Wavepay`);
//   }
// }
// function processPayment(payment, amount) {
//   payment.processPayment(amount);
// }
// processPayment(new Payment(), 100);
// processPayment(new Kpay(), 200);
// processPayment(new Wavepay(), 300);

// Abstraction
class CoffeeMachine {
  #boilWater() {
    console.log("Boiling water");
  }
  #grindBeans() {
    console.log("Grinding beans");
  }
  #brewCoffee() {
    console.log("Brewing coffee");
  }
  #addMilk() {
    console.log("Adding milk");
  }
  coffeeMixture() {
    this.#boilWater();
    this.#grindBeans();
    this.#brewCoffee();
    this.#addMilk();
    console.log("Coffee is ready");
  }
  latte() {
    this.#boilWater();
    this.#grindBeans();
    this.#brewCoffee();
    this.#addMilk();
    console.log("Latte is ready");
  }
}
const coffeeMachine = new CoffeeMachine();
// coffeeMachine.coffeeMixture();
// coffeeMachine.latte();

class DatabaseConnection {
  constructor(dbType) {
    this.dbType = dbType;
  }
  #connectMysql() {
    console.log("Connecting to MySQL");
  }
  #connectMongo() {
    console.log("Connecting to Mongo");
  }
  #connectPostgres() {
    console.log("Connecting to Postgres");
  }
  connectDb() {
    if (this.dbType === "mysql") {
      this.#connectMysql();
    } else if (this.dbType === "mongo") {
      this.#connectMongo();
    } else if (this.dbType === "postgres") {
      this.#connectPostgres();
    } else {
      console.log("Invalid database type");
    }
  }
  saveData(userdata) {
    if (this.dbType === "mysql") {
      console.log("Saving data to MySQL" + userdata);
      console.log("=====================================");
    } else if (this.dbType === "mongo") {
      console.log("Saving data to Mongo" + userdata);
      console.log("=====================================");
    } else if (this.dbType === "postgres") {
      console.log("Saving data to Postgres" + userdata);
      console.log("=====================================");
    } else {
      console.log("Invalid database type");
    }
  }
}

const mysqlDb = new DatabaseConnection("mysql");
const mongoDb = new DatabaseConnection("mongo");
const postgresDb = new DatabaseConnection("postgres");

mysqlDb.connectDb();
mysqlDb.saveData("My SQL Data");
mongoDb.connectDb();
mongoDb.saveData("Mongo Data");
postgresDb.connectDb();
postgresDb.saveData("Postgres Data");
