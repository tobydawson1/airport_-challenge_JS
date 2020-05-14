describe('Airport', function () {
  var airport;
  var plane;
  beforeEach(function(){
    airport = new Airport();
    plane = new Plane();
  });
  
  describe('knows when ', function() {
    it('a plane lands', function(){
      expect(airport.land(plane)).toEqual(plane);
    });

    it('a plane takes off', function() {
        expect(airport.takeOff(plane)).toEqual(plane);
    });

    it('the hanger is full', function() {

        expect(function(){airport.store(plane);}).toThrow(new Error("Hanger full"));
    });
  });

});
