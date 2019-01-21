import { Scene } from "phaser";

export class MainSceneTest extends Scene{
    constructor(){
        super({key: "MainSceneTest"})
    }

    preload(){
        console.log("Main Scene Test");
    }
}