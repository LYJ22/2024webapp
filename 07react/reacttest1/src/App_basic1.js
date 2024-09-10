import React, { useState } from "react";
import "./index.css";
import logo from "./logo.svg";

function App() {
  let text = "hello";
  //a는 데이터를 불러오는 것. b는 변경시킬 함수를 불러오는 것
  // const [a,b] = useState()
  const [box, setBox] = useState("han");
  const [num, setNum] = useState(0);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState("안녕하세요");
  let [shop, setShop] = useState(["사과", "복숭아", "바나나"]);
  let [customer, setCustomer] = useState(["철수", "영희", "민수"]);

  return (
    <>
      <div
        className="container"
        style={{ background: "orange", fontSize: "20px" }}
      >
        hi
        <h2>{text}</h2>
        <p>{box}</p>
        {num}
      </div>
      <header>ddd</header>
      {/* <img src={logo} /> */}
      <button
        onClick={() => {
          // alert("test");
          setBox("test");
        }}
      >
        값변화
      </button>

      <button
        onClick={() => {
          setNum(10);
        }}
      >
        숫자변화
      </button>

      <button
        onClick={() => {
          setModal(!modal);
        }}
      >
        modal
      </button>

      {shop.map((item, index) => {
        return (
          <>
            <div key={index}>{item}</div>
          </>
        );
      })}

      <h4>고객 명단</h4>
      {customer.map(function (item, i) {
        return (
          <>
            <div key={i}>
              고객{i} : {item}
            </div>
          </>
        );
      })}

      {/*변수 모달(modal)을 불러오기 위한 중괄호 */}
      <button
        onClick={() => {
          setTitle("안녕히 가세요~");
        }}
      >
        제목 바꾸기
      </button>
      {modal === true ? <Modal title={title} image="test1" /> : null}
      {modal === true ? <Modal2 title="안녕히 가세요" /> : null}
    </>
  );
}

//component (child)
function Modal(props) {
  return (
    <>
      <div className="modal">
        <h3>공지사항 {props.title}</h3>
        <p>상세내용 {props.image}</p>
      </div>
    </>
  );
}

function Modal2(props) {
  return (
    <>
      <div>
        <h3>공지사항2 </h3>
        <p>공지사항의 제목을 바꿔도 괜찮습니다.</p>
      </div>
    </>
  );
}

export default App;
