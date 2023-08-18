'use strict';
const mongoose= require('mongoose');
const dbURL= process.env.db;
mongoose.connect(dbURL,{
    useNewUrlParser: true,
     useUnifiedTopology: true,
    //usefindAndModify: false,
    //useCreateIndex: true
});
mongoose.connection.on('connected',()=>{
    console.log('mongoose Connected');
});
mongoose.connection.on('disconnected',()=>{
    console.log('mongoose Disconnect');
});
mongoose.connection.on('error',(err)=>{
    console.log(`Error While connecting ${err}`);
});