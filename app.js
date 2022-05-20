//const logger = require("./logger");

//console.log("ses");
//logger.log("message");
/*
const fs = require("fs");

const files = fs.readdirSync("./");

console.log(files)

fs.readdir("./", function(err, files){
    if (err) console.log("error", err);
    else console.log("Result", files)

});
*/


// Register listener
//emitter.on("messageLogged", function(arg){
//    console.log("listener called", arg);
//})


const Logger = require('./logger');
const logger = new Logger()

logger.on("messageLogged", (arg) =>{
    console.log("listener called", arg);
})

logger.log("message");