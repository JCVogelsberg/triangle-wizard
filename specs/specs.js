describe('Triangle', function() {
  describe('invalid', function() {
    it("Will compare the three sides of a triangle and return 'This is not a triangle' if the sum of any two sides is less than the third side.", function() {
      var isItTriangle = Object.create(Triangle);
      isItTriangle.side1 = 2;
      isItTriangle.side2 = 3;
      isItTriangle.side3 = 11;
      isItTriangle.invalid().should.equal("This is not a triangle");
    });
  });

  describe('type', function() {
    it("Will compare the three sides of a triangle and return 'equilateral' if all sides are equal.", function() {
      var testTriangleEq = Object.create(Triangle);
      testTriangleEq.side1 = 2;
      testTriangleEq.side2 = 2;
      testTriangleEq.side3 = 2;
      testTriangleEq.type().should.equal("equilateral");
    });

    it("Will compare the three sides of a triangle and return 'scalene' if no sides are equal.", function() {
      var testTriangleSc = Object.create(Triangle);
      testTriangleSc.side1 = 3;
      testTriangleSc.side2 = 4;
      testTriangleSc.side3 = 5;
      testTriangleSc.type().should.equal("scalene");
    });

    it("Will compare the three sides of a triangle and return 'isosceles' if two sides are equal.", function() {
      var testTriangleIs = Object.create(Triangle);
      testTriangleIs.side1 = 3;
      testTriangleIs.side2 = 3;
      testTriangleIs.side3 = 4;
      testTriangleIs.type().should.equal("isosceles");
    });

  });
});
