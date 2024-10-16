import React from "react";
import ModiComp from "../../components/todo/ModiComp";
import { useParams } from "react-router-dom";

function ModifyPage() {
  const { tno } = useParams();

  return (
    <div>
      <ModiComp tno={tno} />
    </div>
  );
}

export default ModifyPage;
