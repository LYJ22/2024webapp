import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

const initalData = {
  value: 10,
  title: "HBD",
};

const reducer = (state = initalData, action) => {
  console.log(action);
  if (action.type == "up") {
    return { ...state, value: state.value + action.payload };
  }
  if (action.type == "down") {
    return { ...state, value: state.value - action.payload };
  }
  return state;
};

// 괄호 안에 state 값. 가로선이 있지만 사용은 가능
const store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <div>App</div>
      <Counter />
    </Provider>
  );
}

function Counter() {
  // 위아래 똑같은 동작. {}안에 한줄인 경우에 가능
  // const counterValue = useSelector((state)=>{return state.value})
  const counterValue = useSelector((state) => state.value);
  const titleValue = useSelector((state) => state.title);
  const dispatch = useDispatch();

  return (
    <>
      {counterValue} / {titleValue}
      <button
        onClick={() => {
          dispatch({ type: "up", payload: 1 });
        }}
      >
        클릭
      </button>
      <button
        onClick={() => {
          dispatch({ type: "down", payload: 0 });
        }}
      >
        다운
      </button>
    </>
  );
}

export default App;
