import React, { useEffect, useState } from "react";
import { getFileList } from "./api/apiFile";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, ToastContainer } from "react-toastify";
import ImageList from "./components/ImageList";
import UploadFile from "./components/UploadFile";
import "./App.css";

function App() {
  const [imgData, setImgData] = useState([]);
  const [imgUpload, setImgUpload] = useState(false);
  useEffect(() => {
    fetchData();
  }, [imgUpload]);

  const fetchData = async () => {
    const updateImageList = await getFileList();
    setImgData(updateImageList);
  };

  const handleImageUpload = () => {
    setImgUpload(!imgUpload);
  };

  return (
    <div className="App">
      <h2>사진첩</h2>
      <UploadFile handleImageUpload={handleImageUpload} />
      <ImageList imgData={imgData} />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
