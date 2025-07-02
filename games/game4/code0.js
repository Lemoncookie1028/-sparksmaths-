gdjs.MainMenuCode = {};
gdjs.MainMenuCode.localVariables = [];
gdjs.MainMenuCode.GDTitleObjects1= [];
gdjs.MainMenuCode.GDTitleObjects2= [];
gdjs.MainMenuCode.GDPlayObjects1= [];
gdjs.MainMenuCode.GDPlayObjects2= [];
gdjs.MainMenuCode.GDSettingsLabelObjects1= [];
gdjs.MainMenuCode.GDSettingsLabelObjects2= [];
gdjs.MainMenuCode.GDSoundVolumeObjects1= [];
gdjs.MainMenuCode.GDSoundVolumeObjects2= [];
gdjs.MainMenuCode.GDMusicVolumeObjects1= [];
gdjs.MainMenuCode.GDMusicVolumeObjects2= [];
gdjs.MainMenuCode.GDBackObjects1= [];
gdjs.MainMenuCode.GDBackObjects2= [];
gdjs.MainMenuCode.GDQuitObjects1= [];
gdjs.MainMenuCode.GDQuitObjects2= [];
gdjs.MainMenuCode.GDMarkerObjects1= [];
gdjs.MainMenuCode.GDMarkerObjects2= [];
gdjs.MainMenuCode.GDSettingsMarkerObjects1= [];
gdjs.MainMenuCode.GDSettingsMarkerObjects2= [];
gdjs.MainMenuCode.GDSoundSliderObjects1= [];
gdjs.MainMenuCode.GDSoundSliderObjects2= [];
gdjs.MainMenuCode.GDMusicSliderObjects1= [];
gdjs.MainMenuCode.GDMusicSliderObjects2= [];
gdjs.MainMenuCode.GDScreenOrientationCheckerObjects1= [];
gdjs.MainMenuCode.GDScreenOrientationCheckerObjects2= [];
gdjs.MainMenuCode.GDnameObjects1= [];
gdjs.MainMenuCode.GDnameObjects2= [];
gdjs.MainMenuCode.GDTransitionObjects1= [];
gdjs.MainMenuCode.GDTransitionObjects2= [];
gdjs.MainMenuCode.GDDarkenObjects1= [];
gdjs.MainMenuCode.GDDarkenObjects2= [];


gdjs.MainMenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Screen orientation checker");
}}

}


};gdjs.MainMenuCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.MainMenuCode.GDMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.MainMenuCode.GDMusicSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsMarker"), gdjs.MainMenuCode.GDSettingsMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundSlider"), gdjs.MainMenuCode.GDSoundSliderObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMarkerObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDSettingsMarkerObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSettingsMarkerObjects1[i].hide();
}
}{gdjs.evtTools.storage.readStringFromJSONFile("Settings", "Settings", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.MainMenuCode.GDSoundSliderObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSoundSliderObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDMusicSliderObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMusicSliderObjects1[i].SetValue(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music").getAsNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 1.8, "transition", 0);
}
{ //Subevents
gdjs.MainMenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.MainMenuCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.MainMenuCode.GDMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.MainMenuCode.GDMusicSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("MusicVolume"), gdjs.MainMenuCode.GDMusicVolumeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainMenuCode.GDPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.MainMenuCode.GDQuitObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsLabel"), gdjs.MainMenuCode.GDSettingsLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsMarker"), gdjs.MainMenuCode.GDSettingsMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundSlider"), gdjs.MainMenuCode.GDSoundSliderObjects1);
gdjs.copyArray(runtimeScene.getObjects("SoundVolume"), gdjs.MainMenuCode.GDSoundVolumeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.MainMenuCode.GDTitleObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTitleObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.MainMenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.MainMenuCode.GDSettingsLabelObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSettingsLabelObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.MainMenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuitObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.MainMenuCode.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMarkerObjects1[i].setCenterXInScene(0.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.MainMenuCode.GDSoundSliderObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSoundSliderObjects1[i].setCenterXInScene(1.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.MainMenuCode.GDMusicSliderObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMusicSliderObjects1[i].setCenterXInScene(1.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.MainMenuCode.GDSoundVolumeObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSoundVolumeObjects1[i].setCenterXInScene(1.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.MainMenuCode.GDMusicVolumeObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDMusicVolumeObjects1[i].setCenterXInScene(1.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.MainMenuCode.GDBackObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackObjects1[i].setCenterXInScene(1.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.MainMenuCode.GDSettingsMarkerObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSettingsMarkerObjects1[i].setCenterXInScene(1.5 * gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.MainMenuCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainMenuCode.GDPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.MainMenuCode.GDQuitObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsLabel"), gdjs.MainMenuCode.GDSettingsLabelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPlayObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayObjects1[k] = gdjs.MainMenuCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSettingsLabelObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSettingsLabelObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSettingsLabelObjects1[k] = gdjs.MainMenuCode.GDSettingsLabelObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSettingsLabelObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBackObjects1[k] = gdjs.MainMenuCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBackObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDQuitObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDQuitObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDQuitObjects1[k] = gdjs.MainMenuCode.GDQuitObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDQuitObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDBackObjects1 */
/* Reuse gdjs.MainMenuCode.GDPlayObjects1 */
/* Reuse gdjs.MainMenuCode.GDQuitObjects1 */
/* Reuse gdjs.MainMenuCode.GDSettingsLabelObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.MainMenuCode.GDSettingsLabelObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSettingsLabelObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.MainMenuCode.GDBackObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackObjects1[i].enableEffect("Effect", true);
}
for(var i = 0, len = gdjs.MainMenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuitObjects1[i].enableEffect("Effect", true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.MainMenuCode.GDBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainMenuCode.GDPlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.MainMenuCode.GDQuitObjects1);
gdjs.copyArray(runtimeScene.getObjects("SettingsLabel"), gdjs.MainMenuCode.GDSettingsLabelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDPlayObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayObjects1[k] = gdjs.MainMenuCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSettingsLabelObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDSettingsLabelObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSettingsLabelObjects1[k] = gdjs.MainMenuCode.GDSettingsLabelObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSettingsLabelObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBackObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBackObjects1[k] = gdjs.MainMenuCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBackObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDQuitObjects1.length;i<l;++i) {
    if ( !(gdjs.MainMenuCode.GDQuitObjects1[i].getBehavior("ButtonFSM").IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDQuitObjects1[k] = gdjs.MainMenuCode.GDQuitObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDQuitObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDBackObjects1 */
/* Reuse gdjs.MainMenuCode.GDPlayObjects1 */
/* Reuse gdjs.MainMenuCode.GDQuitObjects1 */
/* Reuse gdjs.MainMenuCode.GDSettingsLabelObjects1 */
{for(var i = 0, len = gdjs.MainMenuCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDPlayObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.MainMenuCode.GDSettingsLabelObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDSettingsLabelObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.MainMenuCode.GDBackObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDBackObjects1[i].enableEffect("Effect", false);
}
for(var i = 0, len = gdjs.MainMenuCode.GDQuitObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDQuitObjects1[i].enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundSlider"), gdjs.MainMenuCode.GDSoundSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSoundSliderObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSoundSliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSoundSliderObjects1[k] = gdjs.MainMenuCode.GDSoundSliderObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSoundSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDSoundSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Sound").setNumber((( gdjs.MainMenuCode.GDSoundSliderObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDSoundSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicSlider"), gdjs.MainMenuCode.GDMusicSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDMusicSliderObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDMusicSliderObjects1[i].IsBeingDragged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDMusicSliderObjects1[k] = gdjs.MainMenuCode.GDMusicSliderObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDMusicSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MainMenuCode.GDMusicSliderObjects1 */
{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Music").setNumber((( gdjs.MainMenuCode.GDMusicSliderObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDMusicSliderObjects1[0].Value((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.MainMenuCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDPlayObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDPlayObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDPlayObjects1[k] = gdjs.MainMenuCode.GDPlayObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDPlayObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.MainMenuCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.MainMenuCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.MainMenuCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 1, "Circular", "Forward", 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.MainMenuCode.GDTransitionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDTransitionObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffectIsEnd((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDTransitionObjects1[k] = gdjs.MainMenuCode.GDTransitionObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDTransitionObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Quit"), gdjs.MainMenuCode.GDQuitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDQuitObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDQuitObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDQuitObjects1[k] = gdjs.MainMenuCode.GDQuitObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDQuitObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SettingsLabel"), gdjs.MainMenuCode.GDSettingsLabelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDSettingsLabelObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDSettingsLabelObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDSettingsLabelObjects1[k] = gdjs.MainMenuCode.GDSettingsLabelObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDSettingsLabelObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("SettingsMarker"), gdjs.MainMenuCode.GDSettingsMarkerObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", (( gdjs.MainMenuCode.GDSettingsMarkerObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDSettingsMarkerObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "easeInOutQuad", 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Back"), gdjs.MainMenuCode.GDBackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MainMenuCode.GDBackObjects1.length;i<l;++i) {
    if ( gdjs.MainMenuCode.GDBackObjects1[i].getBehavior("ButtonFSM").IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.MainMenuCode.GDBackObjects1[k] = gdjs.MainMenuCode.GDBackObjects1[i];
        ++k;
    }
}
gdjs.MainMenuCode.GDBackObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.MainMenuCode.GDMarkerObjects1);
{gdjs.evtTools.tween.tweenCamera2(runtimeScene, "CameraMove", (( gdjs.MainMenuCode.GDMarkerObjects1.length === 0 ) ? 0 :gdjs.MainMenuCode.GDMarkerObjects1[0].getCenterXInScene()), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0), "", "easeInOutQuad", 1);
}{gdjs.evtTools.storage.writeStringInJSONFile("Settings", "Settings", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(0)));
}}

}


};

gdjs.MainMenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDPlayObjects1.length = 0;
gdjs.MainMenuCode.GDPlayObjects2.length = 0;
gdjs.MainMenuCode.GDSettingsLabelObjects1.length = 0;
gdjs.MainMenuCode.GDSettingsLabelObjects2.length = 0;
gdjs.MainMenuCode.GDSoundVolumeObjects1.length = 0;
gdjs.MainMenuCode.GDSoundVolumeObjects2.length = 0;
gdjs.MainMenuCode.GDMusicVolumeObjects1.length = 0;
gdjs.MainMenuCode.GDMusicVolumeObjects2.length = 0;
gdjs.MainMenuCode.GDBackObjects1.length = 0;
gdjs.MainMenuCode.GDBackObjects2.length = 0;
gdjs.MainMenuCode.GDQuitObjects1.length = 0;
gdjs.MainMenuCode.GDQuitObjects2.length = 0;
gdjs.MainMenuCode.GDMarkerObjects1.length = 0;
gdjs.MainMenuCode.GDMarkerObjects2.length = 0;
gdjs.MainMenuCode.GDSettingsMarkerObjects1.length = 0;
gdjs.MainMenuCode.GDSettingsMarkerObjects2.length = 0;
gdjs.MainMenuCode.GDSoundSliderObjects1.length = 0;
gdjs.MainMenuCode.GDSoundSliderObjects2.length = 0;
gdjs.MainMenuCode.GDMusicSliderObjects1.length = 0;
gdjs.MainMenuCode.GDMusicSliderObjects2.length = 0;
gdjs.MainMenuCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.MainMenuCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.MainMenuCode.GDnameObjects1.length = 0;
gdjs.MainMenuCode.GDnameObjects2.length = 0;
gdjs.MainMenuCode.GDTransitionObjects1.length = 0;
gdjs.MainMenuCode.GDTransitionObjects2.length = 0;
gdjs.MainMenuCode.GDDarkenObjects1.length = 0;
gdjs.MainMenuCode.GDDarkenObjects2.length = 0;

gdjs.MainMenuCode.eventsList1(runtimeScene);
gdjs.MainMenuCode.GDTitleObjects1.length = 0;
gdjs.MainMenuCode.GDTitleObjects2.length = 0;
gdjs.MainMenuCode.GDPlayObjects1.length = 0;
gdjs.MainMenuCode.GDPlayObjects2.length = 0;
gdjs.MainMenuCode.GDSettingsLabelObjects1.length = 0;
gdjs.MainMenuCode.GDSettingsLabelObjects2.length = 0;
gdjs.MainMenuCode.GDSoundVolumeObjects1.length = 0;
gdjs.MainMenuCode.GDSoundVolumeObjects2.length = 0;
gdjs.MainMenuCode.GDMusicVolumeObjects1.length = 0;
gdjs.MainMenuCode.GDMusicVolumeObjects2.length = 0;
gdjs.MainMenuCode.GDBackObjects1.length = 0;
gdjs.MainMenuCode.GDBackObjects2.length = 0;
gdjs.MainMenuCode.GDQuitObjects1.length = 0;
gdjs.MainMenuCode.GDQuitObjects2.length = 0;
gdjs.MainMenuCode.GDMarkerObjects1.length = 0;
gdjs.MainMenuCode.GDMarkerObjects2.length = 0;
gdjs.MainMenuCode.GDSettingsMarkerObjects1.length = 0;
gdjs.MainMenuCode.GDSettingsMarkerObjects2.length = 0;
gdjs.MainMenuCode.GDSoundSliderObjects1.length = 0;
gdjs.MainMenuCode.GDSoundSliderObjects2.length = 0;
gdjs.MainMenuCode.GDMusicSliderObjects1.length = 0;
gdjs.MainMenuCode.GDMusicSliderObjects2.length = 0;
gdjs.MainMenuCode.GDScreenOrientationCheckerObjects1.length = 0;
gdjs.MainMenuCode.GDScreenOrientationCheckerObjects2.length = 0;
gdjs.MainMenuCode.GDnameObjects1.length = 0;
gdjs.MainMenuCode.GDnameObjects2.length = 0;
gdjs.MainMenuCode.GDTransitionObjects1.length = 0;
gdjs.MainMenuCode.GDTransitionObjects2.length = 0;
gdjs.MainMenuCode.GDDarkenObjects1.length = 0;
gdjs.MainMenuCode.GDDarkenObjects2.length = 0;


return;

}

gdjs['MainMenuCode'] = gdjs.MainMenuCode;
