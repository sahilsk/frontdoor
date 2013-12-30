#Frontdoor
##Description: 
    Simple proxy meant to forward incoming request to another url based upon request header data.


##Init
Open config.js and write your redis server connection information:
```
    redis: {
      development:{
              hostname:  "?.?.?.?:????" ,
              port: ????
      }
    }

```


```
 rpush frontend:*.runnable.pw frontdoor
 rpush frontend:*.runnable.pw http://50.18.15.145:7050
 ```
 
 
 ##To insert new frontdoor entry( url_to_map => mapped_url )
 ```
  rpush frontdoor:path.to.map.domain.tld   http://ip.address.map:port
 eg.
  rpush frontdoor:web-234323.example.com    http://192.168.1.1:8000
 ```
 