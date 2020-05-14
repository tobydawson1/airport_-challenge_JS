describe('Plane', function () {
  var plane;
  beforeEach(function(){
    plane = new Plane();
  });

  describe('knows when it\'s a', function(){
    it('plane', function() {
      expect(plane).toEqual(plane);
    });
  });

});
