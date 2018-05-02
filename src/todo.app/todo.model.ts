import { Model, IModel, Property } from "@onixjs/core";
import { MongooseDataSource } from "./mongo.datasource";

@Model({
    datasource:MongooseDataSource
})
export class TodoModel implements IModel{
    
    @Property({
        type: String,
        require: true
    })
    text: string;
}