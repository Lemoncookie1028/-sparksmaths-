
gdjs.evtsExt__GameOverDialog__GameOverDialog = gdjs.evtsExt__GameOverDialog__GameOverDialog || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog = class GameOverDialog extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.MaxScore = objectData.content.MaxScore !== undefined ? objectData.content.MaxScore : Number("950") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.MaxScore !== newObjectData.content.MaxScore)
      this._objectData.MaxScore = newObjectData.content.MaxScore;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getMaxScore() {
    return this._objectData.MaxScore !== undefined ? this._objectData.MaxScore : Number("950") || 0;
  }
  _setMaxScore(newValue) {
    this._objectData.MaxScore = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext = {};
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDObjectObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDObjectObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenBackgroundObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenBackgroundObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDRetryButtonObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDRetryButtonObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenChallengeTextObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenChallengeTextObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenSubHeaderObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenSubHeaderObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenHeaderObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenHeaderObjects2= [];


gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("EndScreenSubHeader"), gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenSubHeaderObjects1);
{for(var i = 0, len = gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenSubHeaderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenSubHeaderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("You got " + ("" + eventsFunctionContext.getArgument("Score")) + " points!");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Score")) || 0 : 0) < eventsFunctionContext.getObjects("Object")[0]._getMaxScore());
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("EndScreenChallengeText"), gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenChallengeTextObjects1);
{for(var i = 0, len = gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenChallengeTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenChallengeTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("Can you get " + ("" + eventsFunctionContext.getObjects("Object")[0]._getMaxScore()) + " points?");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Score")) || 0 : 0) >= eventsFunctionContext.getObjects("Object")[0]._getMaxScore());
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("EndScreenChallengeText"), gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenChallengeTextObjects1);
{for(var i = 0, len = gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenChallengeTextObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenChallengeTextObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("You got the highest number of points!");
}
}}

}


};

gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScore = function(Score, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDEndScreenBackgroundObjectsList = [...runtimeScene.getObjects("EndScreenBackground")];
var GDEndScreenBackgroundObjects = Hashtable.newFrom({"EndScreenBackground": thisGDEndScreenBackgroundObjectsList});
var thisGDRetryButtonObjectsList = [...runtimeScene.getObjects("RetryButton")];
var GDRetryButtonObjects = Hashtable.newFrom({"RetryButton": thisGDRetryButtonObjectsList});
var thisGDEndScreenChallengeTextObjectsList = [...runtimeScene.getObjects("EndScreenChallengeText")];
var GDEndScreenChallengeTextObjects = Hashtable.newFrom({"EndScreenChallengeText": thisGDEndScreenChallengeTextObjectsList});
var thisGDEndScreenSubHeaderObjectsList = [...runtimeScene.getObjects("EndScreenSubHeader")];
var GDEndScreenSubHeaderObjects = Hashtable.newFrom({"EndScreenSubHeader": thisGDEndScreenSubHeaderObjectsList});
var thisGDEndScreenHeaderObjectsList = [...runtimeScene.getObjects("EndScreenHeader")];
var GDEndScreenHeaderObjects = Hashtable.newFrom({"EndScreenHeader": thisGDEndScreenHeaderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "EndScreenBackground": GDEndScreenBackgroundObjects
, "RetryButton": GDRetryButtonObjects
, "EndScreenChallengeText": GDEndScreenChallengeTextObjects
, "EndScreenSubHeader": GDEndScreenSubHeaderObjects
, "EndScreenHeader": GDEndScreenHeaderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "EndScreenBackground": thisGDEndScreenBackgroundObjectsList
, "RetryButton": thisGDRetryButtonObjectsList
, "EndScreenChallengeText": thisGDEndScreenChallengeTextObjectsList
, "EndScreenSubHeader": thisGDEndScreenSubHeaderObjectsList
, "EndScreenHeader": thisGDEndScreenHeaderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GameOverDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GameOverDialog"),
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
if (argName === "Score") return Score;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenBackgroundObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenBackgroundObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDRetryButtonObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDRetryButtonObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenChallengeTextObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenChallengeTextObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenSubHeaderObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenSubHeaderObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenHeaderObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenHeaderObjects2.length = 0;

gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenBackgroundObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenBackgroundObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDRetryButtonObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDRetryButtonObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenChallengeTextObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenChallengeTextObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenSubHeaderObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenSubHeaderObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenHeaderObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.SetScoreContext.GDEndScreenHeaderObjects2.length = 0;


return;
}
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext = {};
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDObjectObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenBackgroundObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenBackgroundObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenChallengeTextObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenChallengeTextObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenSubHeaderObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenSubHeaderObjects2= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenHeaderObjects1= [];
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenHeaderObjects2= [];


gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("RetryButton"), gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects1[k] = gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClicked = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDEndScreenBackgroundObjectsList = [...runtimeScene.getObjects("EndScreenBackground")];
var GDEndScreenBackgroundObjects = Hashtable.newFrom({"EndScreenBackground": thisGDEndScreenBackgroundObjectsList});
var thisGDRetryButtonObjectsList = [...runtimeScene.getObjects("RetryButton")];
var GDRetryButtonObjects = Hashtable.newFrom({"RetryButton": thisGDRetryButtonObjectsList});
var thisGDEndScreenChallengeTextObjectsList = [...runtimeScene.getObjects("EndScreenChallengeText")];
var GDEndScreenChallengeTextObjects = Hashtable.newFrom({"EndScreenChallengeText": thisGDEndScreenChallengeTextObjectsList});
var thisGDEndScreenSubHeaderObjectsList = [...runtimeScene.getObjects("EndScreenSubHeader")];
var GDEndScreenSubHeaderObjects = Hashtable.newFrom({"EndScreenSubHeader": thisGDEndScreenSubHeaderObjectsList});
var thisGDEndScreenHeaderObjectsList = [...runtimeScene.getObjects("EndScreenHeader")];
var GDEndScreenHeaderObjects = Hashtable.newFrom({"EndScreenHeader": thisGDEndScreenHeaderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "EndScreenBackground": GDEndScreenBackgroundObjects
, "RetryButton": GDRetryButtonObjects
, "EndScreenChallengeText": GDEndScreenChallengeTextObjects
, "EndScreenSubHeader": GDEndScreenSubHeaderObjects
, "EndScreenHeader": GDEndScreenHeaderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "EndScreenBackground": thisGDEndScreenBackgroundObjectsList
, "RetryButton": thisGDRetryButtonObjectsList
, "EndScreenChallengeText": thisGDEndScreenChallengeTextObjectsList
, "EndScreenSubHeader": thisGDEndScreenSubHeaderObjectsList
, "EndScreenHeader": thisGDEndScreenHeaderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GameOverDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GameOverDialog"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenBackgroundObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenBackgroundObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenChallengeTextObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenChallengeTextObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenSubHeaderObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenSubHeaderObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenHeaderObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenHeaderObjects2.length = 0;

gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenBackgroundObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenBackgroundObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDRetryButtonObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenChallengeTextObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenChallengeTextObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenSubHeaderObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenSubHeaderObjects2.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenHeaderObjects1.length = 0;
gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.IsRetryClickedContext.GDEndScreenHeaderObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("GameOverDialog::GameOverDialog", gdjs.evtsExt__GameOverDialog__GameOverDialog.GameOverDialog);
