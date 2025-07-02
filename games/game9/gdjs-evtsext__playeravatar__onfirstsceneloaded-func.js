
if (typeof gdjs.evtsExt__PlayerAvatar__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__PlayerAvatar__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PlayerAvatar__onFirstSceneLoaded = {};


gdjs.evtsExt__PlayerAvatar__onFirstSceneLoaded.userFunc0xe513b0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
//Define an new private object javascript for the Avatar extension
gdjs._extensionAvatar = {};

gdjs._extensionAvatar.getGDevelopProfile = async function (url) {

    // Get the URL of the avatar from the GDevelop profile API
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        return json;

    } catch (error) {
        console.error(error.message);
        return null;
    }
}

};
gdjs.evtsExt__PlayerAvatar__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PlayerAvatar__onFirstSceneLoaded.userFunc0xe513b0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__PlayerAvatar__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PlayerAvatar"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PlayerAvatar"),
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PlayerAvatar__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PlayerAvatar__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__PlayerAvatar__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__PlayerAvatar__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__PlayerAvatar__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__PlayerAvatar__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
