export interface IRepository<T>{
    add(item:T):void;
    update(item:T):void;
    delete(id:string):void;
    getById(id:string):T | undefined;
    getAll():T[];
}