import { Scene } from "phaser";

export class LoadScene extends Scene{
    constructor(){
        super({key: "LoadScene"});
    }

    preload(){
        console.log("Load Scene");
    }

    create(){
        this.scene.start("MainSceneStage");
    }
}