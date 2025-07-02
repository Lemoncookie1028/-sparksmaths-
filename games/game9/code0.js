gdjs.LobbyCode = {};
gdjs.LobbyCode.localVariables = [];
gdjs.LobbyCode.GDLobbyButtonObjects1= [];
gdjs.LobbyCode.GDLobbyButtonObjects2= [];
gdjs.LobbyCode.GDInstructions_9595TextObjects1= [];
gdjs.LobbyCode.GDInstructions_9595TextObjects2= [];
gdjs.LobbyCode.GDStoneObjects1= [];
gdjs.LobbyCode.GDStoneObjects2= [];
gdjs.LobbyCode.GDGreenPlayer_9595MenuObjects1= [];
gdjs.LobbyCode.GDGreenPlayer_9595MenuObjects2= [];
gdjs.LobbyCode.GDRedPlayer_9595MenuObjects1= [];
gdjs.LobbyCode.GDRedPlayer_9595MenuObjects2= [];
gdjs.LobbyCode.GDTitleObjects1= [];
gdjs.LobbyCode.GDTitleObjects2= [];
gdjs.LobbyCode.GDDinoVitaObjects1= [];
gdjs.LobbyCode.GDDinoVitaObjects2= [];
gdjs.LobbyCode.GDDinoDouxObjects1= [];
gdjs.LobbyCode.GDDinoDouxObjects2= [];
gdjs.LobbyCode.GDDinoMortObjects1= [];
gdjs.LobbyCode.GDDinoMortObjects2= [];
gdjs.LobbyCode.GDDinoLenaObjects1= [];
gdjs.LobbyCode.GDDinoLenaObjects2= [];
gdjs.LobbyCode.GDDinoShadowObjects1= [];
gdjs.LobbyCode.GDDinoShadowObjects2= [];
gdjs.LobbyCode.GDtitleObjects1= [];
gdjs.LobbyCode.GDtitleObjects2= [];
gdjs.LobbyCode.GDNewTextObjects1= [];
gdjs.LobbyCode.GDNewTextObjects2= [];


gdjs.LobbyCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("1").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("2").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("3").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("4").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LobbyButton"), gdjs.LobbyCode.GDLobbyButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LobbyCode.GDLobbyButtonObjects1.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDLobbyButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LobbyCode.GDLobbyButtonObjects1[k] = gdjs.LobbyCode.GDLobbyButtonObjects1[i];
        ++k;
    }
}
gdjs.LobbyCode.GDLobbyButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.multiplayer.isLobbiesWindowOpen(runtimeScene));
}
if (isConditionTrue_0) {
{gdjs.multiplayer.openLobbiesWindow(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.multiplayer.hasLobbyGameJustStarted();
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


};

gdjs.LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyCode.GDLobbyButtonObjects1.length = 0;
gdjs.LobbyCode.GDLobbyButtonObjects2.length = 0;
gdjs.LobbyCode.GDInstructions_9595TextObjects1.length = 0;
gdjs.LobbyCode.GDInstructions_9595TextObjects2.length = 0;
gdjs.LobbyCode.GDStoneObjects1.length = 0;
gdjs.LobbyCode.GDStoneObjects2.length = 0;
gdjs.LobbyCode.GDGreenPlayer_9595MenuObjects1.length = 0;
gdjs.LobbyCode.GDGreenPlayer_9595MenuObjects2.length = 0;
gdjs.LobbyCode.GDRedPlayer_9595MenuObjects1.length = 0;
gdjs.LobbyCode.GDRedPlayer_9595MenuObjects2.length = 0;
gdjs.LobbyCode.GDTitleObjects1.length = 0;
gdjs.LobbyCode.GDTitleObjects2.length = 0;
gdjs.LobbyCode.GDDinoVitaObjects1.length = 0;
gdjs.LobbyCode.GDDinoVitaObjects2.length = 0;
gdjs.LobbyCode.GDDinoDouxObjects1.length = 0;
gdjs.LobbyCode.GDDinoDouxObjects2.length = 0;
gdjs.LobbyCode.GDDinoMortObjects1.length = 0;
gdjs.LobbyCode.GDDinoMortObjects2.length = 0;
gdjs.LobbyCode.GDDinoLenaObjects1.length = 0;
gdjs.LobbyCode.GDDinoLenaObjects2.length = 0;
gdjs.LobbyCode.GDDinoShadowObjects1.length = 0;
gdjs.LobbyCode.GDDinoShadowObjects2.length = 0;
gdjs.LobbyCode.GDtitleObjects1.length = 0;
gdjs.LobbyCode.GDtitleObjects2.length = 0;
gdjs.LobbyCode.GDNewTextObjects1.length = 0;
gdjs.LobbyCode.GDNewTextObjects2.length = 0;

gdjs.LobbyCode.eventsList0(runtimeScene);
gdjs.LobbyCode.GDLobbyButtonObjects1.length = 0;
gdjs.LobbyCode.GDLobbyButtonObjects2.length = 0;
gdjs.LobbyCode.GDInstructions_9595TextObjects1.length = 0;
gdjs.LobbyCode.GDInstructions_9595TextObjects2.length = 0;
gdjs.LobbyCode.GDStoneObjects1.length = 0;
gdjs.LobbyCode.GDStoneObjects2.length = 0;
gdjs.LobbyCode.GDGreenPlayer_9595MenuObjects1.length = 0;
gdjs.LobbyCode.GDGreenPlayer_9595MenuObjects2.length = 0;
gdjs.LobbyCode.GDRedPlayer_9595MenuObjects1.length = 0;
gdjs.LobbyCode.GDRedPlayer_9595MenuObjects2.length = 0;
gdjs.LobbyCode.GDTitleObjects1.length = 0;
gdjs.LobbyCode.GDTitleObjects2.length = 0;
gdjs.LobbyCode.GDDinoVitaObjects1.length = 0;
gdjs.LobbyCode.GDDinoVitaObjects2.length = 0;
gdjs.LobbyCode.GDDinoDouxObjects1.length = 0;
gdjs.LobbyCode.GDDinoDouxObjects2.length = 0;
gdjs.LobbyCode.GDDinoMortObjects1.length = 0;
gdjs.LobbyCode.GDDinoMortObjects2.length = 0;
gdjs.LobbyCode.GDDinoLenaObjects1.length = 0;
gdjs.LobbyCode.GDDinoLenaObjects2.length = 0;
gdjs.LobbyCode.GDDinoShadowObjects1.length = 0;
gdjs.LobbyCode.GDDinoShadowObjects2.length = 0;
gdjs.LobbyCode.GDtitleObjects1.length = 0;
gdjs.LobbyCode.GDtitleObjects2.length = 0;
gdjs.LobbyCode.GDNewTextObjects1.length = 0;
gdjs.LobbyCode.GDNewTextObjects2.length = 0;


return;

}

gdjs['LobbyCode'] = gdjs.LobbyCode;
