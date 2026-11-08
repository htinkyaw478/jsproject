import { Developer } from "./developer";
export class Company{
    constructor(public id:number | string,
        public name:string,
        public developers:Developer[]){

        }
}
