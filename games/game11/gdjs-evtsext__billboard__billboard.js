
gdjs.evtsExt__Billboard__Billboard = gdjs.evtsExt__Billboard__Billboard || {};

/**
 * Behavior generated from Billboard
 */
gdjs.evtsExt__Billboard__Billboard.Billboard = class Billboard extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Billboard__Billboard.Billboard.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Object3D = behaviorData.Object3D !== undefined ? behaviorData.Object3D : "";
    this._behaviorData.ShouldRotateX = true;
    this._behaviorData.ShouldRotateY = true;
    this._behaviorData.ShouldRotateZ = true;
    this._behaviorData.OffsetPositionMode = behaviorData.OffsetPositionMode !== undefined ? behaviorData.OffsetPositionMode : "No change";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Object3D !== newBehaviorData.Object3D)
      this._behaviorData.Object3D = newBehaviorData.Object3D;
    if (oldBehaviorData.ShouldRotateX !== newBehaviorData.ShouldRotateX)
      this._behaviorData.ShouldRotateX = newBehaviorData.ShouldRotateX;
    if (oldBehaviorData.ShouldRotateY !== newBehaviorData.ShouldRotateY)
      this._behaviorData.ShouldRotateY = newBehaviorData.ShouldRotateY;
    if (oldBehaviorData.ShouldRotateZ !== newBehaviorData.ShouldRotateZ)
      this._behaviorData.ShouldRotateZ = newBehaviorData.ShouldRotateZ;
    if (oldBehaviorData.OffsetPositionMode !== newBehaviorData.OffsetPositionMode)
      this._behaviorData.OffsetPositionMode = newBehaviorData.OffsetPositionMode;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Object3D: this._behaviorData.Object3D,
    ShouldRotateX: this._behaviorData.ShouldRotateX,
    ShouldRotateY: this._behaviorData.ShouldRotateY,
    ShouldRotateZ: this._behaviorData.ShouldRotateZ,
    OffsetPositionMode: this._behaviorData.OffsetPositionMode,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Object3D !== undefined)
      this._behaviorData.Object3D = networkSyncData.props.Object3D;
    if (networkSyncData.props.ShouldRotateX !== undefined)
      this._behaviorData.ShouldRotateX = networkSyncData.props.ShouldRotateX;
    if (networkSyncData.props.ShouldRotateY !== undefined)
      this._behaviorData.ShouldRotateY = networkSyncData.props.ShouldRotateY;
    if (networkSyncData.props.ShouldRotateZ !== undefined)
      this._behaviorData.ShouldRotateZ = networkSyncData.props.ShouldRotateZ;
    if (networkSyncData.props.OffsetPositionMode !== undefined)
      this._behaviorData.OffsetPositionMode = networkSyncData.props.OffsetPositionMode;
  }

  // Properties:
  
  _getObject3D() {
    return this._behaviorData.Object3D !== undefined ? this._behaviorData.Object3D : "";
  }
  _setObject3D(newValue) {
    this._behaviorData.Object3D = newValue;
  }
  _getShouldRotateX() {
    return this._behaviorData.ShouldRotateX !== undefined ? this._behaviorData.ShouldRotateX : true;
  }
  _setShouldRotateX(newValue) {
    this._behaviorData.ShouldRotateX = newValue;
  }
  _toggleShouldRotateX() {
    this._setShouldRotateX(!this._getShouldRotateX());
  }
  _getShouldRotateY() {
    return this._behaviorData.ShouldRotateY !== undefined ? this._behaviorData.ShouldRotateY : true;
  }
  _setShouldRotateY(newValue) {
    this._behaviorData.ShouldRotateY = newValue;
  }
  _toggleShouldRotateY() {
    this._setShouldRotateY(!this._getShouldRotateY());
  }
  _getShouldRotateZ() {
    return this._behaviorData.ShouldRotateZ !== undefined ? this._behaviorData.ShouldRotateZ : true;
  }
  _setShouldRotateZ(newValue) {
    this._behaviorData.ShouldRotateZ = newValue;
  }
  _toggleShouldRotateZ() {
    this._setShouldRotateZ(!this._getShouldRotateZ());
  }
  _getOffsetPositionMode() {
    return this._behaviorData.OffsetPositionMode !== undefined ? this._behaviorData.OffsetPositionMode : "No change";
  }
  _setOffsetPositionMode(newValue) {
    this._behaviorData.OffsetPositionMode = newValue;
  }
}

/**
 * Shared data generated from Billboard
 */
gdjs.evtsExt__Billboard__Billboard.Billboard.SharedData = class BillboardSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Billboard__Billboard.Billboard.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Billboard_BillboardSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Billboard_BillboardSharedData = new gdjs.evtsExt__Billboard__Billboard.Billboard.SharedData(
      initialData
    );
  }
  return instanceContainer._Billboard_BillboardSharedData;
}

// Methods:
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOffsetPositionMode() == "Standing on Z axis");
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.GDObjectObjects1[i].setY(gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.GDObjectObjects1[i].getY() + ((gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.GDObjectObjects1[i].getHeight()) / 2));
}
}{for(var i = 0, len = gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setZ(gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).getZ() + ((gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.GDObjectObjects1[i].getHeight()) / 2));
}
}}

}


};gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(16926324);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).EnableTransparency((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
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
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Billboard"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Billboard"),
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

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FaceCamera((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Billboard"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Billboard"),
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

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext = {};
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.GDObjectObjects1= [];
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.GDObjectObjects2= [];


gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldRotateX();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationX(-(gdjs.scene3d.camera.getCameraRotationX(runtimeScene, (gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.GDObjectObjects1[i].getLayer()), 0)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldRotateY();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Object3D")).setRotationY(gdjs.scene3d.camera.getCameraRotationY(runtimeScene, (gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.GDObjectObjects1[i].getLayer()), 0));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldRotateZ();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.GDObjectObjects1[i].setAngle(gdjs.evtTools.camera.getCameraRotation(runtimeScene, (gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.GDObjectObjects1[i].getLayer()), 0));
}
}}

}


};

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCamera = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Billboard"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Billboard"),
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

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.FaceCameraContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateXContext = {};
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateXContext.GDObjectObjects1= [];
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateXContext.GDObjectObjects2= [];


gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldRotateX();
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateX = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Billboard"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Billboard"),
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

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateXContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateXContext = {};
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateXContext.GDObjectObjects1= [];
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateXContext.GDObjectObjects2= [];


gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldRotateX(false)
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldRotateX(true)
}}

}


};

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateX = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Billboard"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Billboard"),
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

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateXContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateYContext = {};
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateYContext.GDObjectObjects1= [];
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateYContext.GDObjectObjects2= [];


gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldRotateY();
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateY = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Billboard"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Billboard"),
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

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateYContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateYContext = {};
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateYContext.GDObjectObjects1= [];
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateYContext.GDObjectObjects2= [];


gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldRotateY(false)
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldRotateY(true)
}}

}


};

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateY = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Billboard"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Billboard"),
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

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateYContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateZContext = {};
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateZContext.GDObjectObjects1= [];
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateZContext.GDObjectObjects2= [];


gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldRotateZ();
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateZ = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Billboard"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Billboard"),
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

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateZContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.ShouldRotateZContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateZContext = {};
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateZContext.GDObjectObjects1= [];
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateZContext.GDObjectObjects2= [];


gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateZContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldRotateZ(false)
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldRotateZ(true)
}}

}


};

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateZ = function(Value, parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Billboard"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Billboard"),
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

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateZContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateZContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateZContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.SetShouldRotateZContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.EnableTransparencyContext = {};
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.EnableTransparencyContext.GDObjectObjects1= [];


gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.EnableTransparencyContext.userFunc0xdef150 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
/** @type {gdjs.Cube3DRuntimeObject} */
const object = objects[0];
if (gdjs.Cube3DRuntimeObject && object instanceof gdjs.Cube3DRuntimeObject) {
    object._shouldUseTransparentTexture = true;
    /** @type {gdjs.Cube3DRuntimeObjectRenderer} */
    const renderer = object.getRenderer();
    renderer.updateFace(0);
}
};
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.EnableTransparencyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.EnableTransparencyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.EnableTransparencyContext.GDObjectObjects1);
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.EnableTransparencyContext.userFunc0xdef150(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.EnableTransparency = function(parentEventsFunctionContext) {

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
, "Object3D": this._getObject3D()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Billboard"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Billboard"),
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

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.EnableTransparencyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.EnableTransparencyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Billboard__Billboard.Billboard.prototype.EnableTransparencyContext.GDObjectObjects1.length = 0;


return;
}


gdjs.registerBehavior("Billboard::Billboard", gdjs.evtsExt__Billboard__Billboard.Billboard);
