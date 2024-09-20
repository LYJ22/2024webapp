import React, { useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const getNum = (param, dValue) => {
  if (!param) {
    return dValue;
  }
  return parseInt(param);
};

// ListComp의 삼항연산자(주석과 같은 내용)
const useCustomMove = () => {
  const navigate = useNavigate();
  const [refresh, setRefresh] = useState(false);
  const [queryParams] = useSearchParams();
  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);

  const queryDefault = createSearchParams({ page, size }).toString();

  const moveToList = (pageParam) => {
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, 1);
      const sizeNum = getNum(pageParam.size, 1);
      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
    } else {
      queryStr = queryDefault;
    }

    navigate({
      pathname: "../list",
      search: queryStr,
    });

    setRefresh(!refresh);
  };

  const moveToRead = (num) => {
    navigate({
      pathname: `../list/${num}`,
      search: queryDefault,
    });
  };

  return { page, size, moveToList, moveToRead, refresh };
};

export default useCustomMove;
