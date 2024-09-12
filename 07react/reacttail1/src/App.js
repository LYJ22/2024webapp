import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [num, setNum] = useState(2);

  // return에서 onClick={onClick}으로 쓰는 경우 인자값을 받으면
  // 실행이 이상하게 될 수 있다. onClick={onClick(1)} : 클릭 안 했는데 그냥 실행됨
  const onClick = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);

  // {data?.map((item, i) => ...)} 으로도 가능. 조건이 붙는 경우
  return (
    <div>
      <button onClick={onClick}>클릭</button>
      {data &&
        data.map((item, i) => {
          return (
            <div key={i}>
              {item.id} / {item.title}
            </div>
          );
        })}
    </div>
  );
}

export default App;
