
gdjs.evtsExt__Bounce__Bounce = gdjs.evtsExt__Bounce__Bounce || {};

/**
 * Behavior generated from Bounce
 */
gdjs.evtsExt__Bounce__Bounce.Bounce = class Bounce extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Bounce__Bounce.Bounce.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.BounceCount = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.BounceCount !== newBehaviorData.BounceCount)
      this._behaviorData.BounceCount = newBehaviorData.BounceCount;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    BounceCount: this._behaviorData.BounceCount,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.BounceCount !== undefined)
      this._behaviorData.BounceCount = networkSyncData.props.BounceCount;
  }

  // Properties:
  
  _getBounceCount() {
    return this._behaviorData.BounceCount !== undefined ? this._behaviorData.BounceCount : Number("0") || 0;
  }
  _setBounceCount(newValue) {
    this._behaviorData.BounceCount = newValue;
  }
}

/**
 * Shared data generated from Bounce
 */
gdjs.evtsExt__Bounce__Bounce.Bounce.SharedData = class BounceSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Bounce__Bounce.Bounce.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Bounce_BounceSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Bounce_BounceSharedData = new gdjs.evtsExt__Bounce__Bounce.Bounce.SharedData(
      initialData
    );
  }
  return instanceContainer._Bounce_BounceSharedData;
}

// Methods:
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext = {};
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1= [];
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2= [];
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObstacleObjects1= [];
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObstacleObjects2= [];


gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.mapOfGDgdjs_9546evtsExt_9595_9595Bounce_9595_9595Bounce_9546Bounce_9546prototype_9546BounceOffContext_9546GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObstacleObjects1});
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1 */

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("OldForceAngle", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("OldForceLength", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("NormalAngle", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1, gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2);

for (var i = 0, k = 0, l = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[i].getX() != eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[k] = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1, gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2);

for (var i = 0, k = 0, l = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[i].getY() != eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[k] = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1_1final, gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1 */
{eventsFunctionContext.localVariables[1].getFromIndex(0).setNumber((( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[0].getAverageForce().getAngle()));
}{eventsFunctionContext.localVariables[1].getFromIndex(1).setNumber((( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[0].getAverageForce().getLength()));
}{eventsFunctionContext.localVariables[1].getFromIndex(2).setNumber(gdjs.toDegrees(Math.atan2((( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[0].getY()) - eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber(), (( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[0].getX()) - eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber())));
}{for(var i = 0, len = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].addPolarForce(eventsFunctionContext.localVariables[1].getFromIndex(2).getAsNumber() + gdjs.evtTools.common.angleDifference(eventsFunctionContext.localVariables[1].getFromIndex(2).getAsNumber(), eventsFunctionContext.localVariables[1].getFromIndex(0).getAsNumber() + 180), eventsFunctionContext.localVariables[1].getFromIndex(1).getAsNumber(), 1);
}
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBounceCount(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBounceCount()+1)
}}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("OldX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("OldY", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Obstacle"), gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObstacleObjects1);
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[0].getX()));
}{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber((( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[0].getY()));
}{for(var i = 0, len = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1[i].separateFromObjectsList(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.mapOfGDgdjs_9546evtsExt_9595_9595Bounce_9595_9595Bounce_9546Bounce_9546prototype_9546BounceOffContext_9546GDObstacleObjects1Objects, true);
}
}
{ //Subevents
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOff = function(Obstacle, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Obstacle": Obstacle
},
  _objectArraysMap: {
"Object": thisObjectList
, "Obstacle": gdjs.objectsListsToArray(Obstacle)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Bounce"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Bounce"),
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

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObstacleObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObstacleObjects2.length = 0;

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObstacleObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffContext.GDObstacleObjects2.length = 0;


return;
}
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext = {};
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1_1final = [];

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2= [];
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObstacleObjects1= [];
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObstacleObjects2= [];


gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.mapOfGDgdjs_9546evtsExt_9595_9595Bounce_9595_9595Bounce_9546Bounce_9546prototype_9546BounceOffSpecificAngleContext_9546GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObstacleObjects1});
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1 */

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("OldForceAngle", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("OldForceLength", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1, gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2);

for (var i = 0, k = 0, l = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2[i].getX() != eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2[k] = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1, gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2);

for (var i = 0, k = 0, l = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2[i].getY() != eventsFunctionContext.localVariables[0].getFromIndex(1).getAsNumber() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2[k] = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1_1final.indexOf(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2[j]) === -1 )
            gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1_1final.push(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1_1final, gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1 */
{eventsFunctionContext.localVariables[1].getFromIndex(0).setNumber((( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1[0].getAverageForce().getAngle()));
}{eventsFunctionContext.localVariables[1].getFromIndex(1).setNumber((( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1[0].getAverageForce().getLength()));
}{for(var i = 0, len = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1[i].addPolarForce(eventsFunctionContext.getArgument("NormalAngle") + gdjs.evtTools.common.angleDifference(eventsFunctionContext.getArgument("NormalAngle"), eventsFunctionContext.localVariables[1].getFromIndex(0).getAsNumber() + 180), eventsFunctionContext.localVariables[1].getFromIndex(1).getAsNumber(), 1);
}
}{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setBounceCount(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBounceCount()+1)
}}
eventsFunctionContext.localVariables.pop();

}


};gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("OldX", variable);
}
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("OldY", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Obstacle"), gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObstacleObjects1);
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1[0].getX()));
}{eventsFunctionContext.localVariables[0].getFromIndex(1).setNumber((( gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1[0].getY()));
}{for(var i = 0, len = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1[i].separateFromObjectsList(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.mapOfGDgdjs_9546evtsExt_9595_9595Bounce_9595_9595Bounce_9546Bounce_9546prototype_9546BounceOffSpecificAngleContext_9546GDObstacleObjects1Objects, true);
}
}
{ //Subevents
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngle = function(Obstacle, NormalAngle, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Obstacle": Obstacle
},
  _objectArraysMap: {
"Object": thisObjectList
, "Obstacle": gdjs.objectsListsToArray(Obstacle)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Bounce"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Bounce"),
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
if (argName === "NormalAngle") return NormalAngle;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObstacleObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObstacleObjects2.length = 0;

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObstacleObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffSpecificAngleContext.GDObstacleObjects2.length = 0;


return;
}
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext = {};
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.GDObjectObjects1= [];
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.GDObjectObjects2= [];
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.GDObstacleObjects1= [];
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.GDObstacleObjects2= [];


gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.mapOfGDgdjs_9546evtsExt_9595_9595Bounce_9595_9595Bounce_9546Bounce_9546prototype_9546BounceOffVerticallyContext_9546GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.GDObstacleObjects1});
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Obstacle"), gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.GDObstacleObjects1);
{for(var i = 0, len = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BounceOffSpecificAngle(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.mapOfGDgdjs_9546evtsExt_9595_9595Bounce_9595_9595Bounce_9546Bounce_9546prototype_9546BounceOffVerticallyContext_9546GDObstacleObjects1Objects, 90, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVertically = function(Obstacle, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Obstacle": Obstacle
},
  _objectArraysMap: {
"Object": thisObjectList
, "Obstacle": gdjs.objectsListsToArray(Obstacle)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Bounce"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Bounce"),
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

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.GDObstacleObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.GDObstacleObjects2.length = 0;

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.GDObstacleObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffVerticallyContext.GDObstacleObjects2.length = 0;


return;
}
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext = {};
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.GDObjectObjects1= [];
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.GDObjectObjects2= [];
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.GDObstacleObjects1= [];
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.GDObstacleObjects2= [];


gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.mapOfGDgdjs_9546evtsExt_9595_9595Bounce_9595_9595Bounce_9546Bounce_9546prototype_9546BounceOffHorizontallyContext_9546GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.GDObstacleObjects1});
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Obstacle"), gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.GDObstacleObjects1);
{for(var i = 0, len = gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).BounceOffSpecificAngle(gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.mapOfGDgdjs_9546evtsExt_9595_9595Bounce_9595_9595Bounce_9546Bounce_9546prototype_9546BounceOffHorizontallyContext_9546GDObstacleObjects1Objects, 0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontally = function(Obstacle, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Obstacle": Obstacle
},
  _objectArraysMap: {
"Object": thisObjectList
, "Obstacle": gdjs.objectsListsToArray(Obstacle)
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Bounce"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Bounce"),
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

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.GDObstacleObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.GDObstacleObjects2.length = 0;

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.GDObstacleObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceOffHorizontallyContext.GDObstacleObjects2.length = 0;


return;
}
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceCountContext = {};
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceCountContext.GDObjectObjects1= [];
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceCountContext.GDObjectObjects2= [];


gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceCountContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getBounceCount(); }}}

}


};

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceCount = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Bounce"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Bounce"),
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

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceCountContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceCountContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceCountContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.BounceCountContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Bounce__Bounce.Bounce.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Bounce::Bounce", gdjs.evtsExt__Bounce__Bounce.Bounce);
