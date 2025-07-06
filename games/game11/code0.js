gdjs.main_32menuCode = {};
gdjs.main_32menuCode.localVariables = [];
gdjs.main_32menuCode.GDlogoObjects1= [];
gdjs.main_32menuCode.GDlogoObjects2= [];
gdjs.main_32menuCode.GDSummerBackgroundObjects1= [];
gdjs.main_32menuCode.GDSummerBackgroundObjects2= [];
gdjs.main_32menuCode.GDNewTextObjects1= [];
gdjs.main_32menuCode.GDNewTextObjects2= [];
gdjs.main_32menuCode.GDNewText2Objects1= [];
gdjs.main_32menuCode.GDNewText2Objects2= [];


gdjs.main_32menuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.main_32menuCode.GDNewText2Objects1);
{for(var i = 0, len = gdjs.main_32menuCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.main_32menuCode.GDNewText2Objects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(runtimeScene.getGame().getVariables().getFromIndex(4).getAsNumber(), 5, 5, 1, 1, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.main_32menuCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.main_32menuCode.GDNewText2Objects1[i].setOutlineColor("155;155;155");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.main_32menuCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main_32menuCode.GDNewText2Objects1.length;i<l;++i) {
    if ( gdjs.main_32menuCode.GDNewText2Objects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.main_32menuCode.GDNewText2Objects1[k] = gdjs.main_32menuCode.GDNewText2Objects1[i];
        ++k;
    }
}
gdjs.main_32menuCode.GDNewText2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.main_32menuCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main_32menuCode.GDNewText2Objects1.length;i<l;++i) {
    if ( gdjs.main_32menuCode.GDNewText2Objects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.main_32menuCode.GDNewText2Objects1[k] = gdjs.main_32menuCode.GDNewText2Objects1[i];
        ++k;
    }
}
gdjs.main_32menuCode.GDNewText2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main_32menuCode.GDNewText2Objects1 */
{for(var i = 0, len = gdjs.main_32menuCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.main_32menuCode.GDNewText2Objects1[i].setOutlineEnabled(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs.main_32menuCode.GDNewText2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.main_32menuCode.GDNewText2Objects1.length;i<l;++i) {
    if ( !(gdjs.main_32menuCode.GDNewText2Objects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.main_32menuCode.GDNewText2Objects1[k] = gdjs.main_32menuCode.GDNewText2Objects1[i];
        ++k;
    }
}
gdjs.main_32menuCode.GDNewText2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.main_32menuCode.GDNewText2Objects1 */
{for(var i = 0, len = gdjs.main_32menuCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs.main_32menuCode.GDNewText2Objects1[i].setOutlineEnabled(false);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.main_32menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.main_32menuCode.GDlogoObjects1.length = 0;
gdjs.main_32menuCode.GDlogoObjects2.length = 0;
gdjs.main_32menuCode.GDSummerBackgroundObjects1.length = 0;
gdjs.main_32menuCode.GDSummerBackgroundObjects2.length = 0;
gdjs.main_32menuCode.GDNewTextObjects1.length = 0;
gdjs.main_32menuCode.GDNewTextObjects2.length = 0;
gdjs.main_32menuCode.GDNewText2Objects1.length = 0;
gdjs.main_32menuCode.GDNewText2Objects2.length = 0;

gdjs.main_32menuCode.eventsList0(runtimeScene);
gdjs.main_32menuCode.GDlogoObjects1.length = 0;
gdjs.main_32menuCode.GDlogoObjects2.length = 0;
gdjs.main_32menuCode.GDSummerBackgroundObjects1.length = 0;
gdjs.main_32menuCode.GDSummerBackgroundObjects2.length = 0;
gdjs.main_32menuCode.GDNewTextObjects1.length = 0;
gdjs.main_32menuCode.GDNewTextObjects2.length = 0;
gdjs.main_32menuCode.GDNewText2Objects1.length = 0;
gdjs.main_32menuCode.GDNewText2Objects2.length = 0;


return;

}

gdjs['main_32menuCode'] = gdjs.main_32menuCode;
