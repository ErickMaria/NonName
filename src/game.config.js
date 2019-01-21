import { BootScene } from "./scenes/boot.scene.defaul";
import { LoadScene } from "./scenes/load.scene.default";
import { MainSceneTest } from "./scenes/tests/main.scene.test";
import { MainSceneStage } from "./scenes/stages/main.scene.stage";

export var loadSceneDefault = {
    stage: 'MainSceneStage',
    test: 'MainSceneTest'  
};

export var config =  {

    type: Phaser.AUTO,
    width: 896,
    height: 504,
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: [
        //for System
        BootScene,
        LoadScene,
        
        //for Game 
        MainSceneStage
    ]
};

export var configTest =  {
    type: Phaser.AUTO,
    width: 896,
    height: 504,
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    debug: true,
    scene: [
        //for System
        BootScene,
        LoadScene,
        
        //for Test Game 
        MainSceneTest
    ]
};