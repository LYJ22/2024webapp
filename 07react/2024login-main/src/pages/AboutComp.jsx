import React from "react";
import Layout from "../layout/Layout";
import useCustomLogin from "../hooks/useCustomLogin";
import { useNavigate } from "react-router-dom";

function AboutComp() {
  const { isLogin, loginState, moveToLoginReturn } = useCustomLogin();
  const navigate = useNavigate();

  console.log(loginState.email);
  if (!isLogin) {
    return moveToLoginReturn();
  }

  return (
    <Layout>
      <div>AboutComp</div>
    </Layout>
  );
}

export default AboutComp;
