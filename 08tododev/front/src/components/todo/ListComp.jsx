import React, { useEffect, useState } from "react";
import { getList } from "../../api/todoApi";
import { useSearchParams } from "react-router-dom";
import useCustomMove from "../../hooks/useCustomMove";

const initState = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: null,
  prev: false,
  next: false,
  totalCount: 0,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
};

function ListComp() {
  const [data, setData] = useState(initState);

  //   const [queryParams] = useSearchParams();

  //   const page = queryParams.get("page") ? parseInt(queryParams.get("page")) : 1;
  //   const size = queryParams.get("size") ? parseInt(queryParams.get("size")) : 10;

  const { page, size, moveToRead, refresh } = useCustomMove();

  // getList로 데이터가 들어오면 then이 실행됨
  useEffect(() => {
    getList({ page, size }).then((res) => {
      console.log(res);
      setData(res);
    });
  }, [page, size, refresh]);

  return (
    <div>
      {data.dtoList.map((item, i) => {
        return (
          <div
            key={i}
            className="flex border-b-2 py-3"
            onClick={() => {
              moveToRead(item.tno);
            }}
          >
            <div className="text-2xl w-1/12">{item.tno}</div>
            <div className="text-2xl w-8/12 font-extrabold">{item.title}</div>
            <div className="text-2xl w-3/12">{item.dueDate}</div>
          </div>
        );
      })}
    </div>
  );
}

export default ListComp;
