import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const idVal = useSelector((s) => s.id);
  const nameVal = useSelector((state) => state.name);
  const ageVal = useSelector((s) => s.age);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "up", payload: 2 });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "down", payload: 2 });
        }}
      >
        -
      </button>
      <div>
        {idVal}. {nameVal} ~ {ageVal}
      </div>
    </div>
  );
}

export default Counter;
