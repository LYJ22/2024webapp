import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const listCnt = 10;
  const pagerCnt = 7;
  const [totalpage, setTotalpage] = useState(1);
  const [currentpage, setCurrentpage] = useState(1);

  const api = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setData(res.data);
      setTotalpage(res.data.length / listCnt);
    });
  };

  useEffect(() => {
    api();
  }, []);

  const pageViewNumber = () => {
    const pageNubers = [];
    const startPage = Math.floor(((currentpage - 1) / pagerCnt) * pagerCnt + 1);
  };

  return (
    <div>
      데이터
      {data.map((item, i) => {
        return (
          <div key={i}>
            {item.id} . {item.title}
          </div>
        );
      })}
    </div>
  );
}

export default App;
