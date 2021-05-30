# MyWallet 

This is a crypto exchange, it provides realtime data, executes orders, and secures assets on behalf of customers. 

See sample of this app at https://wallet-poc.herokuapp.com/

To run the app run 
### `npm start`



## Notes

This project is still being worked on:

## Decisions
### Currency data collection - API Strategy
Low latency and high availability are a number priority. 

####REST
REST API calls won't be ideal because they are stateful and are not good in handling real-time data. Every HTTP call is expensive and we'll be making several of these calls throughout the day every second. 

####Websocket
Websocket calls are more ideal because they are stateless and are good at handling realtime data, they are commonly used with chat apps and stock tickers. Communication is bi-directional, the connection is maintained so it's less costly to consume data.

#####gRPC
In a perfect world I would recommend gRPC's but I will steer clear from them because there is not enough tools or resources to support gRPCs in JavaScript. 

gRPC uses HTTP/2 and is used to send proto buffs, which are language neutral serialized data structures. 

Find more details on gRPC below:
https://www.improbable.io/blog/grpc-web-moving-past-restjson-towards-type-safe-web-apis

