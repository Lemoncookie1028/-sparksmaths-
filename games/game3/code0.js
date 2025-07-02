gdjs.start_32menuCode = {};
gdjs.start_32menuCode.localVariables = [];
gdjs.start_32menuCode.GDstartObjects1= [];
gdjs.start_32menuCode.GDstartObjects2= [];
gdjs.start_32menuCode.GDleaderboardObjects1= [];
gdjs.start_32menuCode.GDleaderboardObjects2= [];
gdjs.start_32menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.start_32menuCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.start_32menuCode.GDNewTextObjects1= [];
gdjs.start_32menuCode.GDNewTextObjects2= [];
gdjs.start_32menuCode.GDNewSpriteObjects1= [];
gdjs.start_32menuCode.GDNewSpriteObjects2= [];
gdjs.start_32menuCode.GDRoomFloorObjects1= [];
gdjs.start_32menuCode.GDRoomFloorObjects2= [];
gdjs.start_32menuCode.GDRoomObjects1= [];
gdjs.start_32menuCode.GDRoomObjects2= [];
gdjs.start_32menuCode.GDRoomDoorsObjects1= [];
gdjs.start_32menuCode.GDRoomDoorsObjects2= [];
gdjs.start_32menuCode.GDGunObjects1= [];
gdjs.start_32menuCode.GDGunObjects2= [];
gdjs.start_32menuCode.GDPlayerObjects1= [];
gdjs.start_32menuCode.GDPlayerObjects2= [];


gdjs.start_32menuCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.start_32menuCode.GDstartObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.start_32menuCode.GDstartObjects1.length;i<l;++i) {
    if ( gdjs.start_32menuCode.GDstartObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.start_32menuCode.GDstartObjects1[k] = gdjs.start_32menuCode.GDstartObjects1[i];
        ++k;
    }
}
gdjs.start_32menuCode.GDstartObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainGame", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("leaderboard"), gdjs.start_32menuCode.GDleaderboardObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.start_32menuCode.GDleaderboardObjects1.length;i<l;++i) {
    if ( gdjs.start_32menuCode.GDleaderboardObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.start_32menuCode.GDleaderboardObjects1[k] = gdjs.start_32menuCode.GDleaderboardObjects1[i];
        ++k;
    }
}
gdjs.start_32menuCode.GDleaderboardObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "2f3ee7c0-7266-4fe4-9271-a8a783b6153c", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.start_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.start_32menuCode.GDstartObjects1.length = 0;
gdjs.start_32menuCode.GDstartObjects2.length = 0;
gdjs.start_32menuCode.GDleaderboardObjects1.length = 0;
gdjs.start_32menuCode.GDleaderboardObjects2.length = 0;
gdjs.start_32menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.start_32menuCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.start_32menuCode.GDNewTextObjects1.length = 0;
gdjs.start_32menuCode.GDNewTextObjects2.length = 0;
gdjs.start_32menuCode.GDNewSpriteObjects1.length = 0;
gdjs.start_32menuCode.GDNewSpriteObjects2.length = 0;
gdjs.start_32menuCode.GDRoomFloorObjects1.length = 0;
gdjs.start_32menuCode.GDRoomFloorObjects2.length = 0;
gdjs.start_32menuCode.GDRoomObjects1.length = 0;
gdjs.start_32menuCode.GDRoomObjects2.length = 0;
gdjs.start_32menuCode.GDRoomDoorsObjects1.length = 0;
gdjs.start_32menuCode.GDRoomDoorsObjects2.length = 0;
gdjs.start_32menuCode.GDGunObjects1.length = 0;
gdjs.start_32menuCode.GDGunObjects2.length = 0;
gdjs.start_32menuCode.GDPlayerObjects1.length = 0;
gdjs.start_32menuCode.GDPlayerObjects2.length = 0;

gdjs.start_32menuCode.eventsList0(runtimeScene);
gdjs.start_32menuCode.GDstartObjects1.length = 0;
gdjs.start_32menuCode.GDstartObjects2.length = 0;
gdjs.start_32menuCode.GDleaderboardObjects1.length = 0;
gdjs.start_32menuCode.GDleaderboardObjects2.length = 0;
gdjs.start_32menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.start_32menuCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.start_32menuCode.GDNewTextObjects1.length = 0;
gdjs.start_32menuCode.GDNewTextObjects2.length = 0;
gdjs.start_32menuCode.GDNewSpriteObjects1.length = 0;
gdjs.start_32menuCode.GDNewSpriteObjects2.length = 0;
gdjs.start_32menuCode.GDRoomFloorObjects1.length = 0;
gdjs.start_32menuCode.GDRoomFloorObjects2.length = 0;
gdjs.start_32menuCode.GDRoomObjects1.length = 0;
gdjs.start_32menuCode.GDRoomObjects2.length = 0;
gdjs.start_32menuCode.GDRoomDoorsObjects1.length = 0;
gdjs.start_32menuCode.GDRoomDoorsObjects2.length = 0;
gdjs.start_32menuCode.GDGunObjects1.length = 0;
gdjs.start_32menuCode.GDGunObjects2.length = 0;
gdjs.start_32menuCode.GDPlayerObjects1.length = 0;
gdjs.start_32menuCode.GDPlayerObjects2.length = 0;


return;

}

gdjs['start_32menuCode'] = gdjs.start_32menuCode;
