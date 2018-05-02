import { Component, IComponent } from "@onixjs/core";

@Component({})
export class TodoComponent implements IComponent{
    init(): void{
        console.log('Todo Cimponent is Alive');
    }

    destroy(): void{
        console.log('Todo Cimponent is Dying');
    }
}