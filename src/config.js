import { BootScene } from "./scenes/boot.scene.defaul";
import { LoadScene } from "./scenes/load.scene.default";
import { MainSceneStage } from "./scenes/stages/main.scene.stage";



export default  {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    parent: null,
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