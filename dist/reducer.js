
export const reducer = (state = [], action) => {
  if (action.type === "ADD") {
    return [
      ...state,
      {
        count: ++lastCount,
        description: action.payload.description,
        resolved: false,
      },
    ];
  } else if (action.type === "SUBTRACT") {
    return state.filter((bug) => bug.count !== action.payload.count);
  } else if (action.type === "RESET") {
    return []; // Resetting the state to an empty array
  } else {
    return state; // Return the current state for any other action
  }
};
