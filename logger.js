
const EventEmmitter = require("events") // class


var url = "http://mylogger.io/log";


class Logger extends EventEmmitter {
    log(message){
        // send an HTTP request
        console.log(message);
    
        // Raise event - Also checks for listeners. 
        this.emit("messageLogged", {id: 1, url: "url"});
    }
    
}

module.exports = Logger;

