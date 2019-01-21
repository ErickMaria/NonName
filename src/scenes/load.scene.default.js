import { Scene } from "phaser";
import { configContext } from "../game.context";

export class LoadScene extends Scene{
    constructor(){
        super({key: "LoadScene"});
    }

    preload(){
        console.log("Load Scene");
    }

    create(){
        this.scene.start(configContext.getGameSceneLoadDefaulName);
    }
}