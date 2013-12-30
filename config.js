var config ={
    redis: {
      development:{
      	hostname:  "54.219.217.19" ,
      	port: 6379
      }
    },
    frontdoor_schema:{
      proxyMapList: "proxyMapList"
       // Entry: frontdoor:web-34hh343...runnable.pw => http://23.3.3.2:80
    }
};

module.exports  = config;
        