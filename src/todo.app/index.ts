import { SOAService, Application } from "@onixjs/core";
import { TodoModule } from "./todo.module";

@SOAService({
    modules:[TodoModule]
})
export class TodoApp extends Application{  // This is a Wrapper for this app
    
}