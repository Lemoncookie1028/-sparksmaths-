
if (typeof gdjs.evtsExt__CameraShake__SetLayerTranslationAmplitude !== "undefined") {
  gdjs.evtsExt__CameraShake__SetLayerTranslationAmplitude.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CameraShake__SetLayerTranslationAmplitude = {};


gdjs.evtsExt__CameraShake__SetLayerTranslationAmplitude.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).setString(eventsFunctionContext.getArgument("NewLayerName"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("NewLayerName") == "");
}
if (isConditionTrue_0) {
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).setString("__BaseLayer");
}}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsString()).getChild("AmplitudeX").setNumber(eventsFunctionContext.getArgument("AmplitudeX"));
}{eventsFunctionContext.sceneVariablesForExtension.getFromIndex(6).getChild(eventsFunctionContext.sceneVariablesForExtension.getFromIndex(8).getAsString()).getChild("AmplitudeY").setNumber(eventsFunctionContext.getArgument("AmplitudeY"));
}}

}


};

gdjs.evtsExt__CameraShake__SetLayerTranslationAmplitude.func = function(runtimeScene, AmplitudeX, AmplitudeY, NewLayerName, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CameraShake"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CameraShake"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "AmplitudeX") return AmplitudeX;
if (argName === "AmplitudeY") return AmplitudeY;
if (argName === "NewLayerName") return NewLayerName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CameraShake__SetLayerTranslationAmplitude.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CameraShake__SetLayerTranslationAmplitude.registeredGdjsCallbacks = [];