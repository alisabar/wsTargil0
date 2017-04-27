var http = require('http');
var express = require('express');
var EventEmitter=require('events');
var app = express();
var eventConfig = require('./configs')
var myEmtr = new EventEmitter();

http.createServer(app).listen(8080);

var Player = require('./players_wins');
var player1 = new Player('shalom', 'swim');

global.messages = [];


player1.on(eventConfig.HELLO, function(){
   var p= player1.displayScore();
    messages.push(JSON.stringify (p));
    console.log(p);
});



app.get('/', function(req,res){


    player1.addScore();
       res.send(messages.pop());

 });