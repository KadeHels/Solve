var WEST = 0;
var EAST = 1;
function BridgeState(p1, p2, flash, p5, p10, time) {
    this.p1 = p1;  // p1 side
    this.p2 = p2;  // p2 side
    this.flash = flash;  // flashlight side
    this.p5 = p5;  // cabbage side
    this.p10 = p10; // p10 side
    this.time = time;
    
    this.equals = function (other) {      // returns true if other state
	if (other === null) return false;  // has characters on same sides
	return this.p1 === other.p1 &&
	this.p2 === other.p2 &&
	this.flash === other.flash &&
	this.p5 === other.p5 &&
        this.p10 === other.p10;

    };

    this.width = 10;  // used to allocate space
    this.height = 6;  // for state display

    this.toString = function () {  // builds and returns a string
                                   // representing this state
	var p1West = " P1 |  |    \n";
	var p1East = "    |  | P1 \n";
	var p2West = " P2 |  |    \n";
	var p2East = "    |  | P2 \n";
	var fWest =  " F  |==|    \n";
	var fEast =  "    |==| F  \n";
	var p5West = " P5 |  |    \n";
	var p5East = "    |  | P5 \n";
       var p10West = "P10 |  |    \n";
       var p10East = "    |  | P10\n";
       var time = " Time so Far: " + this.time; 
	var buf = "\n";
    
	if (this.p1 === WEST)
	    buf += p1West;
	else
	    buf += p1East;
    
	if (this.p2 === WEST)
	    buf += p2West;
	else
	    buf += p2East;
    
	if (this.flash === WEST)
	    buf += fWest;
	else
	    buf += fEast;
    
	if (this.p5 === WEST)
	    buf += p5West;
	else
	    buf += p5East;
        if (this.p10 === WEST)
	    buf += p10West;
	else
	    buf += p10East;
    
        buf += time;
	return buf;
    };
}