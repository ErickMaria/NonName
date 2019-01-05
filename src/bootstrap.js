"use strict"; 

import { Game } from "phaser"; 
import config from "./config";

//var game = new Game(config);

class MyGame extends Game{
    constructor(){
        super(config);
    }
}

window.onload = new MyGame();