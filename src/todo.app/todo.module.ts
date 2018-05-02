import { Module } from "@onixjs/core";
import { TodoComponent } from "./todo.component";
import { TodoModel } from "./todo.model";

@Module({
    components: [TodoComponent],
    models: [TodoModel],
    services : [],
    renderers: []
})
export class TodoModule {}