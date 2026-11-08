import { ProgrammingLanguage } from "./programminglanguage";

export class Developer{
    constructor(
        public id:string,
        public name:string,
        public languages:ProgrammingLanguage[],
        ){

        }
}