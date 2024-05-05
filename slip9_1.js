/*Q1)Create a Node.js file that writes an HTML form, with a concatenate two string */

const express = require('express');
const qs = require('querystring');
const http = require('http');

const app =express();
const server=http.createServer(app);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/slip9_1.html');
});

app.post('/', (req, res) => {
    let body = '';
    req.on('data', chunk => body += chunk.toString());
    req.on('end', () => {
        const data = qs.parse(body);
        const result = data.string1 + data.string2;
        res.send(`<h1>Concatenated String:</h1><p>${result}</p>`);
    });
});

server.listen(3333,function(){
    console.log("server is listening on port:3333")
})