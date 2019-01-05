"use strict";

var http = require("http-server");
require('dotenv').config({path: `${__dirname}/../../.env.development`});

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.status(200).sendFile("../../index.html");
}).listen(process.env.PORT,process.env.HOST);

console.log(`Server running at http://${process.env.HOST}:${process.env.PORT}/`);