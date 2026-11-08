import { IRepository } from "./Irepository";

export class Repository<T extends { id: number | string }> implements IRepository<T>{
    private _storage:T[]=[]

    add(item: T): void {
        this._storage.push(item);
        console.log("Item added successfully");
    }
    update(item: T): void {
        const index = this._storage.findIndex((i:T) => i.id === item.id);
        if(index!=-1){
            this._storage[index] = item;
            console.log("Item updated successfully");
        }else{
            console.log("Item not found");
        }
    }
    delete(id: string): void {
        const index = this._storage.findIndex((item: T) => item.id === id);
        if(index!=-1){
            this._storage.splice(index,1);
            console.log("Item deleted successfully");
        }else{
            console.log("Item not found");
        }
    }
    getById(id: number | string): T | undefined {
        return this._storage.find((item:T) => item.id === id);
    }
    getAll(): T[] {
        return this._storage;
    }
}



    