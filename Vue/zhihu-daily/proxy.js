#! /usr/bin/env node
/*************************************************************************
  > File Name:     proxy.js
  > Author:        Landerl Young
  > Mail:          LanderlYoung@gmail.com
  > Created Time:  Mon Apr  8 18:58:23 2019
 ************************************************************************/

const http = require('http')
const httpProxy = require('http-proxy')


//
// Create a proxy server with custom application logic
//
const proxy = httpProxy.createProxyServer({});

//
// Create your custom server and just call `proxy.web()` to proxy
// a web request to the target passed in the options
// also you can use `proxy.ws()` to proxy a websockets request
//
const server = http.createServer(function (req, res) {
    // You can define here your custom logic to handle the request
    // and then proxy the request.
    proxy.web(req, res, {forward: 'http://news-at.zhihu.com/'});
});

console.log("listening on port 5050")
server.listen(9000);