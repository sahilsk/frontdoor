var redis = require("redis");
var config = require("./config.js");

function findHost(req, callback){
    
    console.log( config.redis.development.port);
    var rdsClient = redis.createClient(config.redis.development.port, config.redis.development.hostname);
    

    console.log( "Request Header: " + JSON.stringify(req.headers));
    callback(null, null);
    
    
}
        
module.exports = findHost;        

    
        
