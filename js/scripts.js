// FIELD COLOR /////////////////////////////////////////////////
var colors = ["red", "blue", "yellow", "black", "green", "purple", "mulberry", "brown", "ash", "white", "sky", "amaranth", "ermine", "vair"];
var currentColor = 0;
var colorLoop = function(currentColor) {
  return colors[Math.abs(currentColor % colors.length)];
}

$(".field").addClass(colors[0]);

$(".field-right").click(function(){
  $(".field").removeClass(colorLoop(currentColor));
  currentColor++;
  $(".field").addClass(colorLoop(currentColor));
})

$(".field-left").click(function(){
  if(currentColor === 0) {
    currentColor = colors.length;
  }

  $(".field").removeClass(colorLoop(currentColor));
  currentColor--;
  $(".field").addClass(colorLoop(currentColor));
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
var ordColors = ["ermine", "vair", "red", "blue", "white", "yellow", "black", "green", "purple", "mulberry", "ash", "brown", "sky", "amaranth"];
var currentOrdColor = 0;
var colorOrdLoop = function(currentOrdColor) {
  return ordColors[Math.abs(currentOrdColor % ordColors.length)];
}

$(".ordinary").addClass(ordColors[currentOrdColor]);

$(".ordcolor-right").click(function(){
  $(".ordinary").removeClass(colorOrdLoop(currentOrdColor));
  currentOrdColor++;
  $(".ordinary").addClass(colorOrdLoop(currentOrdColor));
})

$(".ordcolor-left").click(function(){
  if(currentOrdColor === 0) {
    currentOrdColor = colors.length;
  }

  $(".ordinary").removeClass(colorOrdLoop(currentOrdColor));
  currentOrdColor--;
  $(".ordinary").addClass(colorOrdLoop(currentOrdColor));
})
