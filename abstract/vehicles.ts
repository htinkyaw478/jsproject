export abstract class vehicles {
    constructor(
        public model: string,
        public year: number,
        public color:string
    ) {}

    abstract startEngine(): void;
    abstract getModel(): void;
    
    displayInfo(): void{
        console.log(`Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`);
    }
}

class Car extends vehicles {
    constructor(model: string, year: number, color: string) {
        super(model, year, color);
    }
    startEngine(): void {
        console.log(`The ${this.model} is starting`);
    }
    getModel(): void {
        console.log(`The model is ${this.model}`);
    }
}

const myCar = new Car("Toyota", 2022, "Red");
myCar.startEngine();
myCar.displayInfo();

class MotorCycle extends vehicles{
    constructor(model: string, year: number, color: string) {
        super(model, year, color);
    }
    startEngine(): void {
        console.log(`The ${this.model} is starting`);
    }
    getModel(): void {
        console.log(`The model is ${this.model}`);
    }
    stopEngine(): void {
        console.log(`The ${this.model} is stopping`);
    }
}

const myMotorCycle = new MotorCycle("Honda", 2022, "Black");
myMotorCycle.startEngine();
myMotorCycle.displayInfo();
myMotorCycle.stopEngine();