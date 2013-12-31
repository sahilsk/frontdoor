var redis = require("redis");
var config = require("./config.js");

function findHost(req, oResult){
    
    console.log( config.redis.development.port);
    var rdsClient = redis.createClient(config.redis.development.port, config.redis.development.hostname);
    rdsClient.setMaxListeners(0);
    
    var reqHost = req.headers.host;
    
    rdsClient.lrange("frontdoor:" +reqHost, 0, -1, function(err, list){
            if(err){
                oResult(err, null);
                return;
            }
        if( list.length <=0){
            console.log("No host entry found");
            oResult(null, 0);
            return;
        }else{
            oResult(null, list[0]);   
        }
                
    });
    
    console.log( "Request Header: " + JSON.stringify(req.headers));

}
        
module.exports = findHost;        

    
        
