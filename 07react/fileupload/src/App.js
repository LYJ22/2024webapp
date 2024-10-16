import React, { useEffect, useState } from "react";
import { getFileList } from "./api/apiFile";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";
import ImageList from "./components/ImageList";

function App() {
  const [imgData, setImgData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    const updateImageList = getFileList();
    setImgData(updateImageList);
  };

  return (
    <div className="App">
      <h2>사진첩</h2>
      <ImageList imgData={imgData} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}

export default App;
