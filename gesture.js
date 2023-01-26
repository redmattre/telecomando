//gesture area element
const gestureArea = document.getElementById("gesture-area");

//Hammer.js manager for the gesture area
const manager = new Hammer.Manager(gestureArea);

//gesture recognizers
manager.add(new Hammer.Swipe({ direction: Hammer.DIRECTION_ALL, threshold: 100 }));
//manager.add(new Hammer.Swipe({ direction: Hammer.DIRECTION_VERTICAL, threshold: 150 }));
manager.add(new Hammer.Tap({ event: 'doubletap', taps: 2, threshold: 20, posThreshold: 100 }));

// Get the swipe and double tap counter elements
const swipeLefthCounterElement = document.getElementById("swipe-counter-left");
const swipeRightCounterElement = document.getElementById("swipe-counter-right");
const swipeUpCounterElement = document.getElementById("swipe-counter-up");
const swipeDownCounterElement = document.getElementById("swipe-counter-down");
const doubleTapCounterElement = document.getElementById("double-tap-counter");

//init counters
let swipeRightCounter = 0;
let swipeLeftCounter = 0;
let swipeUpCounter = 0;
let swipeDownCounter = 0;
let doubleTapCounter = 0;

//events
manager.on("swipeleft", function(event) 
{
  swipeLeftCounter++;
  swipeLefthCounterElement.innerHTML = `left swipes: ${swipeLeftCounter}`;
});

manager.on("swiperight", function(event) 
{
  swipeRightCounter++;
  swipeRightCounterElement.innerHTML = `right swipes: ${swipeRightCounter}`;
});

manager.on("swipeup", function(event) 
{
  swipeUpCounter++;
  swipeUpCounterElement.innerHTML = `up swipes: ${swipeUpCounter}`;
});

manager.on("swipedown", function(event) 
{
  swipeDownCounter++;
  swipeDownCounterElement.innerHTML = `down swipes: ${swipeDownCounter}`;
});

manager.on("doubletap", function(event) {
  doubleTapCounter++;
  doubleTapCounterElement.innerHTML = `double taps: ${doubleTapCounter}`;
});