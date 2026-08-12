import mongoose from "mongoose"

mongoose.connect(/*aqui vai a URL do banco do mongoDB */);

let db = mongoose.connection;

export default db;