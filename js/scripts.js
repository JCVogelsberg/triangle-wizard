var Triangle = {
  invalid: function() {
    if (((this.side1 + this.side2) < this.side3) || 
        ((this.side1 + this.side3) < this.side2) || 
        ((this.side2 + this.side3) < this.side1)) {
      return "This is not a triangle";
    }
  },

  type: function() {
    if ((this.side1 === this.side2) && (this.side1 === this.side3)) {
      var result = "equilateral";
      return result;
    } else if ((this.side1 !== this.side2) && (this.side1 !== this.side3) && (this.side2 !== this.side3)) {
       var result = "scalene";
       return result;
    } else if ((this.side1 === this.side2) || (this.side2 === this.side3) || (this.side1 === this.side3)) {
      var result = "isosceles";
      return result;
    }
  },


  triangleSides: function() {
    if (((this.side1 + this.side2) >= this.side3) || 
        ((this.side1 + this.side3) >= this.side2) || 
        ((this.side2 + this.side3) >= this.side1)) {
    return side1 + ", " + side2 + ", " + side3;
    }
  }
};


$(document).ready(function() {
  $("form#triangulation").submit(function(event) {
  event.preventDefault();

  var evalTriangle = Object.create(Triangle);
  evalTriangle.side1 = parseInt($("input#side-one").val());
  evalTriangle.side2 = parseInt($("input#side-two").val());
  evalTriangle.side3 = parseInt($("input#side-three").val());
  var newOne = evalTriangle.type();


  if (newOne === 'equilateral') {
    $("ul#Equilateral").append("<li>" + evalTriangle.side1 + ", " + evalTriangle.side2 + ", " + evalTriangle.side3 + "</li>");
  } else if (newOne === 'isosceles') {
    $("ul#Isosceles").append("<li>" + evalTriangle.side1 + ", " + evalTriangle.side2 + ", " + evalTriangle.side3 + "</li>");
  } else if (newOne === 'scalene') {
    $("ul#Scalene").append("<li>" + evalTriangle.side1 + ", " + evalTriangle.side2 + ", " + evalTriangle.side3 + "</li>");
  }
})
});
