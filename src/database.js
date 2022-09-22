import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/blogderecetas';

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('BD conectada')
})