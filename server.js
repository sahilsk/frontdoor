var bouncy = require('bouncy');
var domain = require("domain");
var findHost = require("./findHost");
var d = domain.create();

d.on("error", function(err){
    console.error("Caught Error!", err);
});

var proxyBouncy = bouncy(requestHandler);
proxyBouncy.listen(7050);


function requestHandler(req, res, bounce){
    
    d.run( function(){
        findHost(req, function(error, newHost){
           console.log("finding new host");           
           if (req.headers.host === 'beep.example.com') {
                bounce(8001);
           }
           else if (req.headers.host === 'boop.example.com') {
                bounce(8002);
           }
           else {
               res.statusCode = 404;
               res.end('no such host');
           }       
       });
    });    
    
}




