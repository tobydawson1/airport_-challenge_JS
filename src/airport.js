function Airport(defaultCapacity = 20) {    
this._hanger = [];
this._defaultCapacity = defaultCapacity;
};

Airport.prototype.land = function(plane) {
    plane.land();
};

Airport.prototype.takeOff = function(plane) {
    return plane;
};

 Airport.prototype.size = function() {
    capacity = 5
    return capacity

}; 

Airport.prototype.store = function(plane) {
    if (this._hanger.length >= this._defaultCapacity ) { 
    throw new Error("Hanger full") ;
    } 
};

console.log(Airport.store(plane));


