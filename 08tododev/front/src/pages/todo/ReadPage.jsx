import React from "react";
import ReadComp from "../../components/todo/ReadComp";
import { useParams } from "react-router-dom";

function ReadPage() {
  const { tno } = useParams();

  //   useParams는 주소에 있는 param 읽어온 것. ? 뒤의 수식은 query문
  return (
    <div>
      <ReadComp tno={tno} />
    </div>
  );
}

export default ReadPage;
