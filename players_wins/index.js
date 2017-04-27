'use strict';
var EventEmitter=require('events');
var eventConfig = require('./configs');

module.exports = class Player extends EventEmitter{

    constructor(name, sport){
        super();
        this.score=0;
        this.name=name;
        this.sport=sport;
        this.on("scoreChanged",this.displayScore);
    }
    
    displayScore(){
        var str= `Score is: ${this.score}, Name: ${this.name}, Sport: ${this.sport}`;

        return str;

    }
     addScore(){
        if(this.score>4)
        {
            this.reduceScore();
        }
        else {
            this.score+=1;
        }
        this.emit(eventConfig.HELLO);
    }

     reduceScore(){
        if(this.score>0){
         this.score-=1;
        }
        else{
            this.addScore();
        }
        this.emit(eventConfig.HELLO);
    }
}
 