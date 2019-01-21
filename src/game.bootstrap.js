"use strict"; 

import { Game } from "phaser"; 
import { configContext } from "./game.context";

var getcontext = document.URL.split("?");


var game = new Game(configContext.getGameConfigContext);
