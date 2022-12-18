const express = require("express");
const app = express()
const parkingLot = require('./controller/parkingLot')
app.use(express.json())
const server= app.listen(3000, ()=>{
    console.log('app started')
    parkingLot.handleAll();
})

const unexpectedErrorHandler=(err)=>{
    console.log('err : ',err);
    if(server){
        server.close(()=>{
            process.exit(1)
        })
    }
    else{
        process.exit(1)
    }
}

process.on('uncaughtException',unexpectedErrorHandler)
process.on('unhandledRejection',unexpectedErrorHandler)

module.exports=server;