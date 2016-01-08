var WEST = 0;
var EAST = 1;

function BridgeProblem() {
    this.name = "Bridge Crossing Problem";
    this.introduction = "Welcome to the Bridge Crossing Problem." +
                "Person Pn can cross the bridge in n minutes." +
                "Only one or two persons can cross at a time because it is dark," +
                "and the flashlight must be taken on every crossing." +
                "When two people cross, they travel at the speed of the slowest person." +
                "Devise a sequence of crossings so that all four people get across" +
                "the bridge in no more than 17 minutes.";
        
    this.initialState = new BridgeState(WEST, WEST, WEST, WEST, WEST, 0);
    
    this.currentState = this.initialState;
    
    this.finalState = new BridgeState(EAST, EAST, EAST, EAST, EAST, 0);
    
    var moveNames = [P1, P2, P5, P10, P1P2, P1P5, P1P10, P2P5, P2P10, P5P10];
    
    this.moves = moveNames.map(function(name) { return new BridgeMove(name); });
    
    this.success = function () {
	return this.currentState.equals(this.finalState);
    };
    
}