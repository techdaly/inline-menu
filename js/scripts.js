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

// ORDINARY SHAPE ////////////////////////////////////////////////

var ordinaries = ["fess", "pale", "bend", "bend-sin", "cross", "saltire", "chevron", "pall-rev", "pall", "none"];
var currentOrd = 0;
var ordLoop = function(currentOrd) {
  return ordinaries[Math.abs(currentOrd % ordinaries.length)];
}

$(".ordinary").addClass(ordinaries[0]);

$(".ordinary-right").click(function(){
  $(".ordinary").removeClass(ordLoop(currentOrd));
  currentOrd++;
  $(".ordinary").addClass(ordLoop(currentOrd));
})

$(".ordinary-left").click(function(){
  if(currentOrd === 0) {
    currentOrd = ordinaries.length;
  }

  $(".ordinary").removeClass(ordLoop(currentOrd));
  currentOrd--;
  $(".ordinary").addClass(ordLoop(currentOrd));
})

// ORDINARY COLOR /////////////////////////////////////////////////
var colors = ["red", "blue", "white", "yellow", "black", "green", "purple", "mulberry", "ash", "brown", "sky", "amaranth", "ermine", "vair"];
var currentColor = 0;
var colorLoop = function(currentColor) {
  return colors[Math.abs(currentColor % colors.length)];
}

$(".ordinary").addClass(colors[12]);

$(".ordcolor-right").click(function(){
  $(".ordinary").removeClass(colorLoop(currentColor));
  currentColor++;
  $(".ordinary").addClass(colorLoop(currentColor));
})

$(".ordcolor-left").click(function(){
  if(currentColor === 0) {
    currentColor = colors.length;
  }

  $(".ordinary").removeClass(colorLoop(currentColor));
  currentColor--;
  $(".ordinary").addClass(colorLoop(currentColor));
})
