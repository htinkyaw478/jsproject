import { vehicles } from "./vehicles";
class Car extends vehicles{
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