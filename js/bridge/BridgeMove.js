var WEST = 0;
var EAST = 1;

var P1 = "P1 crosses alone";
var P2 = "P2 crosses alone";
var P5 = "P5 crosses alone";
var P10 = "P10 crosses alone";
var P1P2 = "P1 crosses with P2";
var P1P5 = "P1 crosses with P5";
var P1P10 = "P1 crosses with P10";
var P2P5 = "P2 crosses with P5";
var P2P10 = "P2 crosses with P10";
var P5P10 = "P5 crosses with P10";

function BridgeMove(name){
    this.name = name;
    
    this.doMove = function (state) {
        var next;  
        switch (this.name) {
            case P1: next = moveP1(state); break;
            case P2: next = moveP2(state); break;
            case P5: next = moveP5(state); break;
            case P10: next = moveP10(state); break;
            case P1P2: next = moveP1P2(state); break;
            case P1P5: next = moveP1P5(state); break;
            case P1P10: next = moveP1P10(state); break;    
            case P2P5: next = moveP2P5(state); break;
            case P2P10: next = moveP2P10(state); break; 
            case P5P10: next = moveP5P10(state); break; 
        }
        return next;
    };    
}
     
function moveP1(state) {
    var tempState;
    if(state.p1 === state.flash){
        tempState = new BridgeState(opposite(state.p1), state.p2, opposite(state.flash), state.p5, state.p10, state.time + 1);
    }
    else{
        tempState = null; 
    }
    return tempState;
}

function moveP2(state) {
    if(state.p2 === state.flash){
        tempState = new BridgeState(state.p1, opposite(state.p2), opposite(state.flash), state.p5, state.p10, state.time + 2);
    }
    else{
        tempState = null; 
    }
    return tempState;
}

function moveP5(state) {
    var tempState = state;
    if(state.p5 === state.flash){
        tempState = new BridgeState(state.p1, state.p2, opposite(state.flash), opposite(state.p5), state.p10, state.time + 5);
    }
    else{
        tempState = null; 
    }
    return tempState;
}

function moveP10(state) {
    var tempState = state;
    if(state.p10 === state.flash){
        tempState = new BridgeState(state.p1, state.p2, opposite(state.flash), state.p5, opposite(state.p10), state.time + 10);
    }
    else{
        tempState = null; 
    }
    return tempState;
}

function moveP1P2(state) {
    var tempState;
    if(state.p1 === state.p2 && state.p1 === state.flash){
        tempState = tempState = new BridgeState (opposite(state.p1), opposite(state.p2), opposite(state.flash), state.p5, state.p10, state.time + 2);
}
    else{
        tempState = null;
    }
    return tempState;
}

function moveP1P5(state) {
    var tempState;
    if(state.p1 === state.p5 && state.p1 === state.flash){
        tempState = tempState = new BridgeState (opposite(state.p1), state.p2, opposite(state.flash), opposite(state.p5), state.p10, state.time + 5);
}
    else{
        tempState = null;
    }
    return tempState;
}

function moveP1P10(state) {
    var tempState;
    if(state.p1 === state.p10 && state.p1 === state.flash){
        tempState = tempState = new BridgeState (opposite(state.p1), state.p2, opposite(state.flash), state.p5, opposite(state.p10), state.time + 10);
}
    else{
        tempState = null;
    }
    return tempState;
}

function moveP2P5(state) {
    var tempState;
    if(state.p2 === state.p5 && state.p2 === state.flash){
        tempState = tempState = new BridgeState (state.p1, opposite(state.p2), opposite(state.flash), opposite(state.p5), state.p10, state.time + 5);
}
    else{
        tempState = null;
    }
    return tempState;
}
function moveP2P10(state) {
    var tempState;
    if(state.p2 === state.p10 && state.p2 === state.flash){
        tempState = tempState = new BridgeState (state.p1, opposite(state.p2), opposite(state.flash), state.p5, opposite(state.p10), state.time + 10);
}
    else{
        tempState = null;
    }
    return tempState; 
}
function moveP5P10(state) {
    var tempState;
    if(state.p5 === state.p10 && state.p5 === state.flash){
        tempState = tempState = new BridgeState (state.p1, state.p2, opposite(state.flash), opposite(state.p5), opposite(state.p10), state.time + 10);
}
    else{
        tempState = null;
    }
    return tempState;
}

function opposite(side) {
    if ( side === WEST )
        return EAST;
    else
        return WEST;
}