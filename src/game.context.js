import { config, configTest, loadSceneDefault } from "./game.config";

var gameContext = config;
var defaultScene = loadSceneDefault.stage;
var getcontext = document.URL.split("?");

if(getcontext[1] !== undefined ){
    if(getcontext[1] === "test"){
        gameContext = configTest;
        defaultScene = loadSceneDefault.test;
    }
}

export var configContext = {
    getGameConfigContext: gameContext,
    getGameSceneLoadDefaulName: defaultScene
}