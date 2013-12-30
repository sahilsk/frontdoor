var bouncy = require('bouncy');
var domain = require("domain");
var findHost = require("./findHost");
var d = domain.create();

d.on("error", function(err){
    console.error("Caught Error!", err);
});

var proxyBouncy = bouncy(requestHandler);
console.log("proxy listening at " , config.port);
proxyBouncy.listen(config.port);


function requestHandler(req, res, bounce){
    
    d.run( function(){
        findHost(req, function(error, newHost){
           console.log("finding new host");     
        if( error){
            console.log("Error");
            res.statusCode = 404;
            res.end('no such host exist');          
        }else if( newHost === 0){
            console.log("No host found");
            res.statusCode = 404;
            res.end('no such host exist');            
        }else {
            console.log("bouncing to " + newHost);
            bounce( newHost);
        }
       });
    });    
    
}




