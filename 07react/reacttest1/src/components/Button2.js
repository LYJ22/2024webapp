import React from "react";

function Button2({ children, testOnly, action, className }) {
  let cssClass = testOnly ? "test-btn" : "btn";
  cssClass = cssClass + " " + className;
  return (
    <div className={cssClass} onClick={action}>
      {children}
    </div>
  );
}

export default Button2;
