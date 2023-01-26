//gesture area element
const gestureArea = document.getElementById("gesture-area");

//Hammer.js manager for the gesture area
const manager = new Hammer.Manager(gestureArea);

//gesture recognizers
manager.add(new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL }));
manager.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));

// Get the swipe and double tap counter elements
const swipeLefthCounterElement = document.getElementById("swipe-counter-left");
const swipeRightCounterElement = document.getElementById("swipe-counter-right");
const doubleTapCounterElement = document.getElementById("double-tap-counter");

//init counters
let swipeRightCounter = 0;
let swipeLeftCounter = 0;
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

manager.on("doubletap", function(event) {
  doubleTapCounter++;
  doubleTapCounterElement.innerHTML = `double taps: ${doubleTapCounter}`;
});