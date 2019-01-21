import { Scene } from "phaser";

export class MainSceneTest extends Scene{
    constructor(){
        super({key: "MainSceneTest"})
    }

    preload(){
        console.log("Main Scene Test");

        this.load.image('screentest', '../../../assets/screentest.png')

    }
    
    create(){

        this.add.image(896/2, 504/2, 'screentest');
    }

    update(dt){

    }
}