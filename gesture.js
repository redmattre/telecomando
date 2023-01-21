// Get the gesture area element
const gestureArea = document.getElementById("gesture-area");

// Create a new Hammer.js manager for the gesture area
const manager = new Hammer.Manager(gestureArea);

// Add a swipe gesture recognizer
manager.add(new Hammer.Swipe());

// Add a double tap gesture recognizer
manager.add(new Hammer.Tap({ event: 'doubletap', taps: 2 }));

// Get the swipe and double tap counter elements
const swipeCounterElement = document.getElementById("swipe-counter");
const doubleTapCounterElement = document.getElementById("double-tap-counter");

// Initialize counters
let swipeCounter = 0;
let doubleTapCounter = 0;

// Listen for swipe events
manager.on("swipe", function(event) {
  swipeCounter++;
  swipeCounterElement.innerHTML = `Swipe count: ${swipeCounter}`;
});

// Listen for double tap events
manager.on("doubletap", function(event) {
  doubleTapCounter++;
  doubleTapCounterElement.innerHTML = `Double tap count: ${doubleTapCounter}`;
});