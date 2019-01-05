import { Scene } from "phaser";

export class MainSceneStage extends Scene{
    constructor(){
        super({key: "MainSceneStage"})
    }

    preload(){
        console.log("Main Scene Stage");
    }
}