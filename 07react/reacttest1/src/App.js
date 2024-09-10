import React, { useState } from "react";
import Button from "./components/Button";
import "./index.css";
import Button2 from "./components/Button2";

function App() {
  const [close, setClose] = useState(true);
  const [text, setText] = useState("this is button");
  const handleOpen = () => {
    setClose(true);
    setText("this is button");
  };
  const handleClose = () => {
    setClose(false);
    setText("this is not button");
  };

  return (
    <div>
      {/* testOnly=false or testOnly(true) */}
      <p>{text}</p>
      <Button className="btn-primary" close={close} han="han">
        click
      </Button>
      <Button className="btn-info" close={close}>
        out
      </Button>

      <Button2 testOnly={true} action={handleOpen} className="btn-info">
        accept
      </Button2>
      <Button2 testOnly={true} action={handleClose} className="btn-warn">
        deny
      </Button2>
    </div>
  );
}

export default App;
