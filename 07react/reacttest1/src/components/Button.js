import React from "react";

function Button({ children, testOnly, className, close, ...props }) {
  let cssClass = testOnly ? "test-button" : "btn";
  cssClass = cssClass + " " + className;
  cssClass = close ? cssClass : cssClass + " d-none";
  return (
    //children testOnly className 외의 모든 속성들이 자동으로 들어감
    <div className={cssClass} {...props}>
      {children}
    </div>
  );
}

export default Button;
