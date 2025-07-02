
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog || {};

/**
 * Object generated from Leaderboard dialog
 */
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog = class LeaderboardDialog extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.DefaultPlayerName = objectData.content.DefaultPlayerName !== undefined ? objectData.content.DefaultPlayerName : "";
    this._objectData.LeaderboardId = objectData.content.LeaderboardId !== undefined ? objectData.content.LeaderboardId : "";
    this._objectData.Score = Number("0") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.DefaultPlayerName !== newObjectData.content.DefaultPlayerName)
      this._objectData.DefaultPlayerName = newObjectData.content.DefaultPlayerName;
    if (oldObjectData.content.LeaderboardId !== newObjectData.content.LeaderboardId)
      this._objectData.LeaderboardId = newObjectData.content.LeaderboardId;
    if (oldObjectData.content.Score !== newObjectData.content.Score)
      this._objectData.Score = newObjectData.content.Score;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getDefaultPlayerName() {
    return this._objectData.DefaultPlayerName !== undefined ? this._objectData.DefaultPlayerName : "";
  }
  _setDefaultPlayerName(newValue) {
    this._objectData.DefaultPlayerName = newValue;
  }
  _getLeaderboardId() {
    return this._objectData.LeaderboardId !== undefined ? this._objectData.LeaderboardId : "";
  }
  _setLeaderboardId(newValue) {
    this._objectData.LeaderboardId = newValue;
  }
  _getScore() {
    return this._objectData.Score !== undefined ? this._objectData.Score : Number("0") || 0;
  }
  _setScore(newValue) {
    this._objectData.Score = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDSubmitButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDSubmitButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDRestartButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDRestartButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDHighScoreChangedObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDHighScoreChangedObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDHighScoreObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDHighScoreObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDGameOverBackgroundObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDGameOverBackgroundObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("HighScoreChanged"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDHighScoreChangedObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects1[i].SetDefaultPlayerName(eventsFunctionContext.getObjects("Object")[0]._getDefaultPlayerName(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDHighScoreChangedObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDHighScoreChangedObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("PlayerNameInput"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects1[i].setDisabled(true);
}
}}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSubmitButtonObjectsList = [...runtimeScene.getObjects("SubmitButton")];
var GDSubmitButtonObjects = Hashtable.newFrom({"SubmitButton": thisGDSubmitButtonObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDRestartButtonObjectsList = [...runtimeScene.getObjects("RestartButton")];
var GDRestartButtonObjects = Hashtable.newFrom({"RestartButton": thisGDRestartButtonObjectsList});
var thisGDHighScoreChangedObjectsList = [...runtimeScene.getObjects("HighScoreChanged")];
var GDHighScoreChangedObjects = Hashtable.newFrom({"HighScoreChanged": thisGDHighScoreChangedObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDHighScoreObjectsList = [...runtimeScene.getObjects("HighScore")];
var GDHighScoreObjects = Hashtable.newFrom({"HighScore": thisGDHighScoreObjectsList});
var thisGDGameOverBackgroundObjectsList = [...runtimeScene.getObjects("GameOverBackground")];
var GDGameOverBackgroundObjects = Hashtable.newFrom({"GameOverBackground": thisGDGameOverBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SubmitButton": GDSubmitButtonObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "RestartButton": GDRestartButtonObjects
, "HighScoreChanged": GDHighScoreChangedObjects
, "Medal": GDMedalObjects
, "ScoreLabel": GDScoreLabelObjects
, "HighScore": GDHighScoreObjects
, "GameOverBackground": GDGameOverBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SubmitButton": thisGDSubmitButtonObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "RestartButton": thisGDRestartButtonObjectsList
, "HighScoreChanged": thisGDHighScoreChangedObjectsList
, "Medal": thisGDMedalObjectsList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "HighScore": thisGDHighScoreObjectsList
, "GameOverBackground": thisGDGameOverBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("LeaderboardDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("LeaderboardDialog"),
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

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDGameOverBackgroundObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.onCreatedContext.GDGameOverBackgroundObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitButtonObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDRestartButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDRestartButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDRestartButtonObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDHighScoreChangedObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDHighScoreChangedObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDHighScoreChangedObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDMedalObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDScoreLabelObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDHighScoreObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDHighScoreObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDHighScoreObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDGameOverBackgroundObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDGameOverBackgroundObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDGameOverBackgroundObjects3= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.saveConnectedPlayerScore(runtimeScene, eventsFunctionContext.getObjects("Object")[0]._getLeaderboardId(), eventsFunctionContext.getObjects("Object")[0]._getScore());
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("PlayerNameInput"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects2);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, eventsFunctionContext.getObjects("Object")[0]._getLeaderboardId(), eventsFunctionContext.getObjects("Object")[0]._getScore(), (( gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects2[0].getText()));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, eventsFunctionContext.getObjects("Object")[0]._getLeaderboardId(), true);
}}

}


};gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.hasLoggedIn();
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("PlayerNameInput"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects1[i].setDisabled(true);
}
}{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isLeaderboardViewErrored();
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("SubmitButton"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitButtonObjects1[k] = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSubmitButtonObjectsList = [...runtimeScene.getObjects("SubmitButton")];
var GDSubmitButtonObjects = Hashtable.newFrom({"SubmitButton": thisGDSubmitButtonObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDRestartButtonObjectsList = [...runtimeScene.getObjects("RestartButton")];
var GDRestartButtonObjects = Hashtable.newFrom({"RestartButton": thisGDRestartButtonObjectsList});
var thisGDHighScoreChangedObjectsList = [...runtimeScene.getObjects("HighScoreChanged")];
var GDHighScoreChangedObjects = Hashtable.newFrom({"HighScoreChanged": thisGDHighScoreChangedObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDHighScoreObjectsList = [...runtimeScene.getObjects("HighScore")];
var GDHighScoreObjects = Hashtable.newFrom({"HighScore": thisGDHighScoreObjectsList});
var thisGDGameOverBackgroundObjectsList = [...runtimeScene.getObjects("GameOverBackground")];
var GDGameOverBackgroundObjects = Hashtable.newFrom({"GameOverBackground": thisGDGameOverBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SubmitButton": GDSubmitButtonObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "RestartButton": GDRestartButtonObjects
, "HighScoreChanged": GDHighScoreChangedObjects
, "Medal": GDMedalObjects
, "ScoreLabel": GDScoreLabelObjects
, "HighScore": GDHighScoreObjects
, "GameOverBackground": GDGameOverBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SubmitButton": thisGDSubmitButtonObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "RestartButton": thisGDRestartButtonObjectsList
, "HighScoreChanged": thisGDHighScoreChangedObjectsList
, "Medal": thisGDMedalObjectsList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "HighScore": thisGDHighScoreObjectsList
, "GameOverBackground": thisGDGameOverBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("LeaderboardDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("LeaderboardDialog"),
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

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitButtonObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDRestartButtonObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDHighScoreChangedObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDMedalObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDScoreLabelObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDHighScoreObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDGameOverBackgroundObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDGameOverBackgroundObjects3.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDSubmitButtonObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDPlayerNameInputObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDRestartButtonObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDHighScoreChangedObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDMedalObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDScoreLabelObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDHighScoreObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDGameOverBackgroundObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPostEventsContext.GDGameOverBackgroundObjects3.length = 0;


return;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDSubmitButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDSubmitButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDRestartButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDRestartButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDHighScoreChangedObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDHighScoreChangedObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDHighScoreObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDHighScoreObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDGameOverBackgroundObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDGameOverBackgroundObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getScore(); }}}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.Score = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSubmitButtonObjectsList = [...runtimeScene.getObjects("SubmitButton")];
var GDSubmitButtonObjects = Hashtable.newFrom({"SubmitButton": thisGDSubmitButtonObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDRestartButtonObjectsList = [...runtimeScene.getObjects("RestartButton")];
var GDRestartButtonObjects = Hashtable.newFrom({"RestartButton": thisGDRestartButtonObjectsList});
var thisGDHighScoreChangedObjectsList = [...runtimeScene.getObjects("HighScoreChanged")];
var GDHighScoreChangedObjects = Hashtable.newFrom({"HighScoreChanged": thisGDHighScoreChangedObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDHighScoreObjectsList = [...runtimeScene.getObjects("HighScore")];
var GDHighScoreObjects = Hashtable.newFrom({"HighScore": thisGDHighScoreObjectsList});
var thisGDGameOverBackgroundObjectsList = [...runtimeScene.getObjects("GameOverBackground")];
var GDGameOverBackgroundObjects = Hashtable.newFrom({"GameOverBackground": thisGDGameOverBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SubmitButton": GDSubmitButtonObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "RestartButton": GDRestartButtonObjects
, "HighScoreChanged": GDHighScoreChangedObjects
, "Medal": GDMedalObjects
, "ScoreLabel": GDScoreLabelObjects
, "HighScore": GDHighScoreObjects
, "GameOverBackground": GDGameOverBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SubmitButton": thisGDSubmitButtonObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "RestartButton": thisGDRestartButtonObjectsList
, "HighScoreChanged": thisGDHighScoreChangedObjectsList
, "Medal": thisGDMedalObjectsList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "HighScore": thisGDHighScoreObjectsList
, "GameOverBackground": thisGDGameOverBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("LeaderboardDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("LeaderboardDialog"),
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

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDGameOverBackgroundObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.ScoreContext.GDGameOverBackgroundObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDSubmitButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDSubmitButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDSubmitButtonObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPlayerNameInputObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDRestartButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDRestartButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDRestartButtonObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreChangedObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreChangedObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreChangedObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDMedalObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreObjects3= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDGameOverBackgroundObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDGameOverBackgroundObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDGameOverBackgroundObjects3= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("save", "high_score");
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("HighScore"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreObjects2);
{gdjs.evtTools.storage.readNumberFromJSONFile("save", "high_score", runtimeScene, eventsFunctionContext.localVariables[0].getFromIndex(0));
}{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreObjects2.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("Best: " + eventsFunctionContext.localVariables[0].getFromIndex(0).getAsString());
}
}}

}


{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1[i].Score((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) >= eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1[k] = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("HighScoreChanged"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreChangedObjects1);
{gdjs.evtTools.storage.writeNumberInJSONFile("save", "high_score", eventsFunctionContext.getObjects("Object")[0]._getScore());
}{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreChangedObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreChangedObjects1[i].hide(false);
}
}}

}


};gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("ScoreLabel"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects1);
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1[i]._setScore(eventsFunctionContext.getArgument("Value"));
}
}{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText("Score: " + ("" + eventsFunctionContext.getObjects("Object")[0]._getScore()));
}
}}

}


{



}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("PreviousBestScore", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScore = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSubmitButtonObjectsList = [...runtimeScene.getObjects("SubmitButton")];
var GDSubmitButtonObjects = Hashtable.newFrom({"SubmitButton": thisGDSubmitButtonObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDRestartButtonObjectsList = [...runtimeScene.getObjects("RestartButton")];
var GDRestartButtonObjects = Hashtable.newFrom({"RestartButton": thisGDRestartButtonObjectsList});
var thisGDHighScoreChangedObjectsList = [...runtimeScene.getObjects("HighScoreChanged")];
var GDHighScoreChangedObjects = Hashtable.newFrom({"HighScoreChanged": thisGDHighScoreChangedObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDHighScoreObjectsList = [...runtimeScene.getObjects("HighScore")];
var GDHighScoreObjects = Hashtable.newFrom({"HighScore": thisGDHighScoreObjectsList});
var thisGDGameOverBackgroundObjectsList = [...runtimeScene.getObjects("GameOverBackground")];
var GDGameOverBackgroundObjects = Hashtable.newFrom({"GameOverBackground": thisGDGameOverBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SubmitButton": GDSubmitButtonObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "RestartButton": GDRestartButtonObjects
, "HighScoreChanged": GDHighScoreChangedObjects
, "Medal": GDMedalObjects
, "ScoreLabel": GDScoreLabelObjects
, "HighScore": GDHighScoreObjects
, "GameOverBackground": GDGameOverBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SubmitButton": thisGDSubmitButtonObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "RestartButton": thisGDRestartButtonObjectsList
, "HighScoreChanged": thisGDHighScoreChangedObjectsList
, "Medal": thisGDMedalObjectsList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "HighScore": thisGDHighScoreObjectsList
, "GameOverBackground": thisGDGameOverBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("LeaderboardDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("LeaderboardDialog"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDSubmitButtonObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPlayerNameInputObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDRestartButtonObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreChangedObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDMedalObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDGameOverBackgroundObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDGameOverBackgroundObjects3.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDSubmitButtonObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDPlayerNameInputObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDRestartButtonObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreChangedObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDMedalObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDScoreLabelObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDHighScoreObjects3.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDGameOverBackgroundObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetScoreContext.GDGameOverBackgroundObjects3.length = 0;


return;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDSubmitButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDSubmitButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDRestartButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDRestartButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDHighScoreChangedObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDHighScoreChangedObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDHighScoreObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDHighScoreObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDGameOverBackgroundObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDGameOverBackgroundObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getDefaultPlayerName(); }}}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerName = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSubmitButtonObjectsList = [...runtimeScene.getObjects("SubmitButton")];
var GDSubmitButtonObjects = Hashtable.newFrom({"SubmitButton": thisGDSubmitButtonObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDRestartButtonObjectsList = [...runtimeScene.getObjects("RestartButton")];
var GDRestartButtonObjects = Hashtable.newFrom({"RestartButton": thisGDRestartButtonObjectsList});
var thisGDHighScoreChangedObjectsList = [...runtimeScene.getObjects("HighScoreChanged")];
var GDHighScoreChangedObjects = Hashtable.newFrom({"HighScoreChanged": thisGDHighScoreChangedObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDHighScoreObjectsList = [...runtimeScene.getObjects("HighScore")];
var GDHighScoreObjects = Hashtable.newFrom({"HighScore": thisGDHighScoreObjectsList});
var thisGDGameOverBackgroundObjectsList = [...runtimeScene.getObjects("GameOverBackground")];
var GDGameOverBackgroundObjects = Hashtable.newFrom({"GameOverBackground": thisGDGameOverBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SubmitButton": GDSubmitButtonObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "RestartButton": GDRestartButtonObjects
, "HighScoreChanged": GDHighScoreChangedObjects
, "Medal": GDMedalObjects
, "ScoreLabel": GDScoreLabelObjects
, "HighScore": GDHighScoreObjects
, "GameOverBackground": GDGameOverBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SubmitButton": thisGDSubmitButtonObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "RestartButton": thisGDRestartButtonObjectsList
, "HighScoreChanged": thisGDHighScoreChangedObjectsList
, "Medal": thisGDMedalObjectsList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "HighScore": thisGDHighScoreObjectsList
, "GameOverBackground": thisGDGameOverBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("LeaderboardDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("LeaderboardDialog"),
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

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDGameOverBackgroundObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.DefaultPlayerNameContext.GDGameOverBackgroundObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDSubmitButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDSubmitButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDRestartButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDRestartButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDHighScoreChangedObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDHighScoreChangedObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDHighScoreObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDHighScoreObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDGameOverBackgroundObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDGameOverBackgroundObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects1[i]._setDefaultPlayerName(eventsFunctionContext.getArgument("Value"));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects1[i]._getDefaultPlayerName() != "0" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects1[k] = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects1.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("PlayerNameInput"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPlayerNameInputObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0]._getDefaultPlayerName());
}
}}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerName = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSubmitButtonObjectsList = [...runtimeScene.getObjects("SubmitButton")];
var GDSubmitButtonObjects = Hashtable.newFrom({"SubmitButton": thisGDSubmitButtonObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDRestartButtonObjectsList = [...runtimeScene.getObjects("RestartButton")];
var GDRestartButtonObjects = Hashtable.newFrom({"RestartButton": thisGDRestartButtonObjectsList});
var thisGDHighScoreChangedObjectsList = [...runtimeScene.getObjects("HighScoreChanged")];
var GDHighScoreChangedObjects = Hashtable.newFrom({"HighScoreChanged": thisGDHighScoreChangedObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDHighScoreObjectsList = [...runtimeScene.getObjects("HighScore")];
var GDHighScoreObjects = Hashtable.newFrom({"HighScore": thisGDHighScoreObjectsList});
var thisGDGameOverBackgroundObjectsList = [...runtimeScene.getObjects("GameOverBackground")];
var GDGameOverBackgroundObjects = Hashtable.newFrom({"GameOverBackground": thisGDGameOverBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SubmitButton": GDSubmitButtonObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "RestartButton": GDRestartButtonObjects
, "HighScoreChanged": GDHighScoreChangedObjects
, "Medal": GDMedalObjects
, "ScoreLabel": GDScoreLabelObjects
, "HighScore": GDHighScoreObjects
, "GameOverBackground": GDGameOverBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SubmitButton": thisGDSubmitButtonObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "RestartButton": thisGDRestartButtonObjectsList
, "HighScoreChanged": thisGDHighScoreChangedObjectsList
, "Medal": thisGDMedalObjectsList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "HighScore": thisGDHighScoreObjectsList
, "GameOverBackground": thisGDGameOverBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("LeaderboardDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("LeaderboardDialog"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDGameOverBackgroundObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetDefaultPlayerNameContext.GDGameOverBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDSubmitButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDSubmitButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDRestartButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDRestartButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDHighScoreChangedObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDHighScoreChangedObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDHighScoreObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDHighScoreObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDGameOverBackgroundObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDGameOverBackgroundObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("PlayerNameInput"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPlayerNameInputObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPlayerNameInputObjects1.length === 0 ) ? "" :gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPlayerNameInputObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Text")).getText()); }}}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerName = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSubmitButtonObjectsList = [...runtimeScene.getObjects("SubmitButton")];
var GDSubmitButtonObjects = Hashtable.newFrom({"SubmitButton": thisGDSubmitButtonObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDRestartButtonObjectsList = [...runtimeScene.getObjects("RestartButton")];
var GDRestartButtonObjects = Hashtable.newFrom({"RestartButton": thisGDRestartButtonObjectsList});
var thisGDHighScoreChangedObjectsList = [...runtimeScene.getObjects("HighScoreChanged")];
var GDHighScoreChangedObjects = Hashtable.newFrom({"HighScoreChanged": thisGDHighScoreChangedObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDHighScoreObjectsList = [...runtimeScene.getObjects("HighScore")];
var GDHighScoreObjects = Hashtable.newFrom({"HighScore": thisGDHighScoreObjectsList});
var thisGDGameOverBackgroundObjectsList = [...runtimeScene.getObjects("GameOverBackground")];
var GDGameOverBackgroundObjects = Hashtable.newFrom({"GameOverBackground": thisGDGameOverBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SubmitButton": GDSubmitButtonObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "RestartButton": GDRestartButtonObjects
, "HighScoreChanged": GDHighScoreChangedObjects
, "Medal": GDMedalObjects
, "ScoreLabel": GDScoreLabelObjects
, "HighScore": GDHighScoreObjects
, "GameOverBackground": GDGameOverBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SubmitButton": thisGDSubmitButtonObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "RestartButton": thisGDRestartButtonObjectsList
, "HighScoreChanged": thisGDHighScoreChangedObjectsList
, "Medal": thisGDMedalObjectsList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "HighScore": thisGDHighScoreObjectsList
, "GameOverBackground": thisGDGameOverBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("LeaderboardDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("LeaderboardDialog"),
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

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDGameOverBackgroundObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.PlayerNameContext.GDGameOverBackgroundObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDSubmitButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDSubmitButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRestartButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRestartButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDHighScoreChangedObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDHighScoreChangedObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDHighScoreObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDHighScoreObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDGameOverBackgroundObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDGameOverBackgroundObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("RestartButton"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRestartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRestartButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRestartButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRestartButtonObjects1[k] = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRestartButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRestartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClicked = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSubmitButtonObjectsList = [...runtimeScene.getObjects("SubmitButton")];
var GDSubmitButtonObjects = Hashtable.newFrom({"SubmitButton": thisGDSubmitButtonObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDRestartButtonObjectsList = [...runtimeScene.getObjects("RestartButton")];
var GDRestartButtonObjects = Hashtable.newFrom({"RestartButton": thisGDRestartButtonObjectsList});
var thisGDHighScoreChangedObjectsList = [...runtimeScene.getObjects("HighScoreChanged")];
var GDHighScoreChangedObjects = Hashtable.newFrom({"HighScoreChanged": thisGDHighScoreChangedObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDHighScoreObjectsList = [...runtimeScene.getObjects("HighScore")];
var GDHighScoreObjects = Hashtable.newFrom({"HighScore": thisGDHighScoreObjectsList});
var thisGDGameOverBackgroundObjectsList = [...runtimeScene.getObjects("GameOverBackground")];
var GDGameOverBackgroundObjects = Hashtable.newFrom({"GameOverBackground": thisGDGameOverBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SubmitButton": GDSubmitButtonObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "RestartButton": GDRestartButtonObjects
, "HighScoreChanged": GDHighScoreChangedObjects
, "Medal": GDMedalObjects
, "ScoreLabel": GDScoreLabelObjects
, "HighScore": GDHighScoreObjects
, "GameOverBackground": GDGameOverBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SubmitButton": thisGDSubmitButtonObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "RestartButton": thisGDRestartButtonObjectsList
, "HighScoreChanged": thisGDHighScoreChangedObjectsList
, "Medal": thisGDMedalObjectsList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "HighScore": thisGDHighScoreObjectsList
, "GameOverBackground": thisGDGameOverBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("LeaderboardDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("LeaderboardDialog"),
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

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDGameOverBackgroundObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsRestartClickedContext.GDGameOverBackgroundObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDSubmitButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDSubmitButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDRestartButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDRestartButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDHighScoreChangedObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDHighScoreChangedObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDHighScoreObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDHighScoreObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDGameOverBackgroundObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDGameOverBackgroundObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasPlayerJustClosedLeaderboardView();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasBeenSaved(eventsFunctionContext.getObjects("Object")[0]._getLeaderboardId());
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmitted = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSubmitButtonObjectsList = [...runtimeScene.getObjects("SubmitButton")];
var GDSubmitButtonObjects = Hashtable.newFrom({"SubmitButton": thisGDSubmitButtonObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDRestartButtonObjectsList = [...runtimeScene.getObjects("RestartButton")];
var GDRestartButtonObjects = Hashtable.newFrom({"RestartButton": thisGDRestartButtonObjectsList});
var thisGDHighScoreChangedObjectsList = [...runtimeScene.getObjects("HighScoreChanged")];
var GDHighScoreChangedObjects = Hashtable.newFrom({"HighScoreChanged": thisGDHighScoreChangedObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDHighScoreObjectsList = [...runtimeScene.getObjects("HighScore")];
var GDHighScoreObjects = Hashtable.newFrom({"HighScore": thisGDHighScoreObjectsList});
var thisGDGameOverBackgroundObjectsList = [...runtimeScene.getObjects("GameOverBackground")];
var GDGameOverBackgroundObjects = Hashtable.newFrom({"GameOverBackground": thisGDGameOverBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SubmitButton": GDSubmitButtonObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "RestartButton": GDRestartButtonObjects
, "HighScoreChanged": GDHighScoreChangedObjects
, "Medal": GDMedalObjects
, "ScoreLabel": GDScoreLabelObjects
, "HighScore": GDHighScoreObjects
, "GameOverBackground": GDGameOverBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SubmitButton": thisGDSubmitButtonObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "RestartButton": thisGDRestartButtonObjectsList
, "HighScoreChanged": thisGDHighScoreChangedObjectsList
, "Medal": thisGDMedalObjectsList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "HighScore": thisGDHighScoreObjectsList
, "GameOverBackground": thisGDGameOverBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("LeaderboardDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("LeaderboardDialog"),
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

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDGameOverBackgroundObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.IsScoreSubmittedContext.GDGameOverBackgroundObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDSubmitButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDSubmitButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDRestartButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDRestartButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDHighScoreChangedObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDHighScoreChangedObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDHighScoreObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDHighScoreObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDGameOverBackgroundObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDGameOverBackgroundObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getLeaderboardId(); }}}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardId = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSubmitButtonObjectsList = [...runtimeScene.getObjects("SubmitButton")];
var GDSubmitButtonObjects = Hashtable.newFrom({"SubmitButton": thisGDSubmitButtonObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDRestartButtonObjectsList = [...runtimeScene.getObjects("RestartButton")];
var GDRestartButtonObjects = Hashtable.newFrom({"RestartButton": thisGDRestartButtonObjectsList});
var thisGDHighScoreChangedObjectsList = [...runtimeScene.getObjects("HighScoreChanged")];
var GDHighScoreChangedObjects = Hashtable.newFrom({"HighScoreChanged": thisGDHighScoreChangedObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDHighScoreObjectsList = [...runtimeScene.getObjects("HighScore")];
var GDHighScoreObjects = Hashtable.newFrom({"HighScore": thisGDHighScoreObjectsList});
var thisGDGameOverBackgroundObjectsList = [...runtimeScene.getObjects("GameOverBackground")];
var GDGameOverBackgroundObjects = Hashtable.newFrom({"GameOverBackground": thisGDGameOverBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SubmitButton": GDSubmitButtonObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "RestartButton": GDRestartButtonObjects
, "HighScoreChanged": GDHighScoreChangedObjects
, "Medal": GDMedalObjects
, "ScoreLabel": GDScoreLabelObjects
, "HighScore": GDHighScoreObjects
, "GameOverBackground": GDGameOverBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SubmitButton": thisGDSubmitButtonObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "RestartButton": thisGDRestartButtonObjectsList
, "HighScoreChanged": thisGDHighScoreChangedObjectsList
, "Medal": thisGDMedalObjectsList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "HighScore": thisGDHighScoreObjectsList
, "GameOverBackground": thisGDGameOverBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("LeaderboardDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("LeaderboardDialog"),
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

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDGameOverBackgroundObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.LeaderboardIdContext.GDGameOverBackgroundObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext = {};
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDObjectObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDObjectObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDSubmitButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDSubmitButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDPlayerNameInputObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDPlayerNameInputObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDRestartButtonObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDRestartButtonObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDHighScoreChangedObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDHighScoreChangedObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDMedalObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDMedalObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDScoreLabelObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDScoreLabelObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDHighScoreObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDHighScoreObjects2= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDGameOverBackgroundObjects1= [];
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDGameOverBackgroundObjects2= [];


gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDObjectObjects1[i]._setLeaderboardId(eventsFunctionContext.getArgument("Value"));
}
}}

}


};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardId = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDSubmitButtonObjectsList = [...runtimeScene.getObjects("SubmitButton")];
var GDSubmitButtonObjects = Hashtable.newFrom({"SubmitButton": thisGDSubmitButtonObjectsList});
var thisGDPlayerNameInputObjectsList = [...runtimeScene.getObjects("PlayerNameInput")];
var GDPlayerNameInputObjects = Hashtable.newFrom({"PlayerNameInput": thisGDPlayerNameInputObjectsList});
var thisGDRestartButtonObjectsList = [...runtimeScene.getObjects("RestartButton")];
var GDRestartButtonObjects = Hashtable.newFrom({"RestartButton": thisGDRestartButtonObjectsList});
var thisGDHighScoreChangedObjectsList = [...runtimeScene.getObjects("HighScoreChanged")];
var GDHighScoreChangedObjects = Hashtable.newFrom({"HighScoreChanged": thisGDHighScoreChangedObjectsList});
var thisGDMedalObjectsList = [...runtimeScene.getObjects("Medal")];
var GDMedalObjects = Hashtable.newFrom({"Medal": thisGDMedalObjectsList});
var thisGDScoreLabelObjectsList = [...runtimeScene.getObjects("ScoreLabel")];
var GDScoreLabelObjects = Hashtable.newFrom({"ScoreLabel": thisGDScoreLabelObjectsList});
var thisGDHighScoreObjectsList = [...runtimeScene.getObjects("HighScore")];
var GDHighScoreObjects = Hashtable.newFrom({"HighScore": thisGDHighScoreObjectsList});
var thisGDGameOverBackgroundObjectsList = [...runtimeScene.getObjects("GameOverBackground")];
var GDGameOverBackgroundObjects = Hashtable.newFrom({"GameOverBackground": thisGDGameOverBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "SubmitButton": GDSubmitButtonObjects
, "PlayerNameInput": GDPlayerNameInputObjects
, "RestartButton": GDRestartButtonObjects
, "HighScoreChanged": GDHighScoreChangedObjects
, "Medal": GDMedalObjects
, "ScoreLabel": GDScoreLabelObjects
, "HighScore": GDHighScoreObjects
, "GameOverBackground": GDGameOverBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "SubmitButton": thisGDSubmitButtonObjectsList
, "PlayerNameInput": thisGDPlayerNameInputObjectsList
, "RestartButton": thisGDRestartButtonObjectsList
, "HighScoreChanged": thisGDHighScoreChangedObjectsList
, "Medal": thisGDMedalObjectsList
, "ScoreLabel": thisGDScoreLabelObjectsList
, "HighScore": thisGDHighScoreObjectsList
, "GameOverBackground": thisGDGameOverBackgroundObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("LeaderboardDialog"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("LeaderboardDialog"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDGameOverBackgroundObjects2.length = 0;

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDSubmitButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDSubmitButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDPlayerNameInputObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDPlayerNameInputObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDRestartButtonObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDRestartButtonObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDHighScoreChangedObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDHighScoreChangedObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDMedalObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDMedalObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDScoreLabelObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDScoreLabelObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDHighScoreObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDHighScoreObjects2.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDGameOverBackgroundObjects1.length = 0;
gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.SetLeaderboardIdContext.GDGameOverBackgroundObjects2.length = 0;


return;
}

gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("LeaderboardDialog::LeaderboardDialog", gdjs.evtsExt__LeaderboardDialog__LeaderboardDialog.LeaderboardDialog);
