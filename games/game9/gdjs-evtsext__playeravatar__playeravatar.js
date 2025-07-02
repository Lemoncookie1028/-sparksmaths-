
gdjs.evtsExt__PlayerAvatar__PlayerAvatar = gdjs.evtsExt__PlayerAvatar__PlayerAvatar || {};

/**
 * Object generated from Multiplayer Avatar
 */
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar = class PlayerAvatar extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData) {
    super(parentInstanceContainer, objectData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._objectData = {};
    
    this._objectData.PlayerNumber = objectData.content.PlayerNumber !== undefined ? objectData.content.PlayerNumber : Number("0") || 0;
    this._objectData.BorderEnabled = objectData.content.BorderEnabled !== undefined ? objectData.content.BorderEnabled : true;
    this._objectData.UserID = "";
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.PlayerNumber !== newObjectData.content.PlayerNumber)
      this._objectData.PlayerNumber = newObjectData.content.PlayerNumber;
    if (oldObjectData.content.BorderEnabled !== newObjectData.content.BorderEnabled)
      this._objectData.BorderEnabled = newObjectData.content.BorderEnabled;
    if (oldObjectData.content.UserID !== newObjectData.content.UserID)
      this._objectData.UserID = newObjectData.content.UserID;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getPlayerNumber() {
    return this._objectData.PlayerNumber !== undefined ? this._objectData.PlayerNumber : Number("0") || 0;
  }
  _setPlayerNumber(newValue) {
    this._objectData.PlayerNumber = newValue;
  }
  _getBorderEnabled() {
    return this._objectData.BorderEnabled !== undefined ? this._objectData.BorderEnabled : true;
  }
  _setBorderEnabled(newValue) {
    this._objectData.BorderEnabled = newValue;
  }
  _toggleBorderEnabled() {
    this._setBorderEnabled(!this._getBorderEnabled());
  }
  _getUserID() {
    return this._objectData.UserID !== undefined ? this._objectData.UserID : "";
  }
  _setUserID(newValue) {
    this._objectData.UserID = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext = {};
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDAvatarObjects1= [];
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDAvatarObjects2= [];
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDBorderObjects1= [];
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDBorderObjects2= [];


gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDObjectObjects1[i]._getBorderEnabled()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Border"), gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDBorderObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDBorderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDBorderObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0]._getPlayerNumber() != 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDObjectObjects1[i].SetUserID(gdjs.evtsExt__PlayerAvatar__UserID.func(runtimeScene, eventsFunctionContext.getObjects("Object")[0]._getPlayerNumber(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDAvatarObjectsList = [...runtimeScene.getObjects("Avatar")];
var GDAvatarObjects = Hashtable.newFrom({"Avatar": thisGDAvatarObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Avatar": GDAvatarObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Avatar": thisGDAvatarObjectsList
, "Border": thisGDBorderObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDAvatarObjects1.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDAvatarObjects2.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDAvatarObjects1.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDAvatarObjects2.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.onCreatedContext.GDBorderObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext = {};
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.GDObjectObjects1= [];
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.GDObjectObjects2= [];
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.GDAvatarObjects1= [];
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.GDAvatarObjects2= [];
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.GDBorderObjects1= [];
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.GDBorderObjects2= [];


gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getUserID(); }}}

}


};

gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserID = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDAvatarObjectsList = [...runtimeScene.getObjects("Avatar")];
var GDAvatarObjects = Hashtable.newFrom({"Avatar": thisGDAvatarObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Avatar": GDAvatarObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Avatar": thisGDAvatarObjectsList
, "Border": thisGDBorderObjectsList
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.GDAvatarObjects1.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.GDAvatarObjects2.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.GDAvatarObjects1.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.GDAvatarObjects2.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.UserIDContext.GDBorderObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext = {};
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDObjectObjects1= [];
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDObjectObjects2= [];
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDAvatarObjects1= [];
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDAvatarObjects2= [];
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDBorderObjects1= [];
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDBorderObjects2= [];


gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.userFunc0x87c370 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
// Check if there is no multiplayer in game, exit the function.
if (!gdjs.multiplayerMessageManager) return;

/** @type {string} */
const parameterUserID = eventsFunctionContext.getArgument("Value");

// If the userID isn't valid, exit the function.
if (parameterUserID.length < 20 ||
    parameterUserID.length > 36) return;

// Get the PixiJS renderer of the Avatar Sprite
const spriteRenderer = objects[0].getRendererObject();

// Build the URL to request to the API the profile from a GDevelop userID.
const url = "https://api.gdevelop.io/user/user-public-profile/" + parameterUserID;

// Get the reponse from the API when possible then change the texture by the image from the GDevelop user profile.
gdjs._extensionAvatar.getGDevelopProfile(url).then((json) => {
  const baseTexture = PIXI.BaseTexture.from(json.iconUrl.split("?")[0] + "?s=200");
  spriteRenderer.texture = new PIXI.Texture(baseTexture);
});

};
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Avatar"), gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDAvatarObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDAvatarObjects1);
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.userFunc0x87c370(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getArgument("Value") != eventsFunctionContext.getObjects("Object")[0]._getUserID());
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0]._setUserID(eventsFunctionContext.getArgument("Value"))
}
{ //Subevents
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserID = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDAvatarObjectsList = [...runtimeScene.getObjects("Avatar")];
var GDAvatarObjects = Hashtable.newFrom({"Avatar": thisGDAvatarObjectsList});
var thisGDBorderObjectsList = [...runtimeScene.getObjects("Border")];
var GDBorderObjects = Hashtable.newFrom({"Border": thisGDBorderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Avatar": GDAvatarObjects
, "Border": GDBorderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Avatar": thisGDAvatarObjectsList
, "Border": thisGDBorderObjectsList
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDAvatarObjects1.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDAvatarObjects2.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDBorderObjects2.length = 0;

gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDAvatarObjects1.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDAvatarObjects2.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDBorderObjects1.length = 0;
gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.SetUserIDContext.GDBorderObjects2.length = 0;


return;
}

gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerObject("PlayerAvatar::PlayerAvatar", gdjs.evtsExt__PlayerAvatar__PlayerAvatar.PlayerAvatar);
