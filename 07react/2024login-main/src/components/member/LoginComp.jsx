import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login, loginPostAsync } from "../../slices/loginSlice";
import { useNavigate } from "react-router-dom";
import useCustomLogin from "../../hooks/useCustomLogin";

const initState = {
  email: "",
  pw: "",
};

function LoginComp() {
  const [loginParam, setLoginParam] = useState({ ...initState });

  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { doLogin, moveToPath } = useCustomLogin();

  const handleChange = (e) => {
    loginParam[e.target.name] = e.target.value;
    setLoginParam({ ...loginParam });
  };
  const handleClickLogin = () => {
    // dispatch(loginPostAsync(loginParam))
    //   .unwrap()
    //   .then((data) => {
    //     if (data.error) {
    //       alert("email 또는 password 확인");
    //     } else {
    //       navigate({ pathname: "/" }, { replace: true });
    //     }
    //   });

    doLogin(loginParam).then((data) => {
      if (data.error) {
        alert("이메일과 비밀번호 확인");
      } else {
        moveToPath("/");
      }
    });
  };

  return (
    <div>
      {loginParam.email} / {loginParam.pw}
      <div className="h-screen  flex items-center">
        <div className="container mx-auto ">
          <div className="bg-gray-100 max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
            <div>
              <h3 className="font-bold text-2xl">Welcome to Startup</h3>
              <p className="text-gray-600 pt-2">Sign in to your account.</p>
            </div>
            <div className="flex flex-col">
              <div className="bg-gray-200 mt-10 rounded pt-3 mb-5">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-6 pt-3 rounded bg-gray-200">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-purple-600 transition duration-500 px-3 pb-3"
                  name="pw"
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-end"></div>
              <button
                onClick={handleClickLogin}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComp;
