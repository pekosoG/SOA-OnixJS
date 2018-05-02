import { DataSource, IDataSource, Constructor, IModel } from "@onixjs/core";
import { Mongoose } from "mongoose";

@DataSource()
export class MongooseDataSource implements IDataSource{

    private mongoose: Mongoose = new Mongoose();

    async connect() {
        return this.mongoose.connect(
            'mongodb://lb-sdk-test:lb-sdk-test@ds153400.mlab.com:53400/heroku_pmkjxjwz'
        )
    }
    async disconnect() {
        return this.mongoose.disconnect();
    }
    register(Class: Constructor, model: any, schema: IModel) {
        return this.mongoose.model(Class.name,schema);
    }
    
}