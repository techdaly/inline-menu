// FIELD COLOR /////////////////////////////////////////////////
var colors = ["red", "blue", "white", "yellow", "black", "green", "purple", "mulberry", "ash", "brown", "sky", "amaranth", "ermine", "vair"];
var currentColor = 0;
var colorLoop = function(currentColor) {
  return colors[Math.abs(currentColor % colors.length)];
}

$(".color").addClass(colors[0]);

$(".field-right").click(function(){
  $(".color").removeClass(colorLoop(currentColor));
  currentColor++;
  $(".color").addClass(colorLoop(currentColor));
})

$(".field-left").click(function(){
  if(currentColor === 0) {
    currentColor = colors.length;
  }

  $(".color").removeClass(colorLoop(currentColor));
  currentColor--;
  $(".color").addClass(colorLoop(currentColor));
})

// SHIELD SHAPE ////////////////////////////////////////////////

var shapes = ["heater", "cartouche", "swiss", "iberian", "lozenge"];
var currentShape = 0;
var shapeLoop = function(currentShape) {
  return shapes[Math.abs(currentShape % shapes.length)];
}

$(".shape").addClass(shapes[0]);

$(".shape-right").click(function(){
  $(".shape").removeClass(shapeLoop(currentShape));
  currentShape++;
  $(".shape").addClass(shapeLoop(currentShape));
})

$(".shape-left").click(function(){
  if(currentShape === 0) {
    currentShape = shapes.length;
  }

  $(".shape").removeClass(shapeLoop(currentShape));
  currentShape--;
  $(".shape").addClass(shapeLoop(currentShape));
})
