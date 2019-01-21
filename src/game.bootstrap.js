"use strict";

import { Game } from "phaser";
import { configContext } from "./game.context";
import { enableResize, disableResize } from './utils/resize'

window.onload = () => {

    window.game = new Game(configContext.getGameConfigContext);
    enableResize();
}
