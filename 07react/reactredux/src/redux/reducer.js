const init = {
  id: 1,
  name: "AWS",
  age: 4,
};

const reducer = (state = init, action) => {
  if (action.type == "up") {
    return { ...state, age: state.age + action.payload };
  }
  if (action.type == "down") {
    return { ...state, age: state.age - action.payload };
  }
  return state;
};

export default reducer;
