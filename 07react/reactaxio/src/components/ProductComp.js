import React from "react";
import { useParams } from "react-router-dom";

function ProductComp() {
  const params = useParams();
  return <div>ProductComp{params.num}</div>;
}

export default ProductComp;
