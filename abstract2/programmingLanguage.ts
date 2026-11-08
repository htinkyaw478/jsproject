import { Entity } from "./entity";

export class ProgrammingLanguage extends Entity{
    constructor(
        id:string,
        name:string,
        public paradigm:string,
    ){
        super(id,name)
    }
    getDescription(): string {
        return `Programming language: ${this.name} with paradigm: ${this.paradigm}`;
    }
}

let js = new ProgrammingLanguage("1","JS","Multi_Paradigm")
console.log(js.getDescription());
    