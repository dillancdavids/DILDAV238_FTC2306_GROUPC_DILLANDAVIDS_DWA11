import store from "./store"; // Assuming you have a valid Redux store set up

// Dispatching an action to add a new item to the store
store.dispatch({
  type: "ADD",
  payload: {
    description: "BUG1",
  },
});

// Subscribing to store changes
const unsubscribe = store.subscribe(() => {
  console.log("store has changed!", store.getState());
});

// Dispatching another action to subtract from the store count
store.dispatch({
  type: "SUBTRACT",
  payload: { count: 1 },
});

// Unsubscribe from store changes (assuming `unsubscribe` is a valid function returned by `store.subscribe`)
unsubscribe();

// Log the current state of the store
console.log(store.getState());
